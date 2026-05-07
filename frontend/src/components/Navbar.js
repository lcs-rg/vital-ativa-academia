function Navbar() {
    const isDark = document.body.getAttribute('data-theme') !== 'light';
    const iconLight = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
    const iconDark = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    const icon = isDark ? iconLight : iconDark;

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
                    <li>
                        <button class="theme-toggle" onclick="window.theme.toggle()" aria-label="Alternar tema">
                            ${icon}
                        </button>
                    </li>
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