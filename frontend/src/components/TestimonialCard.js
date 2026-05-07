function TestimonialCard(testimonial) {
    return `
    <div class="testimonial-card">
        <div class="testimonial-content">
            <p class="testimonial-text">"${testimonial.depoimento || testimonial.texto || 'Excelente academia!'}"</p>
        </div>
        <div class="testimonial-author">
            <div class="author-avatar">
                <span>${getInitials(testimonial.nome_aluno || 'Aluno')}</span>
            </div>
            <div class="author-info">
                <p class="author-name">${testimonial.nome_aluno || 'Aluno'}</p>
                <p class="author-title">${testimonial.plano || 'Aluno'}</p>
            </div>
        </div>
    </div>
    `;
}

function getInitials(name) {
    if (!name) return '?';
    return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

window.TestimonialCard = TestimonialCard;