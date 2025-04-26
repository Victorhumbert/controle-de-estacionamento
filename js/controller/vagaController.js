const VagaController = {
  initCadastro(){
    const form = document.getElementById('cadastroForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      const novaVaga = CadastroView.obterDadosFormulario();
      VagaModel.salvarVaga(novaVaga);
      console.log(novaVaga);
      CadastroView.exibirMensagem("Vaga cadastrada com sucesso!");
      CadastroView.limparFormulario();
    });
  },

  initListar() {
    const vagas = VagaModel.listarVagas();
    ListarView.renderizarVagas(vagas);
  },

  removerVaga(index) {
    VagaModel.remover(index);
    this.initListar(); // Atualiza a lista após remover
  }
};

// Inicializar automaticamente nas páginas
if (document.getElementById('cadastroForm')) {
  VagaController.initCadastro();
}
if (document.getElementById('vagasTableBody')) {
  VagaController.initListar();
}