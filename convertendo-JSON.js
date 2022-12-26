const jsonLivro = JSON.stringify({
    id: 50,
    titulo: 'Primeiros passos com NodeJS',
    autor: 'Joao Rubens',
    categoria: 'programação',
    versoes: ['ebook', 'impresso']
})

console.log(jsonLivro)

const objLivro = JSON.parse(jsonLivro)
console.log(objLivro)