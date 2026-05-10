function MatriculaPage() {
    setupMatriculaForm();
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
                <form class="form matri-form" id="matriculaForm">
                    <div class="form-section">
                        <h3 class="form-section-title">Dados Pessoais</h3>
                        <div class="form-grid">
                            <div class="form-group full-width">
                                <label class="form-label" for="nome">Nome Completo *</label>
                                <input type="text" id="nome" name="nome" class="form-input" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="email">Email *</label>
                                <input type="email" id="email" name="email" class="form-input" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="telefone">Telefone</label>
                                <input type="tel" id="telefone" name="telefone" class="form-input">
                            </div>
                        </div>
                    </div>

                    <div class="form-section">
                        <h3 class="form-section-title">Endereço</h3>
                        <div class="form-grid">
                            <div class="form-group">
                                <label class="form-label" for="cep">CEP *</label>
                                <div class="input-with-loading">
                                    <input type="text" id="cep" name="cep" class="form-input" maxlength="9" required>
                                    <span class="loading-spinner" id="cepLoading" style="display: none;"></span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="rua">Rua</label>
                                <input type="text" id="rua" name="rua" class="form-input">
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

                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary btn-large">Enviar Solicitação</button>
                    </div>

                    <div class="form-message" id="formMessage"></div>
                </form>
            </div>
        </section>
    </main>
    ${window.Footer()}
    `;
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
            console.log('[ViaCEP] ENTER detectado - CEP:', e.target.value);
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

        console.log('[ViaCEP] Iniciando busca - CEP:', cep);
        loading.style.display = 'inline-block';

        try {
            const data = await window.viacep.buscarCep(cep);
            console.log('[ViaCEP] Resposta:', data);
            document.getElementById('rua').value = data.logradouro || '';
            document.getElementById('bairro').value = data.bairro || '';
            document.getElementById('cidade').value = data.localidade || '';
            document.getElementById('estado').value = data.uf || '';
            console.log('[ViaCEP] Campos preenchidos');
        } catch (error) {
            console.error('[ViaCEP] Erro:', error.message);
            showMessage(error.message, 'error');
        } finally {
            loading.style.display = 'none';
            cepSearched = false;
        }
    };

    form.addEventListener('submit', (e) => {
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

        window.api.post('/alunos', formData)
            .then(() => {
                showMessage('Matrícula solicitada com sucesso!', 'success');
                form.reset();
            })
            .catch((error) => {
                showMessage(error.message || 'Erro ao enviar matrícula', 'error');
            });
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

window.MatriculaPage = MatriculaPage;
window.setupMatriculaForm = setupMatriculaForm;
window.showMessage = showMessage;