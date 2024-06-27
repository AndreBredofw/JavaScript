function precoImovel(metragem, quartos){
    m2 = 3000;
    switch (quartos) {
        case 1:
            m2 = m2
            break;
        case 2:
            m2 = (m2 * 1.2)
            break;
        case 3:
            m2 = (m2 * 1.5)
            break;
    }

    operacao = m2 * metragem;
    return operacao;

}

let metragem = 100;
let quartos = 2;
let preco = precoImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);
