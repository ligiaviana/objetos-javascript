const cliente = {
    nome: 'Andre', 
    idade: 36,
    cpf: '12345678909',
    email:'andre@egmail.com',
    fones: ['55912345498', '5521988743124']
}

cliente.dependentes = {
    nome: 'Sara',
    parentesco: 'filha',
    dataNasc: '20/03/2011'
}

console.log(cliente)

cliente.dependentes.nome = 'Sara Silva'
console.log(cliente)