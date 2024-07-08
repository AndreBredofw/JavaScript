
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
console.log(personagem.caracteristicas);
console.log(personagem.olhos[1]);

personagem.nome = 'João';
console.log(personagem.nome)

personagem.caracteristicas.forca += 5;
console.log(personagem.caracteristicas.forca);

personagem.olhos.push('verde');

console.log(personagem.olhos);

