import "./hero.css";

const Hero = () => {
    return (
        <section className="hero">

            {/* DECORAÇÃO DO BACKGROUND */}
            <div
                className="hero-decoration"
                aria-hidden="true"
            >
                <span className="hero-blob hero-blob-blue" />
                <span className="hero-blob hero-blob-yellow" />
                <span className="hero-blob hero-blob-green" />
            </div>

            <div className="container hero-grid">

                <div className="hero-content">

                    <span className="hero-eyebrow">
                        GUIA DE ESTUDOS COSMED • ENEM 2026
                    </span>

                    <h1 className="hero-title">

                        <span className="hero-title-white">
                            Você não precisa estudar tudo.
                        </span>

                        <span className="hero-title-highlight">
                            Precisa saber o que fazer agora.
                        </span>

                    </h1>

                    <p className="hero-description">
                        Um guia prático para entender seu momento de estudo,
                        escolher sua trilha e seguir uma preparação possível
                        até o ENEM — com cronogramas, calendários, estratégias
                        e ferramentas para você não precisar descobrir tudo
                        sozinho.
                    </p>

                    <div className="hero-actions">

                        <a
                            href="#oferta"
                            className="btn btn-yellow hero-main-button"
                        >
                            QUERO MINHA APROVAÇÃO
                            <span aria-hidden="true">→</span>
                        </a>

                        <a
                            href="#guia"
                            className="hero-secondary-link"
                        >
                            Ver o Guia por dentro
                        </a>

                    </div>

                    <div className="hero-badges">
                        <span>3 trilhas</span>
                        <span>100% digital</span>
                        <span>Acesso imediato</span>
                        <span>Cronogramas + calendários</span>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;