personagem = {
    nome : 'André',
    idade : 18,
    pais : 'Brasil', 
    
    olhos:['preto', 'azul'],

    caracteristicas :{
        forca: 20,
        magia: 5,
        stamina: 15
    }
    
}

console.log(`${personagem.nome} tem ${personagem.idade} anos e reside no ${personagem.pais}`);
console.log(personagem.caracteristicas.magia);
console.log(personagem.olhos[1]);