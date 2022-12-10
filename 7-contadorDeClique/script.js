function adicionarClique() {
    let qtdeClick = Number(document.getElementById("resultado").innerHTML);
    document.getElementById("resultado").innerHTML = `${qtdeClick + 1}`;
}

function zerarClique() {
    document.getElementById("resultado").innerHTML = `${0}`;
}