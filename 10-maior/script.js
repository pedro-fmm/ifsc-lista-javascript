function maior() {
    event.preventDefault();
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    if (num1 == num2){
        document.getElementById("resultado").innerHTML = `Os número são iguais.`;
    } else {
        let maior = num1 > num2 ? num1 : num2;
        document.getElementById("resultado").innerHTML = `Analisando os número ${num1} e ${num2} ... o maior valor é ${maior}`;
    }
}