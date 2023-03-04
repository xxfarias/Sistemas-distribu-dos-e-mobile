// function demorada(){
//     const atualMais2segundos = new Date().getDate() + 2000
//     while (new Date().getTime() <= atualMais2segundos);
//     const d = 5 + 2
//     return d 
// }
// -----------------------------------
// const a = 2 + 3
// const b = 7

// setTimeout(function() {
//     const d = demorada()
//     console.log(d)
// }, 500)

// const c = 2 * a + b
// console.log(c)

// -----------------------------------
// setTimeout(function(){
//     console.log('dentro da função timeout')
// }, 0)

// const a = new Date().getTime() + 1000
// while (new Date().getTime() < a);
// console.log('Tô fora do timeout')

// -----------------------------------
// console.log("Primeiro")
// console.log("Segundo")
// console.log("Terceiro")


// -----------------------------------


function demorada (tempo){
    console.log(`demorada com tempo: ${tempo}`)
    const agoraMaisTempo = new Date().getTime +  tempo
    while (new Date().getTime() <= agoraMaisTempo);
    return 5 + 5
}


setTimeout (function() {demorada(2000)}, 2000)
setTimeout (function(){ demorada(1000)}, 1000)

console.log ('acabooou')