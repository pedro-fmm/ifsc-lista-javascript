function ola() {
    let nome = window.prompt("Digite seu nome: ");
    document.getElementById("helloWorld").innerHTML = `Olá, ${nome}! É um prazer te conhecer! &#128512;`;
    console.log(`Olá, ${nome}!`);
}