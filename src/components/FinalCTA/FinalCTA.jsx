import FocusReveal from "../FocusReveal/FocusReveal";
import { pushDataLayerEvent } from "../../utils/dataLayer";

import "./finalCTA.css";

const FinalCTA = () => {
    return (
        <section className="final-cta">
            <div className="final-cta-glow final-cta-glow-blue" />
            <div className="final-cta-glow final-cta-glow-yellow" />

            <div className="container final-cta-content">
                <span className="final-cta-eyebrow">
                    SUA RETA FINAL COMEÇA AGORA
                </span>

                <FocusReveal
                    as="h2"
                    text="Você não precisa esperar se sentir pronto."
                    blur={18}
                    stagger={35}
                    className="final-cta-title"
                />

                <p className="final-cta-editorial">
                    Precisa começar do ponto em que está.
                </p>

                <p className="final-cta-description">
                    Escolha sua trilha, siga uma direção
                    possível e use as próximas semanas
                    com mais clareza.
                </p>

                <a
                    href="#oferta"
                    className="btn btn-yellow final-cta-button"
                    onClick={() => pushDataLayerEvent("cta_click", { cta_location: "final_cta" })}
                >
                    QUERO MEU GUIA DE ESTUDOS COSMED

                    <span>→</span>
                </a>
            </div>
        </section>
    );
};

export default FinalCTA;
