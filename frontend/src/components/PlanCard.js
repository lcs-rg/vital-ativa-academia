function PlanCard(plan) {
    const formattedPrice = typeof plan.valor === 'number' 
        ? plan.valor.toFixed(2).replace('.', ',') 
        : plan.valor;
    
    return `
    <div class="plan-card">
        <div class="plan-header">
            <h3 class="plan-name">${plan.nome}</h3>
            <div class="plan-price">
                <span class="price-currency">R$</span>
                <span class="price-value">${formattedPrice}</span>
                <span class="price-period">/mês</span>
            </div>
        </div>
        <div class="plan-features">
            <ul class="features-list">
                <li>${plan.duracao_meses || 1} ${plan.duracao_meses === 1 ? 'mês' : 'meses'} de acesso</li>
                ${plan.descricao ? `<li>${plan.descricao}</li>` : ''}
            </ul>
        </div>
        <a href="/matricula" data-link class="btn btn-primary btn-plan">Escolher Plano</a>
    </div>
    `;
}

window.PlanCard = PlanCard;