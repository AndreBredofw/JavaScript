
function clicou() {
  const teste = document.querySelector('#teste');
 // console.log(teste.children[1].children);
 const ul = teste.querySelector('ul');
 //console.log(ul.innerHTML);
 //ul.innerHTML = ul.innerHTML + "<li>Item alterado<li>";
 ul.children[0].innerHTML = "Modificação";

 //ul.outerHTML = "Alterado"
 //console.log(ul.outerHTML)
}