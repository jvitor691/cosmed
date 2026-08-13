import "./footer.css";

import logo from "../../assets/logo-cosmed.png";
import { config } from "../../data/config";

import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer">

            <div
                className="footer-decoration"
                aria-hidden="true"
            >
                <span className="footer-glow footer-glow-blue" />
                <span className="footer-glow footer-glow-yellow" />
                <span className="footer-glow footer-glow-green" />

                <span className="footer-outline footer-outline-left" />
                <span className="footer-outline footer-outline-right" />
            </div>

            <div className="container footer-container">

                <div className="footer-grid">

                    {/* MARCA */}
                    <div className="footer-brand">


                        <p className="footer-slogan">
                            Estudar fica mais leve quando você
                            sabe para onde ir.
                        </p>


                        <div className="footer-social">

                            <a
                                href={config.instagram}
                                target="_blank"
                                rel="noreferrer"
                                className="footer-instagram"
                                aria-label="Instagram"
                            >
                                <InstagramIcon />
                            </a>

                            <a
                                href={config.tiktok}
                                target="_blank"
                                rel="noreferrer"
                                className="footer-tiktok"
                                aria-label="TikTok"
                            >
                                <FaTiktok />
                            </a>

                            <a
                                href={config.whatsapp}
                                target="_blank"
                                rel="noreferrer"
                                className="footer-whatsapp"
                                aria-label="WhatsApp"
                            >
                                <WhatsAppIcon />
                            </a>

                            <a
                                href={`mailto:${config.email}`}
                                className="footer-email"
                                aria-label="E-mail"
                            >
                                <EmailOutlinedIcon />
                            </a>

                        </div>


                    </div>


                    {/* GUIA */}
                    <div className="footer-column">

                        <h3>GUIA</h3>

                        <nav>
                            <a href="#">
                                Guia ENEM 2026
                            </a>

                            <a href="#trilhas">
                                Trilhas de estudo
                            </a>

                            <a href="#guia">
                                O que você recebe
                            </a>

                            <a href="#faq">
                                Dúvidas frequentes
                            </a>
                        </nav>

                    </div>


                    {/* COSMED */}
                    <div className="footer-column">

                        <h3>COSMED</h3>

                        <nav>
                            <a href="#sobre">
                                Quem é Thaís
                            </a>

                            <a
                                href={config.instagram}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Instagram
                            </a>

                            <a
                                href={config.tiktok}
                                target="_blank"
                                rel="noreferrer"
                            >
                                TikTok
                            </a>

                            <a
                                href={config.whatsapp}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Falar com a COSMED
                            </a>
                        </nav>

                    </div>


                    {/* AJUDA */}
                    <div className="footer-column">

                        <h3>AJUDA</h3>

                        <nav>
                            <a href={config.supportUrl}>
                                Suporte
                            </a>

                            <a href={config.termsUrl}>
                                Termos de Uso
                            </a>

                            <a href={config.privacyUrl}>
                                Política de Privacidade
                            </a>

                            <a href="#faq">
                                Perguntas frequentes
                            </a>
                        </nav>

                    </div>

                </div>


                <div className="footer-bottom">

                    <span>
                        © 2026 COSMED. Todos os direitos reservados.
                    </span>

                    <span>
                        Guia de Estudos COSMED • ENEM 2026
                    </span>

                </div>

            </div>

        </footer>
    );
};

export default Footer;