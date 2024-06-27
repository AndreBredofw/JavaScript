function verificar(user, password){
    if (user === "andre" && password === 123) {
        login = true;
        return login;
    } else {
        login =  false;
        return login
    }
}

let user = "andre";
let password = 123;
let validar = verificar(user, password);

if (validar) {
    console.log("Acesso liberado!")
} else {
    console.log("Acesso negado!")
}
