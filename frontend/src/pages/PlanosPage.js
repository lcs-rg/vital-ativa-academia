async function PlanosPage() {
    let planos = [];
    let error = null;

    try {
        planos = await window.api.get('/planos');
    } catch (e) {
        error = e.message;
    }

    return `
    ${window.Navbar()}
    <main class="main">
        <section class="page-header-section">
            <div class="container">
                <h1 class="page-title">Nossos Planos</h1>
                <p class="page-subtitle">Escolha o plano ideal para você</p>
            </div>
        </section>

        <section class="section">
            <div class="container">
                ${error ? `<div class="alert alert-error">${error}</div>` : ''}
                <div class="plans-grid">
                    ${planos.length > 0 ? planos.map(p => window.PlanCard(p)).join('') : '<p class="empty-state">Nenhum plano disponível</p>'}
                </div>
            </div>
        </section>
    </main>
    ${window.Footer()}
    `;
}

window.PlanosPage = PlanosPage;