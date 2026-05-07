function MatriculaPage() {
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
                                    <input type="text" id="cep" name="cep" class="form-input" maxlength="8" required>
                                    <span class="loading-spinner" id="cepLoading" style="display: none;"></span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="rua">Rua</label>
                                <input type="text" id="rua" name="rua" class="form-input" readonly>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="bairro">Bairro</label>
                                <input type="text" id="bairro" name="bairro" class="form-input" readonly>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="cidade">Cidade</label>
                                <input type="text" id="cidade" name="cidade" class="form-input" readonly>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="estado">Estado</label>
                                <input type="text" id="estado" name="estado" class="form-input" readonly>
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

window.MatriculaPage = MatriculaPage;