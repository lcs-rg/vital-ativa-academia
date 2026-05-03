class AlunoService {
    constructor() {
        this.api = window.apiClient;
    }

    async getAll() {
        return this.api.get('/alunos');
    }

    async getById(id) {
        return this.api.get(`/alunos/${id}`);
    }

    async create(data) {
        return this.api.post('/alunos', data);
    }

    async update(id, data) {
        return this.api.put(`/alunos/${id}`, data);
    }

    async delete(id) {
        return this.api.delete(`/alunos/${id}`);
    }
}

window.alunoService = new AlunoService();