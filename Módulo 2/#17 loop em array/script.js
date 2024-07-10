
/*
let cores = ['preto', 'branco', 'azul', 'vermelho' ];

for(let n = 0; n < cores.length; n++){
    console.log(cores[n])
}

for (let i in cores){
    console.log(cores(i))
}

for(let cor of cores){
    console.log(cor)
}
    */

let cores = [
    {nome:  'preto', qt : 10},
    {nome: 'rosa', qt: 5}
]

for(let cor of cores)
console.log(`Nome: ${cor.nome} - quantidade: ${cor.qt}`)