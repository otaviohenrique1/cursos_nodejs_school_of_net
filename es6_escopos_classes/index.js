class Foo {
    constructor() {
        this.a = this.a.bind(this);
    }

    a() {
        console.log('Hello world from Foo:a');
        // console.log('Hello world 1');
    }
    
    // b = () => {}

    // b = () => console.log('Hello world 2');

    // static c = () => console.log('Hello world 3');
}

class Bazz extends Foo {
    b() {
        super.a();
        console.log('Hello world from Bazz:b');
    }
}

const foo = new Foo();
const bazz = new Bazz();

foo.a();
// foo.b();
// Foo.c();
bazz.b();