
const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}

const listaDeAulas = [
    {
        identificador: 1,
        Nome_da_aula: "Introdução a programação"
    },
    {
        Identificador: 2,
        Nome_da_aula: "Variáveis"
    },
    {
        Identificador: 3,
        Nome_da_aula: "Condicionais"
    },
    {
        Identificador: 4,
        Nome_da_aula: "Arrays"
    }
]

curso.aulas = listaDeAulas
console.log(curso)