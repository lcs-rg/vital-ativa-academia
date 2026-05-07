const routes = {
    '/': { title: 'Vital Ativa', component: 'HomePage' },
    '/planos': { title: 'Planos - Vital Ativa', component: 'PlanosPage' },
    '/instrutores': { title: 'Instrutores - Vital Ativa', component: 'InstrutoresPage' },
    '/modalidades': { title: 'Modalidades - Vital Ativa', component: 'ModalidadesPage' },
    '/matricula': { title: 'Matrícula - Vital Ativa', component: 'MatriculaPage' }
};

class Router {
    constructor() {
        this.currentRoute = '/';
        this.params = {};
    }

    start() {
        this.init();
    }

    init() {
        window.addEventListener('popstate', () => this.handleRoute());
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-link]')) {
                e.preventDefault();
                this.navigate(e.target.getAttribute('href'));
            }
        });
        this.handleRoute();
    }

    handleRoute() {
        const path = window.location.pathname || '/';
        const route = routes[path] || routes['/'];
        this.currentRoute = path;
        document.title = route.title;
        this.render(route.component);
    }

    navigate(path) {
        window.history.pushState({}, '', path);
        this.handleRoute();
    }

    async render(componentName) {
        const app = document.getElementById('app');
        if (!app) return;

        const component = window[componentName];
        if (component) {
            const html = await component();
            app.innerHTML = html;
        }
    }

    getParam(key) {
        return this.params[key];
    }
}

window.createRouter = function() {
    const router = new Router();
    router.start();
    window.router = router;
};