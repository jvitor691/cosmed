import "./header.css";
import logo from "../../assets/logo-cosmed.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { config } from "../../data/config";

const Header = () => {
    return (
        <header className="header">
            <div className="container header-content">

                <a
                    href="#topo"
                    className="header-logo"
                    aria-label="COSMED - início"
                >
                    <img src={logo} alt="COSMED" />
                </a>

                <a
                    href={config.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="header-whatsapp"
                    aria-label="Falar com a Thaís pelo WhatsApp"
                >
                    <WhatsAppIcon />
                    <span>Falar no WhatsApp</span>
                </a>

            </div>
        </header>
    );
};

export default Header;
