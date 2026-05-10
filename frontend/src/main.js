(function() {
    loadScripts([
        'src/services/api.js',
        'src/services/viacep.js',
        'src/router/router.js',
        'src/components/Navbar.js',
        'src/components/Footer.js',
        'src/components/PlanCard.js',
        'src/components/InstructorCard.js',
        'src/components/ModalidadeCard.js',
        'src/components/HeroSection.js',
        'src/components/TestimonialCard.js',
        'src/pages/HomePage.js',
        'src/pages/PlanosPage.js',
        'src/pages/InstrutoresPage.js',
        'src/pages/ModalidadesPage.js',
        'src/pages/MatriculaPage.js'
    ], init);
})();

function loadScripts(scripts, callback) {
    const loaded = [];
    const total = scripts.length;

    scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            loaded.push(true);
            if (loaded.length === total && callback) {
                callback();
            }
        };
        script.onerror = () => {
            console.error('Erro ao carregar:', src);
            loaded.push(true);
            if (loaded.length === total && callback) {
                callback();
            }
        };
        document.head.appendChild(script);
    });
}

function init() {
    if (window.theme) {
        window.theme.init();
    }
    window.createRouter();
}
