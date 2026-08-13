import thais from "../../assets/thais-cosmo-foto.jpg";
import "./about.css";

const About = () => {
    return (
        <section className="about-section">

            {/* =========================================
                DECORAÇÕES DE BACKGROUND
            ========================================= */}

            <div
                className="about-decoration"
                aria-hidden="true"
            >

                <span className="about-glow about-glow-yellow" />
                <span className="about-glow about-glow-green" />

                <span className="about-outline about-outline-left" />
                <span className="about-outline about-outline-right" />


            </div>


            <div className="container about-grid">

                {/* =========================================
                    FOTO
                ========================================= */}

                <div className="about-visual">

                    <div className="about-image">

                        <span className="about-image-label">
                            COSMED • ENEM 2026
                        </span>

                        <img
                            src={thais}
                            alt="Thaís Cosmo"
                        />



                    </div>

                </div>


                {/* =========================================
                    CONTEÚDO
                ========================================= */}

                <div className="about-content">

                    <span className="eyebrow dark">
                        CRIADO POR QUEM VIVE ESSA ROTINA
                    </span>


                    <h2>
                        Quem é{" "}
                        <span>Thaís Cosmo?</span>
                    </h2>


                    <p className="about-intro">
                        Thaís é vestibulanda de Medicina e
                        idealizadora da COSMED. Depois de anos
                        de preparação, mudanças de método e
                        prática, percebeu que sua evolução
                        aconteceu quando passou a estudar de
                        forma mais estratégica.
                    </p>


                    {/* =========================================
                        DESTAQUE
                    ========================================= */}

                    <div className="about-highlight">

                        <span
                            className="about-highlight-mark"
                            aria-hidden="true"
                        >
                            “
                        </span>

                        <p>
                            O Guia nasceu para reunir em um só
                            lugar aquilo que muitos vestibulandos
                            passam horas tentando encontrar
                            sozinhos:
                            <strong>
                                {" "}direção, ferramentas,
                                organização e um próximo passo
                                possível.
                            </strong>
                        </p>

                    </div>


                    {/* =========================================
                        NÚMEROS
                    ========================================= */}

                    <div className="stats">

                        <div className="stat-card stat-blue">

                            <span className="stat-index">
                                01
                            </span>

                            <strong>
                                158
                            </strong>

                            <span className="stat-description">
                                acertos no ENEM 2025
                            </span>

                        </div>


                        <div className="stat-card stat-yellow">

                            <span className="stat-index">
                                02
                            </span>

                            <strong>
                                42/45
                            </strong>

                            <span className="stat-description">
                                acertos em Matemática
                            </span>

                        </div>


                        <div className="stat-card stat-green">

                            <span className="stat-index">
                                03
                            </span>

                            <strong>
                                COSMED
                            </strong>

                            <span className="stat-description">
                                idealizadora do projeto
                            </span>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;