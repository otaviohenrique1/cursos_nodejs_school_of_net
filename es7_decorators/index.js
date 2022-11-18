import Person from "./src/Person";

(function() {
    const person = new Person();
    person.age = 24;
    person.age2 = 24;
    console.log(person.age2);
})();