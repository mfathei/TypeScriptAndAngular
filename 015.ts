class Person {

    description: string;
    age: number;

    constructor(description, age) {
        this.description = description;
        this.age = age;
    }

    introduceYourself() {
        console.log(`I am a ${this.description} and I am ${this.age} years old!`);
    }
}


var person1 = new Person('web developer', 34);
person1.introduceYourself();
