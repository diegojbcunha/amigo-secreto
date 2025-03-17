// armazena a lista de amigos
let amigos = [];

//captura o nome digitado, valida se não está vazio e o adiciona à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value;
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

//atualiza a lista com os nomes dos amigos
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

//realiza o sorteio de um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("adicione pelo menos um nome antes de sortear.");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${sorteado}</strong></li>`;
}