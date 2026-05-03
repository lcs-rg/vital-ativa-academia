class MatriculaService {
    constructor() {
        this.api = window.apiClient;
    }

    async getAll() {
        return this.api.get('/matriculas');
    }

    async getById(id) {
        return this.api.get(`/matriculas/${id}`);
    }

    async getByAluno(alunoId) {
        return this.api.get(`/matriculas/aluno/${alunoId}`);
    }

    async create(data) {
        return this.api.post('/matriculas', data);
    }

    async update(id, data) {
        return this.api.put(`/matriculas/${id}`, data);
    }

    async delete(id) {
        return this.api.delete(`/matriculas/${id}`);
    }
}

window.matriculaService = new MatriculaService();