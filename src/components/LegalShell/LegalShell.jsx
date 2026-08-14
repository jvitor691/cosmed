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

                    <Link to="/">
                        Voltar ao início
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default LegalShell;
