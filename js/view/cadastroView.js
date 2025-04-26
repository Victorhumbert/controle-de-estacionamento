const CadastroView = {
  
  obterDadosFormulario() {
    return {
      placa: document.getElementById("placa").value,
      proprietario: document.getElementById("proprietario").value,
      apartamento: document.getElementById("apartamento").value,
      bloco: document.getElementById("bloco").value,
      modelo: document.getElementById("modelo").value,
      cor: document.getElementById("cor").value,
      vaga: document.getElementById("vaga").value
    };
  },

  exibirMensagem(mensagem) {
    alert(mensagem);
  },

  limparFormulario() {
    document.getElementById("cadastroForm").reset();
  },

}