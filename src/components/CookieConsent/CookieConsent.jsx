import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { updateConsent } from "../../utils/dataLayer";
import "./cookieConsent.css";

const STORAGE_KEY = "cosmed_cookie_consent";
const DEFAULT_PREFERENCES = {
    necessary: true,
    analytics: false,
    advertising: false,
};

const readSavedConsent = () => {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
        const isValid =
            saved?.necessary === true &&
            typeof saved.analytics === "boolean" &&
            typeof saved.advertising === "boolean";

        return isValid ? saved : null;
    } catch {
        return null;
    }
};

const CookieConsent = () => {
    const savedConsent = readSavedConsent();
    const [isVisible, setIsVisible] = useState(!savedConsent);
    const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
    const [preferences, setPreferences] = useState(savedConsent || DEFAULT_PREFERENCES);
    const closeButtonRef = useRef(null);

    useEffect(() => {
        const openPreferences = () => {
            setPreferences(readSavedConsent() || DEFAULT_PREFERENCES);
            setIsPreferencesOpen(true);
        };

        window.addEventListener("cosmed:open-cookie-preferences", openPreferences);
        return () => window.removeEventListener("cosmed:open-cookie-preferences", openPreferences);
    }, []);

    useEffect(() => {
        if (!isPreferencesOpen) return undefined;

        closeButtonRef.current?.focus();
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsPreferencesOpen(false);
                return;
            }

            if (event.key !== "Tab") return;

            const dialog = closeButtonRef.current?.closest("[role='dialog']");
            const focusableElements = dialog?.querySelectorAll(
                "button:not([disabled]), input:not([disabled]), a[href]"
            );

            if (!focusableElements?.length) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isPreferencesOpen]);

    const saveConsent = (nextPreferences) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(nextPreferences));
        updateConsent(nextPreferences);
        setPreferences(nextPreferences);
        setIsPreferencesOpen(false);
        setIsVisible(false);
    };

    const acceptAll = () => saveConsent({ necessary: true, analytics: true, advertising: true });
    const rejectNonNecessary = () => saveConsent(DEFAULT_PREFERENCES);

    return (
        <>
            {isVisible && (
                <aside className="cookie-consent" aria-label="Consentimento de cookies">
                    <p>
                        Usamos cookies e tecnologias semelhantes para melhorar sua experiência e, com sua autorização,
                        medir o desempenho de campanhas e personalizar anúncios.{" "}
                        <Link to="/politica-de-cookies">Política de Cookies</Link>
                    </p>
                    <div className="cookie-consent-actions">
                        <button type="button" className="cookie-consent-primary" onClick={acceptAll}>
                            ACEITAR TODOS
                        </button>
                        <button type="button" className="cookie-consent-primary" onClick={rejectNonNecessary}>
                            REJEITAR NÃO NECESSÁRIOS
                        </button>
                        <button type="button" className="cookie-consent-secondary" onClick={() => setIsPreferencesOpen(true)}>
                            PREFERÊNCIAS
                        </button>
                    </div>
                </aside>
            )}

            {isPreferencesOpen && (
                <div className="cookie-preferences-backdrop" onMouseDown={(event) => {
                    if (event.target === event.currentTarget) setIsPreferencesOpen(false);
                }}>
                    <section
                        className="cookie-preferences"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="cookie-preferences-title"
                    >
                        <button
                            ref={closeButtonRef}
                            type="button"
                            className="cookie-preferences-close"
                            aria-label="Fechar preferências de cookies"
                            onClick={() => setIsPreferencesOpen(false)}
                        >
                            ×
                        </button>
                        <h2 id="cookie-preferences-title">Preferências de Cookies</h2>

                        <div className="cookie-preference-row">
                            <div><strong>Necessários</strong><span>Sempre ativos.</span></div>
                            <span className="cookie-always-active">ATIVO</span>
                        </div>
                        <label className="cookie-preference-row">
                            <div><strong>Analytics</strong><span>Ajuda a medir o uso e o desempenho do site.</span></div>
                            <input
                                type="checkbox"
                                checked={preferences.analytics}
                                onChange={(event) => setPreferences((current) => ({ ...current, analytics: event.target.checked }))}
                            />
                        </label>
                        <label className="cookie-preference-row">
                            <div><strong>Publicidade</strong><span>Permite medir campanhas e personalizar anúncios.</span></div>
                            <input
                                type="checkbox"
                                checked={preferences.advertising}
                                onChange={(event) => setPreferences((current) => ({ ...current, advertising: event.target.checked }))}
                            />
                        </label>

                        <button
                            type="button"
                            className="cookie-save-preferences"
                            onClick={() => saveConsent(preferences)}
                        >
                            SALVAR PREFERÊNCIAS
                        </button>
                    </section>
                </div>
            )}
        </>
    );
};

export default CookieConsent;
