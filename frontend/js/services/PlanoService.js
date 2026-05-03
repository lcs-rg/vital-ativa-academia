class PlanoService {
    constructor() {
        this.api = window.apiClient;
    }

    async getAll() {
        return this.api.get('/planos');
    }

    async getById(id) {
        return this.api.get(`/planos/${id}`);
    }

    async create(data) {
        return this.api.post('/planos', data);
    }

    async update(id, data) {
        return this.api.put(`/planos/${id}`, data);
    }

    async delete(id) {
        return this.api.delete(`/planos/${id}`);
    }
}

window.planoService = new PlanoService();