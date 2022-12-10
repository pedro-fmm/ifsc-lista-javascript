function registrarAcao(num) {
    let div = document.getElementById("historico");
    let p = document.createElement("p");
    p.innerHTML = `Clicou no ${num}º botão`;
    div.append(p);
}