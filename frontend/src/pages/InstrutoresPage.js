async function InstrutoresPage() {
    let instrutores = [];
    let error = null;

    try {
        instrutores = await window.api.get('/instrutores');
    } catch (e) {
        error = e.message;
    }

    return `
    ${window.Navbar()}
    <main class="main">
        <section class="page-header-section">
            <div class="container">
                <h1 class="page-title">Nossa Equipe</h1>
                <p class="page-subtitle">Profissionais qualificados para ajudar você</p>
            </div>
        </section>

        <section class="section">
            <div class="container">
                ${error ? `<div class="alert alert-error">${error}</div>` : ''}
                <div class="instructors-grid">
                    ${instrutores.length > 0 ? instrutores.map(i => window.InstructorCard(i)).join('') : '<p class="empty-state">Nenhum instrutor disponível</p>'}
                </div>
            </div>
        </section>
    </main>
    ${window.Footer()}
    `;
}

window.InstrutoresPage = InstrutoresPage;