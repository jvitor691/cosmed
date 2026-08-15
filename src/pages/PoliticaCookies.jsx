import LegalShell from "../components/LegalShell/LegalShell";
import PageMeta from "../components/PageMeta";

const PoliticaCookies = () => (
    <>
        <PageMeta title="Política de Cookies | COSMED" description="Entenda como a COSMED pode utilizar cookies e tecnologias semelhantes em sua página." />
        <LegalShell title="Política de Cookies" description="Última atualização: 15 de agosto de 2026">
            <section className="legal-section"><p>Cookies são pequenos arquivos ou tecnologias semelhantes armazenados ou acessados no dispositivo do visitante. Eles podem permitir funcionamento técnico, lembrar escolhas, medir audiência e avaliar campanhas.</p></section>
            <section className="legal-section">
                <h2>3.1. Categorias</h2>
                <div className="legal-table-wrapper" tabIndex="0" aria-label="Tabela de categorias de cookies">
                    <table className="legal-table">
                        <thead><tr><th scope="col">Categoria</th><th scope="col">Finalidade</th><th scope="col">Controle</th></tr></thead>
                        <tbody>
                            <tr><td>Necessários</td><td>Segurança, navegação, sessão, formulários, pagamento e funcionamento básico.</td><td>Sempre ativos quando indispensáveis.</td></tr>
                            <tr><td>Preferências</td><td>Memorizar escolhas e configurações do visitante.</td><td>Pode depender de consentimento.</td></tr>
                            <tr><td>Analíticos</td><td>Medir visitas, desempenho e interação com páginas e campanhas.</td><td>Desativados por padrão quando dependerem de consentimento.</td></tr>
                            <tr><td>Publicidade</td><td>Mensuração, atribuição e personalização de anúncios, inclusive pela Meta.</td><td>Exigem escolha adequada do visitante quando aplicável.</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="legal-section"><h2>3.2. Meta e publicidade</h2><p>A COSMED realiza anúncios pela Meta. Se o site estiver configurado com Meta Pixel, API de Conversões ou tecnologia semelhante, poderão ser tratados eventos como visualização de página, clique, início ou conclusão de compra, além de identificadores técnicos.</p></section>
            <section className="legal-section"><h2>3.3. Consentimento e preferências</h2><p>Quando o consentimento for necessário, cookies não essenciais devem permanecer desativados até a escolha do visitante. O banner deverá apresentar opções claras para aceitar todos, rejeitar os não necessários e selecionar preferências, sem dificultar injustificadamente a recusa.</p><p>O visitante poderá alterar preferências no gerenciador de cookies do site e também excluir ou bloquear cookies no navegador. O bloqueio de cookies necessários pode comprometer funcionalidades.</p></section>
            <section className="legal-section"><h2>3.4. Cookies de terceiros</h2><p>Hotmart, Meta e outros fornecedores podem definir suas próprias tecnologias, períodos de retenção e controles. Recomenda-se consultar as políticas desses serviços. A lista exata de cookies pode variar conforme a configuração e atualizações técnicas.</p></section>
            <section className="legal-section"><h2>3.5. Prazo de armazenamento</h2><p>Cookies de sessão expiram ao final da navegação; cookies persistentes permanecem por período definido pelo fornecedor ou até serem apagados. A COSMED deve manter no gerenciador do site uma relação atualizada das tecnologias efetivamente utilizadas, suas finalidades e duração.</p></section>
            <section className="legal-section"><h2>3.6. Atualizações</h2><p>Esta Política poderá ser alterada quando forem incluídas ou removidas tecnologias. Mudanças relevantes deverão refletir-se também no banner e no painel de preferências.</p></section>
        </LegalShell>
    </>
);

export default PoliticaCookies;
