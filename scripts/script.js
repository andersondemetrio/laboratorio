document.getElementById('medicamentoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const laboratorio = document.getElementById('laboratorio').value;
    const preco = document.getElementById('preco').value;
    const imagem = document.getElementById('imagem').value;

    adicionarMedicamento(nome, laboratorio, preco, imagem);
    this.reset();
});

function adicionarMedicamento(nome, laboratorio, preco, imagem) {
    const lista = document.getElementById('listaMedicamentos');
    const medicamentoItem = document.createElement('div');
    medicamentoItem.classList.add('medicamento-card');

    medicamentoItem.innerHTML = `
        <img src="${imagem}" alt="${nome}">
        <p><strong>Nome Produto:</strong> ${nome}</p>
        <p><strong>Laboratório:</strong> ${laboratorio}</p>
        <p><strong>Valor Produto:</strong> ${preco}</p>
    `;

    lista.appendChild(medicamentoItem);
}

function renderizarMedicamentos() {
    console.log('Renderizando medicamentos...');
}

renderizarMedicamentos();
//comentario

// Adicione este código ao seu arquivo script.js

document.addEventListener("DOMContentLoaded", function() {
    // Define o usuário 'admin' no localStorage, se ainda não estiver definido
    if (!localStorage.getItem('username')) {
        localStorage.setItem('username', 'admin');
    }

    // Recupera o nome do usuário do localStorage
    const username = localStorage.getItem('username');

    // Atualiza o conteúdo do elemento <span id="loggedInUser">
    if (username) {
        document.getElementById('loggedInUser').textContent = username;
    } else {
        document.getElementById('loggedInUser').textContent = 'Usuário não encontrado';
    }
});

