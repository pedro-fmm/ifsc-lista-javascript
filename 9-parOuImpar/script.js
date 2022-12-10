function parOuImpar() {
    event.preventDefault();
    let num = Number(document.getElementById("num").value);
    let parImpar = num % 2 == 0 ? "par" : "ímpar";
    document.getElementById("resultado").innerHTML = `O número ${num} é ${parImpar}`;
}