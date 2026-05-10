const VIA_CEP_URL = 'https://viacep.com.br/ws';

class ViaCepService {
    async buscarCep(cep) {
        const cleanCep = cep.replace(/\D/g, '');
        
        if (cleanCep.length === 0) {
            throw new Error('CEP não informado');
        }
        
        if (cleanCep.length < 8) {
            throw new Error('CEP incompleto');
        }
        
        if (cleanCep.length !== 8) {
            throw new Error('CEP inválido');
        }

        try {
            const response = await fetch(`${VIA_CEP_URL}/${cleanCep}/json/`);
            const data = await response.json();

            if (data.erro) {
                throw new Error('CEP não encontrado');
            }

            return data;
        } catch (error) {
            console.error('ViaCEP Error:', error);
            throw error;
        }
    }
}

window.viacep = new ViaCepService();