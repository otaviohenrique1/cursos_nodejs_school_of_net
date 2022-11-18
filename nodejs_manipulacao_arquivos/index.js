const fs = require('fs');

// fs.readFile("arquivo.txt", "utf-8", (erro, dados) => {
//     if (erro) {
//         throw erro;
//     }
//     console.log(dados);
//     let arrayDeDados = dados.split(/\r?\n/);
//     console.log(arrayDeDados);
// });

// let conteudoDoArquivo = "School of Net3";
// fs.writeFile("arquivo2.txt", conteudoDoArquivo,(erro) => {
//     if (erro) {
//         throw erro;
//     }
// });

// Coloca dados no arquivo
let conteudoDoArquivo2 = "School of Net5\n";
fs.appendFile("arquivo2.txt", conteudoDoArquivo2,(erro) => {
    if (erro) {
        throw erro;
    }
});