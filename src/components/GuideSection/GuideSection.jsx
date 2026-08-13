import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./guideSection.css";

import RoundCarousel from "../Carrosel/RoundCarousel";

import { slides } from "../../data/slides";
import { benefits } from "../../data/benefits";

gsap.registerPlugin(SplitText, ScrollTrigger);

const GuideSection = () => {
    const guideFlowRef = useRef(null);

    useEffect(() => {
        const guideFlow = guideFlowRef.current;

        if (!guideFlow) return;

        /*
         * Respeita usuários que preferem
         * reduzir animações.
         */
        const prefersReducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

        if (prefersReducedMotion) return;

        const textElements =
            guideFlow.querySelectorAll(
                ".guide-flow-text"
            );

        const splits = [];

        const context = gsap.context(() => {
            textElements.forEach((element) => {
                const split = SplitText.create(
                    element,
                    {
                        type: "chars,words,lines",

                        /*
                         * Refaz o split caso o tamanho
                         * do texto/container mude.
                         */
                        autoSplit: true,

                        onSplit(self) {
                            return gsap.from(
                                self.chars,
                                {
                                    opacity: 0,

                                    y: 18,

                                    filter:
                                        "blur(6px)",

                                    duration: 0.65,

                                    ease:
                                        "power3.out",

                                    stagger: {
                                        each: 0.018,
                                        from: "start",
                                    },

                                    scrollTrigger: {
                                        trigger: element,

                                        start:
                                            "top 88%",

                                        once: true,
                                    },
                                }
                            );
                        },
                    }
                );

                splits.push(split);
            });
        }, guideFlow);

        return () => {
            splits.forEach((split) => {
                split.revert();
            });

            context.revert();
        };
    }, []);

    return (
        <section
            id="guia"
            className="guide-section"
        >
            <div className="container">

                {/* =========================================
                    CABEÇALHO
                ========================================= */}

                <div className="section-heading center light">

                    <span className="eyebrow">
                        O QUE VOCÊ RECEBE
                    </span>

                    <h2>
                        Tudo isso dentro do Guia.
                    </h2>

                    <p>
                        Veja páginas reais do material para
                        entender exatamente o que você vai
                        receber.
                    </p>

                </div>


                {/* =========================================
                    CONTEÚDO PRINCIPAL
                ========================================= */}

                <div className="guide-grid">

                    {/* BENEFÍCIOS */}

                    <div className="benefits-grid">

                        {benefits.map((benefit) => (
                            <article
                                className="benefit-card"
                                key={benefit.title}
                            >

                                <span
                                    className="benefit-dot"
                                    aria-hidden="true"
                                />

                                <h3>
                                    {benefit.title}
                                </h3>

                                <p>
                                    {benefit.description}
                                </p>

                            </article>
                        ))}

                    </div>


                    {/* CARROSSEL */}

                    <div className="guide-carousel">

                        <RoundCarousel
                            images={slides}
                            imageWidth={280}
                            imageHeight={410}
                            spacing={2.2}
                            speed={5}
                            direction="right"
                            drag={true}
                            sensitivity={1.4}
                            tilt={-5}
                            perspective={1800}
                            cornerRadius={18}
                        />

                    </div>

                </div>


                {/* =========================================
                    GUIDE FLOW
                ========================================= */}

                <div
                    className="guide-flow"
                    ref={guideFlowRef}
                >

                    <div className="guide-flow-item">

                        <span className="guide-flow-number">
                            01
                        </span>

                        <strong className="guide-flow-text">
                            Descubra sua trilha
                        </strong>

                    </div>


                    <div className="guide-flow-item">

                        <span className="guide-flow-number">
                            02
                        </span>

                        <strong className="guide-flow-text">
                            Siga uma direção
                        </strong>

                    </div>


                    <div className="guide-flow-item">

                        <span className="guide-flow-number">
                            03
                        </span>

                        <strong className="guide-flow-text">
                            Pratique e corrija
                        </strong>

                    </div>


                    <div className="guide-flow-item">

                        <span className="guide-flow-number">
                            04
                        </span>

                        <strong className="guide-flow-text">
                            Ajuste e evolua
                        </strong>

                    </div>


                    {/* LINHA LUMINOSA INFERIOR */}

                    <span
                        className="guide-flow-outline"
                        aria-hidden="true"
                    />

                </div>


                {/* =========================================
                    CTA
                ========================================= */}

                <div className="center">

                    <a
                        href="#oferta"
                        className="btn btn-yellow"
                    >
                        QUERO MEU GUIA DE ESTUDOS →
                    </a>

                </div>

            </div>
        </section>
    );
};

export default GuideSection;