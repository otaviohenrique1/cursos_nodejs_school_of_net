const fs = require('fs');
const path = require('path');
const { parseString, Parser, Builder } = require('xml2js');

const data1 = { name: 'Leonan', age: 23 };

const builder = new Builder();
const xml1 = builder.buildObject(data1);
console.log(xml1);

// const { parseString, Parser } = require('xml2js');

// const xml = '<hello>Hello from XML By School of net</hello>';
// parseString(xml, function(err, res) {
//     console.log(res);
// });

// fs.readFile(path.join(__dirname, './data.xml'), 'utf-8', function(err, file) {
//     // console.log(file);
//     parseString(file, function(err, res) {
//         // console.log(res);
//         console.log(JSON.stringify(res));
//     });
//     // const parser = new Parser();
//     // parser.parseString(file, function(err, res) {
//     //     console.log('fasfs', res);
//     // });
// });