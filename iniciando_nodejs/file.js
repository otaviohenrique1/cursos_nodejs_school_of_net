const fs = require('fs');

// fs = file system

let text1 = `Hello World
Cavalo voador
Cavalo corredor
Cavalo nadador`;

// Escreve em um arquivo
// fs.writeFile('data.txt', text1, function(err) {
//     if (err) {
//         throw err;
//     }
// });

// Le um arquivo
// fs.readFile('data.txt', function(err, data) {
//     if (err) {
//         throw err;
//     }
//     console.log(data.toString('utf8'));
// });

// Lista os arquivos do diretorio
// fs.readdir('.', function(err, files) {
//     if (err) {
//         throw err;
//     }

//     for(let file in files) {
//         console.log(files[file]);
//     }
// });

// Lista de maneira sincrona os arquivos do diretorio
fs.readdirSync('.')
    .filter(function(file) {
        return (file.endsWith('.js'));
    })
    .forEach(function(file) {
        console.log(file);
    });