import readonly from "./readonly";

export default class Person {
    @readonly
    age() {}

    age2() {}
}