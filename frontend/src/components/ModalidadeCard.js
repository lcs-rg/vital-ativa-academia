function getModalidadeIcon(nome) {
    const nomeLower = (nome || '').toLowerCase();
    if (nomeLower.includes('musculação') || nomeLower.includes('musculacao') || nomeLower.includes('weight')) return 'ph-barbell';
    if (nomeLower.includes('yoga') || nomeLower.includes('ioga')) return 'ph-sunglasses';
    if (nomeLower.includes('pilates')) return 'ph-flower';
    if (nomeLower.includes('spinning') || nomeLower.includes('ciclo')) return 'ph-bicycle';
    if (nomeLower.includes('cross') || nomeLower.includes('training')) return 'ph-lightning';
    if (nomeLower.includes('crossfit')) return 'ph-barbell';
    if (nomeLower.includes('boxe') || nomeLower.includes('boxing')) return 'ph-glove';
    if (nomeLower.includes('natação') || nomeLower.includes('natacao') || nomeLower.includes('swim')) return 'ph-swimming';
    if (nomeLower.includes('dança') || nomeLower.includes('danca') || nomeLower.includes('dance')) return 'ph-music-notes';
    if (nomeLower.includes('hiit') || nomeLower.includes('treino')) return 'ph-timer';
    if (nomeLower.includes('funcional')) return 'ph-person-simple-walk';
    return 'ph-sport-court';
}

function ModalidadeCard(modalidade) {
    const nome = modalidade.nome || modalidade.nome_modalidade || 'Modalidade';
    return `
    <div class="modalidade-card">
        <div class="modalidade-icon">
            <i class="ph ${getModalidadeIcon(nome)}"></i>
        </div>
        <h3 class="modalidade-name">${nome}</h3>
        <p class="modalidade-desc">${modalidade.descricao || ''}</p>
    </div>
    `;
}

window.ModalidadeCard = ModalidadeCard;