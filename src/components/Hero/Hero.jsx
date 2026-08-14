import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./hero.css";

import page1 from "../../assets/hero-page-1.png";
import page11 from "../../assets/hero-page-11.png";
import page26 from "../../assets/hero-page-26.png";

const Hero = () => {
    const heroRef = useRef(null);
    const visualRef = useRef(null);

    useEffect(() => {
        const hero = heroRef.current;
        const visual = visualRef.current;

        if (!hero || !visual) return;

        const prefersReducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

        if (prefersReducedMotion) return;

        /* =========================================
           ANIMAÇÃO DE ENTRADA
        ========================================= */

        const context = gsap.context(() => {
            gsap.from(
                [
                    ".hero-eyebrow",
                    ".hero-title-main",
                    ".hero-title-secondary",
                    ".hero-description",
                    ".hero-actions",
                    ".hero-badges",
                ],
                {
                    opacity: 0,
                    y: 24,

                    duration: 0.8,

                    stagger: 0.07,

                    ease: "power3.out",
                }
            );

            gsap.fromTo(
                ".hero-page-wrap",
                {
                    opacity: 0,

                    y: 65,

                    scale: 0.82,
                },
                {
                    opacity: 1,

                    y: 0,

                    scale: 1,

                    duration: 1.15,

                    stagger: 0.13,

                    ease: "back.out(1.3)",

                    delay: 0.2,
                }
            );

            gsap.from(
                ".hero-photo-glow",
                {
                    opacity: 0,

                    scale: 0.4,

                    duration: 1.4,

                    stagger: 0.12,

                    ease: "power3.out",

                    delay: 0.35,
                }
            );
        }, hero);

        /* =========================================
           PARALLAX
        ========================================= */

        const cards =
            visual.querySelectorAll(
                ".hero-page-wrap"
            );

        const surfaces =
            visual.querySelectorAll(
                ".hero-page-surface"
            );

        const moveX = [];
        const moveY = [];

        cards.forEach((card) => {
            moveX.push(
                gsap.quickTo(
                    card,
                    "x",
                    {
                        duration: 0.8,
                        ease: "power3.out",
                    }
                )
            );

            moveY.push(
                gsap.quickTo(
                    card,
                    "y",
                    {
                        duration: 0.8,
                        ease: "power3.out",
                    }
                )
            );
        });

        const handleMouseMove = (event) => {
            if (window.innerWidth <= 960) {
                return;
            }

            const rect =
                visual.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width -
                0.5;

            const y =
                (event.clientY - rect.top) /
                rect.height -
                0.5;

            const depths = [
                18,
                28,
                38,
            ];

            cards.forEach(
                (card, index) => {
                    moveX[index](
                        x * depths[index]
                    );

                    moveY[index](
                        y *
                        depths[index] *
                        0.65
                    );
                }
            );

            surfaces.forEach(
                (surface, index) => {
                    const power =
                        1 +
                        index * 0.15;

                    gsap.to(
                        surface,
                        {
                            rotateY:
                                x *
                                5 *
                                power,

                            rotateX:
                                -y *
                                4 *
                                power,

                            duration: 0.7,

                            ease: "power3.out",

                            overwrite: "auto",
                        }
                    );
                }
            );
        };

        const handleMouseLeave = () => {
            cards.forEach(
                (card, index) => {
                    moveX[index](0);
                    moveY[index](0);
                }
            );

            gsap.to(
                surfaces,
                {
                    rotateX: 0,
                    rotateY: 0,

                    duration: 0.8,

                    ease: "power3.out",
                }
            );
        };

        visual.addEventListener(
            "mousemove",
            handleMouseMove
        );

        visual.addEventListener(
            "mouseleave",
            handleMouseLeave
        );

        return () => {
            visual.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            visual.removeEventListener(
                "mouseleave",
                handleMouseLeave
            );

            context.revert();
        };
    }, []);

    return (
        <section
            className="hero"
            ref={heroRef}
        >
            <div className="container hero-grid">
                {/* =================================
                    CONTEÚDO
                ================================= */}

                <div className="hero-content">
                    <span className="hero-eyebrow">
                        GUIA DE ESTUDOS COSMED • ENEM 2026
                    </span>

                    <h1 className="hero-title">
                        <span className="hero-title-main">
                            Você não precisa
                            <br />
                            estudar tudo.
                        </span>

                        <span className="hero-title-secondary">
                            Precisa saber o que fazer agora.
                        </span>
                    </h1>

                    <p className="hero-description">
                        Um guia prático para entender seu momento de
                        estudo, escolher sua trilha e seguir uma
                        preparação possível até o ENEM — com
                        cronogramas, calendários, estratégias e
                        ferramentas para você não precisar descobrir
                        tudo sozinho.
                    </p>

                    <div className="hero-actions">
                        <a
                            href="#oferta"
                            className="btn btn-yellow hero-main-button"
                        >
                            QUERO MINHA APROVAÇÃO

                            <span aria-hidden="true">
                                →
                            </span>
                        </a>

                        <a
                            href="#guia"
                            className="hero-secondary-link"
                        >
                            Ver o Guia por dentro
                        </a>
                    </div>

                    <div className="hero-badges">
                        <span>
                            3 trilhas
                        </span>

                        <span>
                            100% digital
                        </span>

                        <span>
                            Acesso imediato
                        </span>

                        <span>
                            Cronogramas + calendários
                        </span>
                    </div>
                </div>

                {/* =================================
                    VISUAL DO GUIA
                ================================= */}

                <div
                    className="hero-visual"
                    ref={visualRef}
                >
                    {/* BRILHOS */}

                    <div
                        className="hero-photo-glows"
                        aria-hidden="true"
                    >
                        <span className="hero-photo-glow hero-photo-glow-red" />

                        <span className="hero-photo-glow hero-photo-glow-blue" />

                        <span className="hero-photo-glow hero-photo-glow-green" />
                    </div>

                    {/* =================================
                        PÁGINA 1
                    ================================= */}

                    <div className="hero-page-wrap hero-page-wrap-1">
                        <div className="hero-page-float hero-page-float-1">
                            <div className="hero-page-surface">
                                <img
                                    src={page1}
                                    alt="Capa do Guia de Estudos COSMED"
                                />

                                <span
                                    className="hero-page-shine"
                                    aria-hidden="true"
                                />
                            </div>
                        </div>
                    </div>

                    {/* =================================
                        PÁGINA 11
                    ================================= */}

                    <div className="hero-page-wrap hero-page-wrap-2">
                        <div className="hero-page-float hero-page-float-2">
                            <div className="hero-page-surface">
                                <img
                                    src={page11}
                                    alt="Página do Guia COSMED com indicações de aulas"
                                />

                                <span
                                    className="hero-page-shine"
                                    aria-hidden="true"
                                />
                            </div>
                        </div>
                    </div>

                    {/* =================================
                        PÁGINA 26
                    ================================= */}

                    <div className="hero-page-wrap hero-page-wrap-3">
                        <div className="hero-page-float hero-page-float-3">
                            <div className="hero-page-surface">
                                <img
                                    src={page26}
                                    alt="Página do Guia COSMED sobre caderno de erros"
                                />

                                <span
                                    className="hero-page-shine"
                                    aria-hidden="true"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;