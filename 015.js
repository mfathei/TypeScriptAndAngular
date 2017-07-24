var Person = (function () {
    function Person(description, age) {
        this.description = description;
        this.age = age;
    }
    Person.prototype.introduceYourself = function () {
        console.log("I am a " + this.description + " and I am " + this.age + " years old!");
    };
    return Person;
}());
var person1 = new Person('web developer', 34);
person1.introduceYourself();
//# sourceMappingURL=015.js.map