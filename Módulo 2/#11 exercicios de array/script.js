//No array abaixo qual número que pega a ferrari
let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = carros[1];
console.log('1. ' + x);

//Troque a ferrari por Audi
console.log('2. Lista com Audi');
carros[1] = 'Audi';
console.log(carros);

//Adicione Volvo a lista
console.log('3. Lista com Volvo')
carros.push('Volvo');

//Exiba quantos itens tem no array
console.log(`4. Itens no array: ${carros.length}`)