function clicou() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul');
  //let newtag = document.createElement("button");
  //newtag.innerText = "Botão";
  //ul.after(newtag);
  let newul = document.createElement('ul');
  ul.before(newul);
  for (let i = 0; i <= 5; i++){
    let newli = document.createElement('li');
    newli.innerHTML = "Item add" + (i + 1) ;
    newul.append(newli);
  }
}