class MatriculaService {
    constructor() {
        this.endpoint = '/solicitacoes-matricula';
        this.timeout = 10000;
    }

    validate(data) {
        const errors = [];

        if (!data.nome || !data.nome.trim()) {
            errors.push('Nome é obrigatório');
        }

        if (!data.email || !data.email.trim()) {
            errors.push('Email é obrigatório');
        } else if (!this.isValidEmail(data.email)) {
            errors.push('Email inválido');
        }

        if (!data.telefone || !data.telefone.trim()) {
            errors.push('Telefone é obrigatório');
        } else if (!this.isValidPhone(data.telefone)) {
            errors.push('Telefone inválido');
        }

        if (data.cep && !this.isValidCep(data.cep)) {
            errors.push('CEP inválido');
        }

        if (!data.plano_interesse || !data.plano_interesse.trim()) {
            errors.push('Plano é obrigatório');
        }

        return errors;
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    isValidPhone(phone) {
        const digits = phone.replace(/\D/g, '');
        return digits.length >= 10 && digits.length <= 11;
    }

    isValidCep(cep) {
        const digits = cep.replace(/\D/g, '');
        return digits.length === 0 || digits.length === 8;
    }

    sanitize(data) {
        return {
            nome: data.nome?.trim() || null,
            email: data.email?.trim().toLowerCase() || null,
            telefone: data.telefone?.trim() || null,
            cep: data.cep?.trim() || null,
            logradouro: data.logradouro?.trim() || null,
            bairro: data.bairro?.trim() || null,
            cidade: data.cidade?.trim() || null,
            estado: data.estado?.trim() || null,
            plano_interesse: data.plano_interesse?.trim() || null,
            objetivo: data.objetivo?.trim() || null
        };
    }

    async create(data) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);

        try {
            const sanitized = this.sanitize(data);
            const validationErrors = this.validate(sanitized);
            
            if (validationErrors.length > 0) {
                throw new Error(validationErrors.join('. '));
            }

            const response = await fetch(`${window.api.baseUrl}${this.endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sanitized),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || `Erro ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            clearTimeout(timeoutId);
            
            if (error.name === 'AbortError') {
                throw new Error('Tempo limite excedido. Tente novamente.');
            }
            
            console.error('[MatriculaService] Erro:', error);
            throw error;
        }
    }
}

window.matriculaService = new MatriculaService();