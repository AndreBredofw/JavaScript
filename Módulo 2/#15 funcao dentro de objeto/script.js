let pessoa ={
    nome : 'André',
    sobrenome : 'Bredofw',
    idade  : 90,
    nomeCompleto : function () {
        return this.nome + ' ' + this.sobrenome
    }
}

console.log(pessoa.nome + ' ' + pessoa.sobrenome);
console.log(pessoa.nomeCompleto());
