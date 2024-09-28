document.addEventListener('DOMContentLoaded', function() {


//armazenar produtos cadastrados
let produtos = [];

//função para cadastrar o produto
    document.getElementById('formularioProduto').addEventListener('submit', function(e) {
        e.preventDefault();

    const nome = document.getElementById('nome').value;
    const valor = parseFloat(document.getElementById('valor').value);

    // adicionar produto ao array
    produtos.push({nome, valor});

    // limpar formulario
    this.reset();

    //atualizar tabela 
    atualizarTabela();

});


// função para exibir produtos  na tabela
function atualizarTabela() {
const corpoTabela = document.querySelector('#tabelaProdutos tbody');
corpoTabela.innerHTML = ''; // limpar tabela


// adicionar cada produto a tab
produtos.forEach(produto => {
    const linha = document.createElement('tr');
    linha.innerHTML =`

    <td>${produto.nome}</td>
    <td>R$ ${produto.valor.toFixed(2)}</td>
    `;
    corpoTabela.appendChild(linha);

});

}

// funcção mostrar formulario quando clicar em add prod
function mostrarFormulario() {
    document.getElementById('nome').focus(); // focar no nome 
}
});