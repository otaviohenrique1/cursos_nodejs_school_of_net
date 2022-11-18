class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    /* ES6 */
    static doubleAge(value) {
        return value * 2;
    }
}

/* ES5 */
Person.sayHello = function() {
    return "Hello World";
}

let leonan = new Person('Leonan', 21);

console.log(leonan);
console.log(Person.doubleAge(21));
console.log(Person.sayHello());