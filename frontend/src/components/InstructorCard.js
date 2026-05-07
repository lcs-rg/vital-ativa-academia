function InstructorCard(instrutor) {
    return `
    <div class="instructor-card">
        <div class="instructor-avatar">
            <span class="avatar-letter">${getInitials(instrutor.nome)}</span>
        </div>
        <h3 class="instructor-name">${instrutor.nome}</h3>
        <p class="instructor-contact">${instrutor.email || ''}</p>
        <p class="instructor-contact">${instrutor.telefone || ''}</p>
    </div>
    `;
}

function getInitials(name) {
    if (!name) return '?';
    return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

window.InstructorCard = InstructorCard;