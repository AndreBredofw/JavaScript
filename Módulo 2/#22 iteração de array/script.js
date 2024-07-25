let fruits = ['Banana', 'Laranja', 'Maçã', 'Pêra'];

let bigFruits = fruits.filter((item) => {
    return item.length > 4;
});

console.log(bigFruits);