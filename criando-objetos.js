const novoObjeto = {
    nome: 'Peter Parker',
    idade: 36,
    cidade: 'Nova York',
    email: 'parker@email.com'
}

console.log(novoObjeto)
novoObjeto.cpf = 09876543211
console.log(novoObjeto)
novoObjeto.cpf = 12345678900
console.log(novoObjeto)

const chaves = ['nome', 'idade', 'cidade', 'email']
console.log(novoObjeto[chaves[2]])

chaves.forEach(info => console.log(novoObjeto[info]))