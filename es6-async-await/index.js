// async function fun1(params) {}
// const fun2 = async () => {}

// const request = require('request');

// function getData() {
//     return new Promise(function(resolve, reject) {
//         request("http://echo.jsontest.com/key/value/one/two", function(error, response, body) {
//             if (error) {
//                 reject(error);
//             }
//             resolve(body);
//         });
//     });
// }

// getData()
//     .then(function(result) {
//         console.log(result);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

const request = require('request');

function getData() {
    return new Promise(function(resolve, reject) {
        request("http://echo.jsontest.com/key/value/one/two", function(error, response, body) {
            if (error) {
                reject(error);
            }
            resolve(body);
        });
    });
}

async function main() {
    try {
        var json = await getData();
        var result= await getData(json);
        var result= await getData(json);
        var result= await getData(json);
        var result= await getData(json);
        var result= await getData(json);
        var result= await getData(json);
        return console.log(json);
    } catch (error) {
        console.log('Fail');
    }
}

main();