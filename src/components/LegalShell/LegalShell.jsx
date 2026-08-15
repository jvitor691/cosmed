import { Link } from "react-router-dom";

import "./legalShell.css";

const LegalShell = ({
    eyebrow = "COSMED",
    title,
    description,
    children,
}) => {
    return (
        <main className="legal-page">
            <div
                className="legal-decoration"
                aria-hidden="true"
            >
                <span className="legal-glow legal-glow-blue" />
                <span className="legal-glow legal-glow-yellow" />
            </div>

            <div className="legal-container">
                <Link
                    to="/"
                    className="legal-back"
                >
                    <span aria-hidden="true">
                        ←
                    </span>

                    Voltar para a página inicial
                </Link>

                <header className="legal-header">
                    <span className="legal-eyebrow">
                        {eyebrow}
                    </span>

                    <h1>
                        {title}
                    </h1>

                    {description && (
                        <p>
                            {description}
                        </p>
                    )}
                </header>

                <article className="legal-content">
                    {children}
                </article>

                <div className="legal-footer-note">
                    <span>
                        COSMED
                    </span>

                    <nav aria-label="Documentos legais">
                        <Link to="/politica-de-privacidade">Privacidade</Link>
                        <Link to="/termos-de-uso">Termos de Uso</Link>
                        <Link to="/politica-de-cookies">Cookies</Link>
                        <Link to="/canal-de-denuncias">Denúncias e Atendimento</Link>
                        <Link to="/">Voltar ao início</Link>
                    </nav>
                </div>
            </div>
        </main>
    );
};

export default LegalShell;
