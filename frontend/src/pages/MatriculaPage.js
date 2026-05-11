function MatriculaPage() {
    observeForm();
    return `
    ${window.Navbar()}
    <main class="main">
        <section class="page-header-section">
            <div class="container">
                <h1 class="page-title">Matricule-se</h1>
                <p class="page-subtitle">Preencha o formulário para criar sua matrícula</p>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <form class="form matri-form" id="matriculaForm" novalidate>
                    <div class="form-section">
                        <h3 class="form-section-title">Dados Pessoais</h3>
                        <div class="form-grid">
                            <div class="form-group full-width">
                                <label class="form-label" for="nome">Nome Completo *</label>
                                <input type="text" id="nome" name="nome" class="form-input" required>
                                <span class="form-error" id="nomeError"></span>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="email">Email *</label>
                                <input type="email" id="email" name="email" class="form-input" required>
                                <span class="form-error" id="emailError"></span>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="telefone">Telefone *</label>
                                <input type="tel" id="telefone" name="telefone" class="form-input" placeholder="11999999999" required>
                                <span class="form-error" id="telefoneError"></span>
                            </div>
                        </div>
                    </div>

                    <div class="form-section">
                        <h3 class="form-section-title">Endereço</h3>
                        <div class="form-grid">
                            <div class="form-group">
                                <label class="form-label" for="cep">CEP</label>
                                <div class="input-with-loading">
                                    <input type="text" id="cep" name="cep" class="form-input" maxlength="9" placeholder="12345678">
                                    <span class="loading-spinner" id="cepLoading" style="display: none;"></span>
                                </div>
                                <span class="form-error" id="cepError"></span>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="logradouro">Rua</label>
                                <input type="text" id="logradouro" name="logradouro" class="form-input">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="bairro">Bairro</label>
                                <input type="text" id="bairro" name="bairro" class="form-input">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="cidade">Cidade</label>
                                <input type="text" id="cidade" name="cidade" class="form-input">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="estado">Estado</label>
                                <input type="text" id="estado" name="estado" class="form-input">
                            </div>
                        </div>
                    </div>

                    <div class="form-section">
                        <h3 class="form-section-title">Plano e Objetivo</h3>
                        <div class="form-grid">
                            <div class="form-group full-width">
                                <label class="form-label" for="plano_interesse">Plano de Interesse *</label>
                                <select id="plano_interesse" name="plano_interesse" class="form-input" required>
                                    <option value="">Selecione um plano</option>
                                    <option value="Mensal">Mensal</option>
                                    <option value="Trimestral">Trimestral</option>
                                    <option value="Semestral">Semestral</option>
                                    <option value="Anual">Anual</option>
                                </select>
                                <span class="form-error" id="planoError"></span>
                            </div>
                            <div class="form-group full-width">
                                <label class="form-label" for="objetivo">Objetivo</label>
                                <textarea id="objetivo" name="objetivo" class="form-input" rows="3" placeholder="Qual seu objetivo com a academia?"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary btn-large" id="submitBtn">
                            <span class="btn-text">Enviar Solicitação</span>
                            <span class="btn-loading" style="display: none;">Enviando...</span>
                        </button>
                    </div>

                    <div class="form-message" id="formMessage"></div>
                </form>
            </div>
        </section>
    </main>
    ${window.Footer()}
    `;
}

let formSetupObserver = null;

function observeForm() {
    const form = document.getElementById('matriculaForm');
    if (form && !form.dataset.setupped) {
        form.dataset.setupped = 'true';
        setupMatriculaForm();
    }
    
    setTimeout(observeForm, 100);
}

function setupMatriculaForm() {
    const form = document.getElementById('matriculaForm');
    if (!form) return;

    const cepInput = document.getElementById('cep');
    const loading = document.getElementById('cepLoading');
    if (!cepInput || !loading) return;

    let cepSearched = false;

    cepInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            cepInput.blur();
        }
    });

    cepInput.addEventListener('input', () => {
        const digits = cepInput.value.replace(/\D/g, '');
        if (digits.length === 8) {
            cepInput.blur();
        }
    });

    cepInput.addEventListener('blur', () => {
        if (cepSearched) return;
        const cep = cepInput.value.replace(/\D/g, '');
        if (cep.length === 8) {
            cepSearched = true;
            buscarCep();
        }
    });

    const buscarCep = async () => {
        const cep = cepInput.value.replace(/\D/g, '');
        if (cep.length !== 8) return;

        loading.style.display = 'inline-block';

        try {
            const data = await window.viacep.buscarCep(cep);
            document.getElementById('logradouro').value = data.logradouro || '';
            document.getElementById('bairro').value = data.bairro || '';
            document.getElementById('cidade').value = data.localidade || '';
            document.getElementById('estado').value = data.uf || '';
        } catch (error) {
            showMessage(error.message, 'error');
        } finally {
            loading.style.display = 'none';
            cepSearched = false;
        }
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = document.getElementById('submitBtn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        clearErrors();

        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            cep: document.getElementById('cep').value,
            logradouro: document.getElementById('logradouro').value,
            bairro: document.getElementById('bairro').value,
            cidade: document.getElementById('cidade').value,
            estado: document.getElementById('estado').value,
            plano_interesse: document.getElementById('plano_interesse').value,
            objetivo: document.getElementById('objetivo').value
        };

        const validationErrors = window.matriculaService.validate(formData);
        if (validationErrors.length > 0) {
            showValidationErrors(validationErrors);
            return;
        }

        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';

        try {
            await window.matriculaService.create(formData);
            showMessage('Solicitação enviada com sucesso! Em breve entraremos em contato.', 'success');
            form.reset();
        } catch (error) {
            showMessage(error.message || 'Erro ao enviar solicitação. Tente novamente.', 'error');
        } finally {
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
        }
    });
}

function showValidationErrors(errors) {
    errors.forEach(error => {
        if (error.includes('Nome')) {
            showFieldError('nomeError', error);
        } else if (error.includes('Email')) {
            showFieldError('emailError', error);
        } else if (error.includes('Telefone')) {
            showFieldError('telefoneError', error);
        } else if (error.includes('CEP')) {
            showFieldError('cepError', error);
        } else if (error.includes('Plano')) {
            showFieldError('planoError', error);
        }
    });
}

function showFieldError(elementId, message) {
    const el = document.getElementById(elementId);
    if (el) {
        el.textContent = message;
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.form-error');
    errorElements.forEach(el => el.textContent = '');
}

function showMessage(message, type) {
    const msgEl = document.getElementById('formMessage');
    if (!msgEl) return;
    msgEl.textContent = message;
    msgEl.className = `form-message ${type}`;
    setTimeout(() => {
        msgEl.className = 'form-message';
    }, 5000);
}

window.MatriculaPage = MatriculaPage;
window.setupMatriculaForm = setupMatriculaForm;
window.showMessage = showMessage;

window.afterRender = function() {
    if (window.location.pathname === '/matricula') {
        setupMatriculaForm();
    }
};