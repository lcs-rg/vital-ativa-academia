class InstrutorService {
    constructor() {
        this.api = window.apiClient;
    }

    async getAll() {
        return this.api.get('/instrutores');
    }

    async getById(id) {
        return this.api.get(`/instrutores/${id}`);
    }

    async create(data) {
        return this.api.post('/instrutores', data);
    }

    async update(id, data) {
        return this.api.put(`/instrutores/${id}`, data);
    }

    async delete(id) {
        return this.api.delete(`/instrutores/${id}`);
    }
}

window.instrutorService = new InstrutorService();