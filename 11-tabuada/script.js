function tabuada() {
    event.preventDefault();
    let num = Number(document.getElementById("num").value);
    let div = document.getElementById("resultado");
    div.innerHTML = "";

    for(let i=1; i <= 10; i++) {
        let p = document.createElement("p");
        p.innerHTML = `${num} x ${i} = ${num * i}`;
        div.append(p);
    }
}