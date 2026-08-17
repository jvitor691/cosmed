import "./header.css";
import logo from "../../assets/logo-cosmed.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { pushDataLayerEvent } from "../../utils/dataLayer";
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
                    <img src={logo} alt="COSMED" width="500" height="500" />
                </a>

                <a
                    href={config.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="header-whatsapp"
                    aria-label="Falar com a Thaís pelo WhatsApp"
                    onClick={() => pushDataLayerEvent("whatsapp_click")}
                >
                    <WhatsAppIcon />
                    <span>Falar no WhatsApp</span>
                </a>

            </div>
        </header>
    );
};

export default Header;
