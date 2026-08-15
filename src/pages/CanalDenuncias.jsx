import LegalShell from "../components/LegalShell/LegalShell";
import PageMeta from "../components/PageMeta";

const email = "cosmedmentoria@gmail.com";

const CanalDenuncias = () => (
    <>
        <PageMeta title="Denúncias e Atendimento | COSMED" description="Canal oficial da COSMED para atendimento, privacidade, segurança e relatos de condutas inadequadas." />
        <LegalShell title="Canal de Denúncias e Atendimento">
            <section className="legal-section">
                <p>A COSMED disponibiliza um canal único para atendimento, privacidade, segurança e relatos de condutas inadequadas:</p>
                <div className="legal-contact"><p><strong>E-mail oficial</strong></p><p><a href={`mailto:${email}`}>{email}</a></p></div>
            </section>
            <section className="legal-section">
                <h2>4.1. O que pode ser comunicado</h2>
                <ul>
                    <li>dúvidas sobre compra, acesso, conteúdo, comunidade ou reembolso;</li>
                    <li>solicitações relacionadas aos direitos do titular de dados;</li>
                    <li>suspeita de fraude, vazamento, acesso indevido ou incidente de segurança;</li>
                    <li>compartilhamento ou venda não autorizada de materiais da COSMED;</li>
                    <li>assédio, discriminação, ameaça, golpe, spam ou conduta inadequada na comunidade;</li>
                    <li>outros fatos que possam violar estes documentos ou a legislação.</li>
                </ul>
            </section>
            <section className="legal-section"><h2>4.2. Informações úteis</h2><p>Para facilitar a apuração, informe uma descrição objetiva, data aproximada, canal em que ocorreu, evidências disponíveis e, se desejar resposta, um meio de contato. Não envie senhas, código de segurança de cartão, documentos completos ou dados sensíveis desnecessários.</p></section>
            <section className="legal-section"><h2>4.3. Tratamento do relato</h2><p>Os relatos serão recebidos de forma respeitosa e analisados conforme sua natureza. O acesso será limitado às pessoas que precisem atuar no caso. Poderemos solicitar esclarecimentos, preservar registros, aplicar medidas de moderação, encaminhar o tema à plataforma competente ou às autoridades quando necessário.</p></section>
            <section className="legal-section"><h2>4.4. Confidencialidade e boa-fé</h2><p>A identidade do denunciante será protegida na medida possível, sem promessa de anonimato absoluto quando a apuração ou a lei exigir identificação. Não serão admitidas retaliações contra relatos feitos de boa-fé. Comunicações deliberadamente falsas ou abusivas poderão ser tratadas conforme a legislação.</p></section>
            <section className="legal-section"><h2>4.5. Situações urgentes</h2><p>O canal da COSMED não substitui polícia, serviços de emergência, Hotmart, instituição financeira, órgãos de defesa do consumidor ou a ANPD. Em risco imediato, fraude financeira ou crime, procure também o serviço ou autoridade competente.</p></section>
        </LegalShell>
    </>
);

export default CanalDenuncias;
