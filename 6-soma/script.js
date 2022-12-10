function somar() {
    event.preventDefault();
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = `Resultado: ${num1 + num2}`;
}