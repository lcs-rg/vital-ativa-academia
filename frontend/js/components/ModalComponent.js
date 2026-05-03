class ModalComponent {
    static show(title, fields, data = {}, onSave) {
        const modal = document.getElementById('modal');
        const modalTitle = document.getElementById('modalTitle');
        const formFields = document.getElementById('formFields');
        const form = document.getElementById('dataForm');

        modalTitle.textContent = title;
        formFields.innerHTML = '';

        fields.forEach(field => {
            const div = document.createElement('div');
            div.className = 'form-group';

            const label = document.createElement('label');
            label.textContent = field.label;
            label.htmlFor = field.name;

            let input;
            if (field.type === 'select') {
                input = document.createElement('select');
                input.id = field.name;
                input.name = field.name;
                
                if (field.options) {
                    field.options.forEach(opt => {
                        const option = document.createElement('option');
                        option.value = opt.value;
                        option.textContent = opt.label;
                        if (data[field.name] == opt.value) {
                            option.selected = true;
                        }
                        input.appendChild(option);
                    });
                }
            } else {
                input = document.createElement('input');
                input.type = field.type || 'text';
                input.id = field.name;
                input.name = field.name;
                input.value = data[field.name] || '';
                if (field.required) {
                    input.required = true;
                }
            }

            div.appendChild(label);
            div.appendChild(input);
            formFields.appendChild(div);
        });

        form.onsubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const obj = {};
            formData.forEach((value, key) => {
                obj[key] = value;
            });
            
            if (onSave) {
                await onSave(obj);
            }
        };

        modal.classList.add('active');
    }

    static hide() {
        const modal = document.getElementById('modal');
        modal.classList.remove('active');
    }
}

window.ModalComponent = ModalComponent;