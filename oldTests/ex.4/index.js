const produto = {
    nome: 'Caneta bic preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(obj) {
    return { ...obj}
}

const novoProduto = clone(produto) 
novoProduto.nome = 'Caneta bic azul'


console.log(produto)
console.log(novoProduto)
