let pessoa = {
    nome: "clara",
    anoNascimento: 1996,
    nomeDeUsuario: "CLARA_GOMES",
    temCarro: true,
    valeCombustivel: "R$ 0,00",
    distanciaDoTrabalho: "120km",
    endereco: []
}


// Exercício 1 - Qual a idade da pessoa ?
function qualIdade(objPessoa){
    return 2022 - objPessoa.anoNascimento
}

// console.log(qualIdade(objPessoa))


// Exercício 2 - Normalizando a informação nome
function normalizaDado(objPessoa){
    let nome = objPessoa.nome
    nome = nome.replace(nome[0], nome[0].toUpperCase())
    return nome
}

// console.log(normalizaDado(pessoa))


// Exercício 3 - Inserindo usuário na lista de usuários
let listaUsuarios = []

function criandoListaDeUsuarios(objPessoa){
    listaUsuarios.push(objPessoa.nomeDeUsuario.toLowerCase())
}

// criandoListaDeUsuarios(pessoa)
// console.log(listaUsuarios)


// Exercício 4 - Consultando se a pessoa tem direito a vale
let endereco = {
    cidade: 'Curitiba',
    logradouro: 'Rua Dali',
    numero: 10,
    tipo:[]
}

function calculaVale(objPessoa){
    let valorDoLitro = 6.99
    objPessoa.distanciaDoTrabalho = Number(objPessoa.distanciaDoTrabalho.replace("km", ""))
    
    if(objPessoa.temCarro == true) {
        objPessoa.valeCombustivel = `R$${((objPessoa.distanciaDoTrabalho * valorDoLitro) * 0.7).toFixed(2)}`
        return objPessoa.valeCombustivel
    }
}

// pessoa.valeCombustivel = calculaVale(pessoa)
// console.log(pessoa)