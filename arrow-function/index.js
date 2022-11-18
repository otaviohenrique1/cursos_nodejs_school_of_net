const teste = () => {
    console.log('Inside arrow function 1');
};
teste();

(() => {
    console.log('Inside arrow function 2');
})();

(() => (console.log('Inside arrow function 3')))();

(() => console.log('Inside arrow function 4'))();

function myFunc() {
    this.a = 'hello';
    console.log(this.a);
    setInterval(() => {
        console.log(this.a);
    }, 1000);
}
myFunc();