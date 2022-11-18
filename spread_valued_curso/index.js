// function name(name = 'Leonan') {
//     /* name -> Valued Parameters */
//     console.log(name);
// }
// name();

// function numeros(...b) {
//     console.log(b);
// }
// numeros(1,2,3,4,5,8,6,7,5,8,2,9);

/* ...arr -> Spread Operator */
// var arr = [1,2,3];
// var arr2 = [7,8,9, ...arr];
// console.log(arr, arr2);

function myFunc(a, b) {
    console.log('hello', a, b);
}
var args = [10, 20];
// myFunc.apply(null, args);
// myFunc();
myFunc(...args);