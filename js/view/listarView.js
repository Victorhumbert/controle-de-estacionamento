const ListarView = {
  renderizarVagas(vagas) {
    const tbody = document.getElementById('vagasTableBody');
    tbody.innerHTML = ''; // Limpa o conteúdo atual da tabela

    vagas.forEach((vaga, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${vaga.placa}</td>
        <td>${vaga.proprietario}</td>
        <td>${vaga.apartamento}</td>
        <td>${vaga.bloco}</td>
        <td>${vaga.modelo}</td>
        <td>${vaga.cor}</td>
        <td>${vaga.vaga}</td>
        <td><button class="btn btn-danger" onclick="VagaController.removerVaga(${index})">Remover</button></td>
      `;

      tbody.appendChild(tr);
    });
  }
}