import "./offerSection.css";

import { config } from "../../data/config";
import { offerBenefits } from "../../data/offerBenefits";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const OfferSection = () => {
    return (
        <section
            id="oferta"
            className="offer-section"
        >
            {/* DECORAÇÕES */}
            <div
                className="offer-decoration"
                aria-hidden="true"
            >
                <span className="offer-glow offer-glow-blue" />
                <span className="offer-glow offer-glow-yellow" />
                <span className="offer-glow offer-glow-green" />

                <span className="offer-outline offer-outline-left" />
                <span className="offer-outline offer-outline-right" />
            </div>

            <div className="container offer-container">

                {/* CABEÇALHO */}
                <div className="offer-heading">
                    <span className="offer-eyebrow">
                        ESCOLHA COMO GARANTIR O SEU GUIA
                    </span>

                    <h2>
                        Sua preparação pode começar{" "}
                        <span>agora.</span>
                    </h2>

                    <p>
                        Escolha a forma de compra que faz mais
                        sentido para você.
                    </p>
                </div>


                {/* CARDS */}
                <div className="offer-options">

                    {/* =====================================
                        HOTMART
                    ===================================== */}

                    <article className="offer-option offer-option-hotmart">

                        <div className="offer-option-top">

                            <span className="offer-option-icon">
                                <ShoppingBagOutlinedIcon />
                            </span>

                            <div>
                                <span className="offer-option-label">
                                    COMPRA PELA PLATAFORMA
                                </span>

                                <h3>
                                    Comprar pela Hotmart
                                </h3>
                            </div>

                        </div>


                        <p className="offer-option-description">
                            Finalize sua compra diretamente pela
                            plataforma e receba o acesso ao Guia
                            de Estudos COSMED.
                        </p>


                        {/* PREÇO */}
                        <div className="offer-price">

                            {config.originalPrice && (
                                <span className="offer-old-price">
                                    De {config.originalPrice}
                                </span>
                            )}

                            {config.launchPrice && (
                                <strong>
                                    {config.launchPrice}
                                </strong>
                            )}

                            {config.installments && (
                                <span className="offer-installments">
                                    ou {config.installments}
                                </span>
                            )}

                        </div>


                        {/* BENEFÍCIOS */}
                        <div className="offer-benefits">

                            {offerBenefits.map((benefit) => (
                                <div
                                    className="offer-benefit"
                                    key={benefit}
                                >
                                    <CheckRoundedIcon />

                                    <span>
                                        {benefit}
                                    </span>
                                </div>
                            ))}

                        </div>


                        <a
                            href={config.productLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-yellow offer-button"
                        >
                            COMPRAR PELA HOTMART
                            <span aria-hidden="true">→</span>
                        </a>

                    </article>


                    {/* =====================================
                        WHATSAPP
                    ===================================== */}

                    <article className="offer-option offer-option-whatsapp">

                        <span className="offer-whatsapp-badge">
                            DESCONTO EXCLUSIVO
                        </span>


                        <div className="offer-option-top">

                            <span className="offer-option-icon offer-option-icon-whatsapp">
                                <WhatsAppIcon />
                            </span>

                            <div>
                                <span className="offer-option-label">
                                    COMPRA DIRETA
                                </span>

                                <h3>
                                    Comprar pelo WhatsApp
                                </h3>
                            </div>

                        </div>


                        <p className="offer-option-description">
                            Prefere falar diretamente com a
                            Thaís? Pelo WhatsApp você pode
                            adquirir o Guia com uma condição
                            especial de desconto.
                        </p>


                        <div className="offer-whatsapp-highlight">

                            <span>
                                CONDIÇÃO ESPECIAL
                            </span>

                            <strong>
                                Desconto para compra pelo WhatsApp
                            </strong>

                            <p>
                                O valor da condição especial é
                                informado diretamente no
                                atendimento.
                            </p>

                        </div>


                        <div className="offer-whatsapp-points">

                            <div>
                                <CheckRoundedIcon />
                                <span>
                                    Atendimento direto
                                </span>
                            </div>

                            <div>
                                <CheckRoundedIcon />
                                <span>
                                    Condição exclusiva
                                </span>
                            </div>

                            <div>
                                <CheckRoundedIcon />
                                <span>
                                    Mesmo Guia de Estudos COSMED
                                </span>
                            </div>

                        </div>


                        <a
                            href={config.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="offer-whatsapp-button"
                        >
                            <WhatsAppIcon />

                            FALAR COM A THAÍS
                        </a>

                    </article>

                </div>


                {/* NOTA */}
                <p className="offer-note">
                    Produto digital • acesso conforme as
                    condições da forma de compra escolhida
                </p>

            </div>
        </section>
    );
};

export default OfferSection;
