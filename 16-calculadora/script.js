var equacao = "";

function addNum(num) {
    equacao = equacao + num;
    let display = window.document.getElementById('display');
    display.placeholder = equacao;
    console.log(equacao)
}

function addOperacao(operacao) {
    let lastChar = equacao.charAt(equacao.length-1)
    
    if (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/") {
        equacao = equacao.replace(/.$/,operacao);
    } else {
        equacao += operacao;
    }
    let display = window.document.getElementById('display');
    display.placeholder = equacao;
    console.log(equacao)
}

function calcular() {
    let display = window.document.getElementById('display');
    display.placeholder = eval(equacao);
    console.log(eval(equacao));
    equacao = "";
}

function limpar() {
    let display = window.document.getElementById('display');
    display.placeholder = 0;
    equacao = "";
}
