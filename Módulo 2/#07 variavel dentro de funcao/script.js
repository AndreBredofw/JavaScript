
let cc = 0;

function add() {
    let cc = 0;
    cc++;
}

add();
add();

console.log(cc); //o resultado será 0 pois está sendo puxado da variavel de escopo global, caso ti re a varivale de dentro da funcao, a funcao iria usar a variavel global para fazer a soma.