function Navbar() {
    return `
    <header class="header">
        <div class="container">
            <a href="/" data-link class="logo">Vital Ativa</a>
            <nav class="nav">
                <ul class="nav-list">
                    <li><a href="/" data-link class="nav-link ${getActive('/')}">Início</a></li>
                    <li><a href="/planos" data-link class="nav-link ${getActive('/planos')}">Planos</a></li>
                    <li><a href="/modalidades" data-link class="nav-link ${getActive('/modalidades')}">Modalidades</a></li>
                    <li><a href="/instrutores" data-link class="nav-link ${getActive('/instrutores')}">Equipe</a></li>
                    <li><a href="/matricula" data-link class="nav-link btn-matricula">Matricule-se</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `;
}

function getActive(path) {
    return window.router && window.router.currentRoute === path ? 'active' : '';
}

window.Navbar = Navbar;