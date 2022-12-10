function sortear() {
    event.preventDefault();
    let num = Math.floor(Math.random() * 100);
    let div = document.getElementById("resultado");
    let p = document.createElement("p");
    p.innerHTML = `Acabei de pensar no número ${num}`;
    div.append(p);
}

function limpar() {
    let div = document.getElementById("resultado");
    div.innerHTML = "";
}