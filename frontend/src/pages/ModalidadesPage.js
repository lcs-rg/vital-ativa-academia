async function ModalidadesPage() {
    let modalidades = [];
    let error = null;

    try {
        modalidades = await window.api.get('/modalidades');
    } catch (e) {
        error = e.message;
    }

    return `
    ${window.Navbar()}
    <main class="main">
        <section class="page-header-section">
            <div class="container">
                <h1 class="page-title">Modalidades</h1>
                <p class="page-subtitle">Descubra a atividade ideal para você</p>
            </div>
        </section>

        <section class="section">
            <div class="container">
                ${error ? `<div class="alert alert-error">${error}</div>` : ''}
                <div class="modalidades-grid">
                    ${modalidades.length > 0 ? modalidades.map(m => window.ModalidadeCard(m)).join('') : '<p class="empty-state">Nenhuma modalidade disponível</p>'}
                </div>
            </div>
        </section>
    </main>
    ${window.Footer()}
    `;
}

window.ModalidadesPage = ModalidadesPage;