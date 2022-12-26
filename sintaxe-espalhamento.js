const clientes = [
    {
        nome: 'Andre',
        idade: 36,
        cpf: '12345678909',
        email: 'andre@egmail.com',
        fones: ['55912345498', '5521988743124'],
        dependentes: [{
            nome: 'Sara Silva',
            parentesco: 'filha',
            dataNasc: '20/03/2011'
        },
        {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNasc: '04/01/2014'
        }],
    },

    {
        nome: 'Juliana',
        cpf: '23456789000',
        dependentes: [{
            nome: 'Sophia',
            parentesco: 'filha',
            dataNasc: '30/08/2020'
        }],
    }
]
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
console.table(listaDependentes)
console.log(listaDependentes)