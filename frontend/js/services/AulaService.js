class AulaService {
    constructor() {
        this.api = window.apiClient;
    }

    async getAll() {
        return this.api.get('/aulas');
    }

    async getById(id) {
        return this.api.get(`/aulas/${id}`);
    }

    async getByModalidade(modalidadeId) {
        return this.api.get(`/aulas/modalidade/${modalidadeId}`);
    }

    async create(data) {
        return this.api.post('/aulas', data);
    }

    async update(id, data) {
        return this.api.put(`/aulas/${id}`, data);
    }

    async delete(id) {
        return this.api.delete(`/aulas/${id}`);
    }
}

window.aulaService = new AulaService();