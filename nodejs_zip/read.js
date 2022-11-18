const path = require('path');
const fs = require('fs');

const zipFile = fs.readFileSync(path.join(__dirname, 'zipfile.zip'));

const zip = require('node-zip')(zipFile, {
    bas64: false,
    checkCRC32: true
});
console.log(zip.files['son.txt']);

// Ler arquivo zip