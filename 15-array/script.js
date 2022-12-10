function gerarLista() {
    let array = [];
    let div = document.getElementById("resultado");
    div.innerHTML = "";
        
    let h3 = document.createElement("h3");
    h3.innerHTML = "Lista fora de ordem";
    div.append(h3);

    for(let i=0; i < 10; i++) {
        let num = Math.floor(Math.random() * 100);
        array.push(num);
    }

    for(let i=0; i < 10; i++) {
        let p = document.createElement("p");
        p.innerHTML = `${array[i]}`;
        p.id = `num-${i}`;
        div.append(p);
    }
}

function ordenarLista() {
    let array = [];

    for(let i=0; i < 10; i++) {
        array.push(document.getElementById(`num-${i}`).innerText);
    }

    array.sort((a, b) => a - b);

    let div = document.getElementById("resultado");
    div.innerHTML = "";
        
    let h3 = document.createElement("h3");
    h3.innerHTML = "Lista ordenada";
    div.append(h3);

    for(let i=0; i < 10; i++) {
        let p = document.createElement("p");
        p.innerHTML = `${array[i]}`;
        p.id = `num-${i}`;
        div.append(p);
    }

}