let minhaFuncao = function(){
    console.log("Exemplo de função atribuida a uma variavel")
}
minhaFuncao()

//--------------------------------------------

function f1 (umaFuncao){
    umaFuncao()
}


function g1 (){
    function funcaoInterna(){
        console.log ('funcao definida dentro da funcao g1')
    }
    return funcaoInterna
}



/// Chamando f1:
f1(function (){
    console.log('Fui passada para f1')
})

// Chamando g1

const resultadoG1 = g1()
resultadoG1()

g1()()

f1(g1)


f1(g1())

// f1(g1()())

function ola(){
    let nome = 'Ana'
    return function () {
        console.log("Olá, "+nome);
    }
}


let resultadoOla = ola();

resultadoOla();