//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = []

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
    if (nome.trim() === ""){
        alert("Favor inserir um nome.");
        return;
    }

    if (listaAmigos.includes(nome)){
        alert("Esse nome já está na lista");
        document.getElementById("amigo").value = "";
        return;
    }

    listaAmigos.push(nome);
    document.getElementById("amigo").value = "";
    console.log(listaAmigos);

    atualizarLista();

}

function atualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++){
        let item = document.createElement("li");
        item.textContent = listaAmigos[i];
        lista.appendChild(item);
    }
}

