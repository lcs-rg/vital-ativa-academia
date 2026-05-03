const PAGES = {
    alunos: {
        title: 'Alunos',
        service: window.alunoService,
        fields: [
            { name: 'nome', label: 'Nome', type: 'text', required: true },
            { name: 'cpf', label: 'CPF', type: 'text', required: true },
            { name: 'email', label: 'Email', type: 'email', required: true },
            { name: 'telefone', label: 'Telefone', type: 'text' },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date' },
            { name: 'altura', label: 'Altura (m)', type: 'number', step: '0.01' },
            { name: 'peso', label: 'Peso (kg)', type: 'number', step: '0.01' },
            { name: 'objetivo', label: 'Objetivo', type: 'text' }
        ],
        columns: [
            { key: 'id_aluno', label: 'ID' },
            { key: 'nome', label: 'Nome' },
            { key: 'cpf', label: 'CPF' },
            { key: 'email', label: 'Email' },
            { key: 'telefone', label: 'Telefone' }
        ]
    },
    planos: {
        title: 'Planos',
        service: window.planoService,
        fields: [
            { name: 'nome', label: 'Nome', type: 'text', required: true },
            { name: 'valor', label: 'Valor (R$)', type: 'number', step: '0.01', required: true },
            { name: 'duracao_meses', label: 'Duração (meses)', type: 'number', required: true },
            { name: 'descricao', label: 'Descrição', type: 'text' }
        ],
        columns: [
            { key: 'id_plano', label: 'ID' },
            { key: 'nome', label: 'Nome' },
            { key: 'valor', label: 'Valor' },
            { key: 'duracao_meses', label: 'Duração' },
            { key: 'descricao', label: 'Descrição' }
        ]
    },
    instrutores: {
        title: 'Instrutores',
        service: window.instrutorService,
        fields: [
            { name: 'nome', label: 'Nome', type: 'text', required: true },
            { name: 'telefone', label: 'Telefone', type: 'text' },
            { name: 'email', label: 'Email', type: 'email', required: true }
        ],
        columns: [
            { key: 'id_instrutor', label: 'ID' },
            { key: 'nome', label: 'Nome' },
            { key: 'telefone', label: 'Telefone' },
            { key: 'email', label: 'Email' }
        ]
    },
    aulas: {
        title: 'Aulas',
        service: window.aulaService,
        fields: [
            { name: 'dia_semana', label: 'Dia da Semana', type: 'text', required: true },
            { name: 'hora_inicio', label: 'Hora Início', type: 'time', required: true },
            { name: 'hora_fim', label: 'Hora Fim', type: 'time' },
            { name: 'capacidade_maxima', label: 'Capacidade Máxima', type: 'number' },
            { name: 'modalidade_id_modalidade', label: 'Modalidade', type: 'select', options: [{value:'', label:'Selecione...'}] },
            { name: 'instrutor_id_Instrutor', label: 'Instrutor', type: 'select', options: [{value:'', label:'Selecione...'}] }
        ],
        columns: [
            { key: 'id_aula', label: 'ID' },
            { key: 'dia_semana', label: 'Dia' },
            { key: 'hora_inicio', label: 'Início' },
            { key: 'hora_fim', label: 'Fim' },
            { key: 'capacidade_maxima', label: 'Capacidade' }
        ]
    },
    matriculas: {
        title: 'Matrículas',
        service: window.matriculaService,
        fields: [
            { name: 'data_inicio', label: 'Data Início', type: 'date', required: true },
            { name: 'data_fim', label: 'Data Fim', type: 'date' },
            { name: 'status', label: 'Status', type: 'text' },
            { name: 'aluno_id_aluno', label: 'Aluno', type: 'select', options: [{value:'', label:'Selecione...'}] },
            { name: 'plano_id_plano', label: 'Plano', type: 'select', options: [{value:'', label:'Selecione...'}] }
        ],
        columns: [
            { key: 'id_matricula', label: 'ID' },
            { key: 'data_inicio', label: 'Data Início' },
            { key: 'data_fim', label: 'Data Fim' },
            { key: 'status', label: 'Status' }
        ]
    }
};

class App {
    constructor() {
        this.currentPage = 'alunos';
        this.currentId = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadPage(this.currentPage);
    }

    setupEventListeners() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.dataset.page;
                this.navigateTo(page);
            });
        });

        document.getElementById('btnNovo').addEventListener('click', () => this.novo());
        document.getElementById('modalClose').addEventListener('click', () => this.fecharModal());
        document.getElementById('btnCancelar').addEventListener('click', () => this.fecharModal());

        document.getElementById('modal').addEventListener('click', (e) => {
            if (e.target.id === 'modal') {
                this.fecharModal();
            }
        });
    }

    navigateTo(page) {
        if (!PAGES[page]) return;

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === page) {
                link.classList.add('active');
            }
        });

        this.currentPage = page;
        this.loadPage(page);
    }

    async loadPage(page) {
        const config = PAGES[page];
        if (!config) return;

        document.getElementById('pageTitle').textContent = config.title;
        
        try {
            const data = await config.service.getAll();
            window.TableComponent.render(config.columns, data);
        } catch (error) {
            this.showToast(error.message, 'error');
        }
    }

    novo() {
        const config = PAGES[this.currentPage];
        if (!config) return;

        this.currentId = null;
        window.ModalComponent.show(`Novo ${config.title}`, config.fields, {}, async (data) => {
            await this.salvar(data);
        });
    }

    async editar(id) {
        const config = PAGES[this.currentPage];
        if (!config) return;

        this.currentId = id;

        try {
            const data = await config.service.getById(id);
            window.ModalComponent.show(`Editar ${config.title}`, config.fields, data, async (formData) => {
                await this.salvar(formData);
            });
        } catch (error) {
            this.showToast(error.message, 'error');
        }
    }

    async salvar(data) {
        const config = PAGES[this.currentPage];
        if (!config) return;

        try {
            if (this.currentId) {
                await config.service.update(this.currentId, data);
                this.showToast('Atualizado com sucesso!', 'success');
            } else {
                await config.service.create(data);
                this.showToast('Criado com sucesso!', 'success');
            }
            this.fecharModal();
            this.loadPage(this.currentPage);
        } catch (error) {
            this.showToast(error.message, 'error');
        }
    }

    async excluir(id) {
        const config = PAGES[this.currentPage];
        if (!config) return;

        if (!confirm('Tem certeza que deseja excluir?')) return;

        try {
            await config.service.delete(id);
            this.showToast('Excluído com sucesso!', 'success');
            this.loadPage(this.currentPage);
        } catch (error) {
            this.showToast(error.message, 'error');
        }
    }

    fecharModal() {
        window.ModalComponent.hide();
    }

    showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        
        toastMessage.textContent = message;
        toast.className = `toast show ${type}`;

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

window.App = new App();