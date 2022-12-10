function imc() {
    event.preventDefault();

    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    let image = document.getElementById("image");
    let resultado = document.getElementById("texto");
    altura = altura/100;

    let imc = peso / (altura * altura);

    if(imc > 40) {
        image.src = "./img/obesidade3.png";
        resultado.innerHTML = "Obesidade III";
    } else if(imc > 35) {
        image.src = "./img/obesidade2.png";
        resultado.innerHTML = "Obesidade II";
    } else if(imc > 30) {
        image.src = "./img/obesidade1.png";
        resultado.innerHTML = "Obesidade I";
    } else if(imc > 25) {
        image.src = "./img/sobrepeso.png";
        resultado.innerHTML = "Sobrepeso";
    } else if(imc > 18.6) {
        image.src = "./img/normal.png";
        resultado.innerHTML = "Saudável";
    } else {
        image.src = "./img/abaixopeso.png";
        resultado.innerHTML = "Abaixo do peso";
    }
}
