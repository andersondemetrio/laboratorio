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