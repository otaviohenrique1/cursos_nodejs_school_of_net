const fs = require('fs');

for (let i = 0; i < 10; i++) {
    fs.appendFile("arquivo3.txt", `${i}\n`, (erro) => {
        if (erro) {
            throw erro;
        }
    });
}