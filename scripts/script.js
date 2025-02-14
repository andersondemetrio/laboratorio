document.getElementById('medicamentoForm').addEventListener('submit', function(event) {
    console.log('Passei aqui funciton 1')
    event.preventDefault();
    
    const nome = document.getElementById('name').value;
    const laboratorio = document.getElementById('lab').value;
    const preco = document.getElementById('price').value;
    const imagem = document.getElementById('medicine-img').value;

    // Adiciona o medicamento ao localStorage
    adicionarMedicamento(nome, laboratorio, preco, imagem);
    this.reset();
});

function adicionarMedicamento(nome, laboratorio, preco, imagem) {
    const medicamentos = JSON.parse(localStorage.getItem('medicamentos')) || [];

    // Cria um objeto com os dados do medicamento
    const novoMedicamento = { nome, laboratorio, preco, imagem };

    // Adiciona o novo medicamento à lista existente
    medicamentos.push(novoMedicamento);

    // Atualiza o localStorage
    localStorage.setItem('medicamentos', JSON.stringify(medicamentos));

    // Renderiza a lista de medicamentos
    renderizarMedicamentos();
}
function renderizarMedicamentos() {
    const lista = document.getElementById('listaMedicamentos');
    lista.innerHTML = ''; // Limpa a lista antes de renderizar

    const medicamentos = JSON.parse(localStorage.getItem('medicamentos')) || [];

    // Renderiza cada medicamento na tela
    medicamentos.forEach((medicamento, index) => {
        const medicamentoItem = document.createElement('div');
        medicamentoItem.classList.add('medicamento-card', 'card', 'mb-3', 'p-3', 'shadow-sm');

        medicamentoItem.innerHTML = `
            <img src="${medicamento.imagem}" alt="${medicamento.nome}" class="card-img-top mb-2">
            <div class="card-body">
                <h5 class="card-title">${medicamento.nome}</h5>
                <p class="card-text"><strong>Laboratório:</strong> ${medicamento.laboratorio}</p>
                <p class="card-text"><strong>Valor:</strong> R$ ${medicamento.preco}</p>
                <button class="btn btn-danger" onclick="deletarMedicamento(${index})">Deletar</button>
            </div>
        `;

        lista.appendChild(medicamentoItem);
    });
}

function deletarMedicamento(index) {
    const medicamentos = JSON.parse(localStorage.getItem('medicamentos')) || [];
    medicamentos.splice(index, 1); // Remove o medicamento do array

    // Atualiza o localStorage com a nova lista
    localStorage.setItem('medicamentos', JSON.stringify(medicamentos));

    // Re-renderiza os medicamentos após a remoção
    renderizarMedicamentos();
}

// Chama a função para renderizar os medicamentos quando a página carregar
renderizarMedicamentos();

// Adiciona o evento DOMContentLoaded para carregar o usuário do localStorage
document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem('username')) {
        localStorage.setItem('username', 'admin');
    }

    const username = localStorage.getItem('username');
    document.getElementById('loggedInUser').textContent = username ? username : 'Usuário não encontrado';
});

document.getElementById('price').addEventListener('input', function() {
    var value = this.value.trim();
    var priceLabel = document.getElementById('priceLabel');
    
    if (value) {
        priceLabel.textContent = `Preço: R$ ${value}`;
    } else {
        priceLabel.textContent = 'Preço';
    }
});
