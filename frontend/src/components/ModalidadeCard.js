function ModalidadeCard(modalidade) {
    return `
    <div class="modalidade-card">
        <div class="modalidade-icon">
            <span class="icon-placeholder">🏋️</span>
        </div>
        <h3 class="modalidade-name">${modalidade.nome || modalidade.nome_modalidade || 'Modalidade'}</h3>
        <p class="modalidade-desc">${modalidade.descricao || ''}</p>
    </div>
    `;
}

window.ModalidadeCard = ModalidadeCard;