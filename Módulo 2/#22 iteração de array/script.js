let fruits = ['Banana', 'Laranja', 'Maçã', 'Pêra'];

let bigFruits = fruits.filter((item) => {
    return item.length > 4;
});
console.log(bigFruits);

let ok = fruits.every((qualquer) => {
    return qualquer.length > 3;

});

if (ok) {
    console.log("Todos são maiores do que 3");
} else{
    console.log("Não são todos maiores do que 3");
};