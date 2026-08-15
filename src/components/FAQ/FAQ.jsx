import { useState } from "react";

import { faqItems } from "../../data/faq";
import { config } from "../../data/config";

import "./FAQ.css";

const FAQ = () => {
    const [open, setOpen] = useState(0);

    const items = faqItems
        .filter((item) => !item.isPaymentMethods || config.paymentMethods)
        .map((item) =>
            item.isPaymentMethods
                ? { ...item, answer: config.paymentMethods }
                : item
        );

    const toggleItem = (index) => {
        setOpen((current) =>
            current === index ? null : index
        );
    };

    return (
        <section id="faq" className="faq-section">

            {/* =========================================
                DECORAÇÕES GERAIS
            ========================================= */}

            <div
                className="faq-background-decoration"
                aria-hidden="true"
            >
                <span className="faq-section-glow faq-section-glow-blue" />
                <span className="faq-section-glow faq-section-glow-yellow" />

                <span className="faq-section-outline faq-section-outline-left" />
                <span className="faq-section-outline faq-section-outline-right" />
            </div>


            <div className="container faq-grid">

                {/* =========================================
                    BLOCO ESQUERDO
                ========================================= */}

                <div className="faq-intro">

                    {/* DECORAÇÃO INTERNA */}
                    <div
                        className="faq-intro-decoration"
                        aria-hidden="true"
                    >
                        <span className="faq-big-word">
                            FAQ
                        </span>

                        <span className="faq-intro-orb faq-intro-orb-blue" />
                        <span className="faq-intro-orb faq-intro-orb-yellow" />
                    </div>


                    <div className="faq-intro-content">

                        <span className="faq-eyebrow">
                            DÚVIDAS
                        </span>


                        <span className="faq-label">
                            FAQ
                        </span>


                        <h2>
                            Dúvidas
                            <span> frequentes.</span>
                        </h2>


                        <span
                            className="faq-title-line"
                            aria-hidden="true"
                        />


                        <p className="faq-intro-text">
                            Reunimos as dúvidas mais comuns de
                            quem está decidindo começar a sua
                            trilha com a COSMED.
                        </p>


                        <div className="faq-mini-message">
                            <span>?</span>

                            <p>
                                Ainda ficou com alguma dúvida?
                                Você também pode falar diretamente
                                com a gente pelo WhatsApp.
                            </p>
                        </div>

                    </div>

                </div>


                {/* =========================================
                    ACCORDION
                ========================================= */}

                <div className="faq-accordion">

                    <div className="faq-list">

                        {items.map((item, index) => {
                            const isOpen = open === index;

                            return (
                                <article
                                    className={`faq-item ${isOpen ? "active" : ""
                                        }`}
                                    key={item.question}
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            toggleItem(index)
                                        }
                                        aria-expanded={isOpen}
                                    >
                                        <span className="faq-question">
                                            {item.question}
                                        </span>

                                        <span
                                            className="faq-icon"
                                            aria-hidden="true"
                                        >
                                            {isOpen ? "−" : "+"}
                                        </span>
                                    </button>


                                    {isOpen && (
                                        <div className="faq-answer">
                                            <p>
                                                {item.answer}
                                            </p>
                                        </div>
                                    )}

                                </article>
                            );
                        })}

                    </div>

                </div>

            </div>
        </section>
    );
};

export default FAQ;
