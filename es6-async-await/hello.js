function sayHello(params) {
    return "Hello School of net";
}

async function main() {
    const hello = await sayHello();
    return console.log(hello);
}

main();