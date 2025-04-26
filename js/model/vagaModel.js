const VagaModel = {
  vagas: JSON.parse(localStorage.getItem('vagas')) || [],

  salvarVaga(vaga) {
    this.vagas.push(vaga);
    localStorage.setItem('vagas', JSON.stringify(this.vagas));
  },

  listarVagas(){
    return this.vagas;
  },

  remover(index){
    this.vagas.splice(index, 1);
    localStorage.setItem('vagas', JSON.stringify(this.vagas));
  }
      
}