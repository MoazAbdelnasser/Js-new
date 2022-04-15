class user {
    constructor(name, age) { //This is a contructor that make an initialization for all class properties
        this.name = name;
        this.age = age;
    }
    printName() { //Define class method
        console.log(`Name : ${this.name}`);
    }
    printAge() {
        console.log(`Age : ${this.age}`);
    }
}
//Let 's now create object template
let us = new user("Moaz Abdelnasser", 25);
us.printName();
us.printAge();