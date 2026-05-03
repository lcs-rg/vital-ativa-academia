class TableComponent {
    static render(theadData, tbodyData) {
        const thead = document.getElementById('tableHead');
        const tbody = document.getElementById('tableBody');
        const emptyState = document.getElementById('emptyState');

        thead.innerHTML = '';
        tbody.innerHTML = '';

        if (!theadData || theadData.length === 0) {
            return;
        }

        const trHead = document.createElement('tr');
        theadData.forEach(col => {
            const th = document.createElement('th');
            th.textContent = col.label;
            trHead.appendChild(th);
        });
        const thAcao = document.createElement('th');
        thAcao.textContent = 'Ações';
        trHead.appendChild(thAcao);
        thead.appendChild(trHead);

        if (!tbodyData || tbodyData.length === 0) {
            document.getElementById('tableContainer').style.display = 'none';
            emptyState.style.display = 'block';
            return;
        }

        document.getElementById('tableContainer').style.display = 'table';
        emptyState.style.display = 'none';

        tbodyData.forEach(row => {
            const tr = document.createElement('tr');
            theadData.forEach(col => {
                const td = document.createElement('td');
                const value = row[col.key];
                td.textContent = value !== null && value !== undefined ? value : '-';
                tr.appendChild(td);
            });

            const tdAcao = document.createElement('td');
            const btnEditar = document.createElement('button');
            btnEditar.className = 'btn btn-secondary';
            btnEditar.textContent = 'Editar';
            btnEditar.dataset.id = row.id || row.id_aluno || row.id_plano || row.id_instrutor || row.id_aula || row.id_matricula;
            btnEditar.onclick = () => window.App.editar(btnEditar.dataset.id);

            const btnExcluir = document.createElement('button');
            btnExcluir.className = 'btn btn-danger';
            btnExcluir.textContent = 'Excluir';
            btnExcluir.dataset.id = row.id || row.id_aluno || row.id_plano || row.id_instrutor || row.id_aula || row.id_matricula;
            btnExcluir.onclick = () => window.App.excluir(btnExcluir.dataset.id);

            tdAcao.appendChild(btnEditar);
            tdAcao.appendChild(btnExcluir);
            tr.appendChild(tdAcao);
            tbody.appendChild(tr);
        });
    }
}

window.TableComponent = TableComponent;