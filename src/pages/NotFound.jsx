import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

import "./notFound.css";

const NotFound = () => {
    return (
        <>
            <PageMeta
                title="Página não encontrada | COSMED"
                description="A página solicitada não foi encontrada."
                robots="noindex, follow"
            />
            <main className="not-found">
                <div className="not-found-card">
                    <span className="not-found-code">404</span>
                    <h1>Página não encontrada</h1>
                    <p>A página que você procura não existe ou foi movida.</p>
                    <Link to="/" className="btn btn-yellow">
                        Voltar para a página inicial
                    </Link>
                </div>
            </main>
        </>
    );
};

export default NotFound;
