let fruits = ['Banana', 'Laranja', 'Maçã', 'Pêra'];
 let filtragem = fruits.filter((exemplo) =>{
    return exemplo.length < 5;
});

console.log(filtragem);
if(fruits.includes('Laranja')){
    console.log("Tem laranja sim!")
}else{
    console.log("Tem laranja não!")
};

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