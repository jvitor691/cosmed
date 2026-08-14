import { Link } from "react-router-dom";

import "./notFound.css";

const NotFound = () => {
    return (
        <main className="not-found">
            <div className="not-found-card">
                <span className="not-found-code">404</span>
                <h1>Página não encontrada</h1>
                <p>A página que você procura não existe ou foi movida.</p>
                <Link to="/" className="btn btn-yellow">
                    Voltar para o início
                </Link>
            </div>
        </main>
    );
};

export default NotFound;
