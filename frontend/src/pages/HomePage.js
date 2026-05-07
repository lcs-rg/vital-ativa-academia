async function HomePage() {
    let planos = [];
    let instrutores = [];
    let modalidades = [];

    try {
        [planos, instrutores, modalidades] = await Promise.all([
            window.api.get('/planos'),
            window.api.get('/instrutores'),
            window.api.get('/modalidades')
        ]);
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
    }

    const previewPlanos = planos.slice(0, 3);
    const previewInstrutores = instrutores.slice(0, 3);
    const previewModalidades = modalidades.slice(0, 6);

    return `
    ${window.Navbar()}
    ${window.HeroSection()}
    <main class="main">
        <section class="section section-plans">
            <div class="container">
                <h2 class="section-title">Nossos Planos</h2>
                <div class="plans-grid">
                    ${previewPlanos.map(p => window.PlanCard(p)).join('')}
                </div>
                <div class="section-cta">
                    <a href="/planos" data-link class="btn btn-outline">Ver Todos os Planos</a>
                </div>
            </div>
        </section>

        <section class="section section-modalidades">
            <div class="container">
                <h2 class="section-title">Modalidades</h2>
                <div class="modalidades-grid">
                    ${previewModalidades.map(m => window.ModalidadeCard(m)).join('')}
                </div>
                <div class="section-cta">
                    <a href="/modalidades" data-link class="btn btn-outline">Ver Todas</a>
                </div>
            </div>
        </section>

        <section class="section section-instructors">
            <div class="container">
                <h2 class="section-title">Nossa Equipe</h2>
                <div class="instructors-grid">
                    ${previewInstrutores.map(i => window.InstructorCard(i)).join('')}
                </div>
                <div class="section-cta">
                    <a href="/instrutores" data-link class="btn btn-outline">Conhecer Equipe</a>
                </div>
            </div>
        </section>

        <section class="section section-cta">
            <div class="container">
                <div class="cta-box">
                    <h2 class="cta-title">Pronto para começar?</h2>
                    <p class="cta-text">Matricule-se agora e ganhe o primeiro mês com desconto!</p>
                    <a href="/matricula" data-link class="btn btn-primary btn-large">Quero Me Matricular</a>
                </div>
            </div>
        </section>
    </main>
    ${window.Footer()}
    `;
}

window.HomePage = HomePage;