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
    setupMatriculaForm();
}

function setupMatriculaForm() {
    const form = document.getElementById('matriculaForm');
    if (!form) return;

    const cepInput = document.getElementById('cep');
    const loading = document.getElementById('cepLoading');

    cepInput.addEventListener('blur', async () => {
        const cep = cepInput.value;
        if (cep.length < 8) return;

        loading.style.display = 'inline-block';
        
        try {
            const data = await window.viacep.buscarCep(cep);
            document.getElementById('rua').value = data.logradouro || '';
            document.getElementById('bairro').value = data.bairro || '';
            document.getElementById('cidade').value = data.localidade || '';
            document.getElementById('estado').value = data.uf || '';
        } catch (error) {
            showMessage('CEP não encontrado', 'error');
        } finally {
            loading.style.display = 'none';
        }
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            cep: document.getElementById('cep').value,
            rua: document.getElementById('rua').value,
            bairro: document.getElementById('bairro').value,
            cidade: document.getElementById('cidade').value,
            estado: document.getElementById('estado').value
        };

        try {
            await window.api.post('/alunos', formData);
            showMessage('Matrícula solicitada com sucesso!', 'success');
            form.reset();
        } catch (error) {
            showMessage(error.message || 'Erro ao enviar matrícula', 'error');
        }
    });
}

function showMessage(message, type) {
    const msgEl = document.getElementById('formMessage');
    if (!msgEl) return;
    
    msgEl.textContent = message;
    msgEl.className = `form-message ${type}`;
    
    setTimeout(() => {
        msgEl.className = 'form-message';
    }, 3000);
}