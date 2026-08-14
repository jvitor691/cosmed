import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// import TermosUso from "./pages/Termos-e-Condicao-de-Uso";
// import PoliticaPrivacidade from "./pages/Politica-de-Privacidade";
// import PoliticaCookies from "./pages/Politica-de-Cookies";
// TODO: ativar as páginas legais quando os textos definitivos forem fornecidos.
// import CanalDenuncias from "./pages/Canal-de-Denuncia";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/termos-de-uso" element={<TermosUso />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
        <Route path="/canal-de-denuncias" element={<CanalDenuncias />} />
        */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
