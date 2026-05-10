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
    setupMatriculaForm();
}

function setupMatriculaForm() {
    const form = document.getElementById('matriculaForm');
    if (!form) return;

    const cepInput = document.getElementById('cep');
    const loading = document.getElementById('cepLoading');

    let isSearchingCep = false;

    cepInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log('[ViaCEP] ENTER detectado - CEP digitado:', cepInput.value);
            cepInput.blur();
        }
    });

    cepInput.addEventListener('input', () => {
        const digits = cepInput.value.replace(/\D/g, '');
        if (digits.length === 8 && !isSearchingCep) {
            cepInput.blur();
        }
    });
    
    cepInput.addEventListener('blur', () => {
        const cep = cepInput.value.replace(/\D/g, '');
        if (cep.length === 8 && !isSearchingCep) {
            buscarCep();
        }
    });

    const buscarCep = async () => {
        const cep = cepInput.value.replace(/\D/g, '');
        if (cep.length !== 8) return;

        isSearchingCep = true;
        console.log('[ViaCEP] Iniciando busca - CEP:', cep);
        loading.style.display = 'inline-block';
        
        try {
            const data = await window.viacep.buscarCep(cep);
            console.log('[ViaCEP] Resposta da API:', data);
            console.log('[ViaCEP] Preenchendo campos...');
            document.getElementById('rua').value = data.logradouro || '';
            document.getElementById('bairro').value = data.bairro || '';
            document.getElementById('cidade').value = data.localidade || '';
            document.getElementById('estado').value = data.uf || '';
            console.log('[ViaCEP] Campos preenchidos com sucesso');
        } catch (error) {
            console.error('[ViaCEP] Erro:', error.message);
            showMessage(error.message, 'error');
        } finally {
            loading.style.display = 'none';
            isSearchingCep = false;
        }
    };

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