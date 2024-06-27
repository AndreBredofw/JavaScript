function calcPct(num, pct){
    let calc = (num / 100) * pct;
    return calc;
}
 let num = 40;
 let pct = 25;
let verificar = calcPct(num, pct);

console.log(`${pct}% de ${num} é igual a ${verificar}`);

