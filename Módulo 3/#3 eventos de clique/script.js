function clicou() {
    alert("Você clicou no botão!");
}//Ao clicar no botão irá exibir uma mensagem no alert

let botao = document.querySelector(".botao");
botao.addEventListener("click", () =>{
    clicou();
});
