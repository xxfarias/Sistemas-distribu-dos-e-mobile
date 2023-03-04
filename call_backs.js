const fs = require("fs")
const abrirArquivo = function (nomeArquivo){
    const exibirConteudo = function (erro, conteudo){
        if (erro){
            console.log(`Aconteceu o erro ${erro}`)
        }
        else {
            console.log(conteudo.toString())
            const dobro = conteudo.toString() *2
            const finaliza = function(erro){
                if (erro){
                    console.log(`erro na gravação do arquivo`)
                }
                else{
                    console.log('arquivo salvo com sucesso!')
                }
            }
            fs.writeFile(`dobro.txt`, dobro.toString(), finaliza)
        }
    }
    fs.readFile(nomeArquivo, exibirConteudo)

}

abrirArquivo("arquivo.txt")