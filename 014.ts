var person = {
    first: 'John',
    actions: ['eat', 'drink', 'run'],
    printActions: function () {
        this.actions.forEach(function (action) {
            var str = this.first + ' likes to ' + action;// undefined first
            console.log(str);
        });
    }
}

// _this to get first
var person2 = {
    first: 'John',
    actions: ['eat', 'drink', 'run'],
    printActions: function () {
        var _this = this;
        this.actions.forEach(function (action) {
            var str = _this.first + ' likes to ' + action;
            console.log(str);
        });
    }
}

// bind to get first
var person3 = {
    first: 'John',
    actions: ['eat', 'drink', 'run'],
    printActions: function () {
        this.actions.forEach(function (action) {
            var str = this.first + ' likes to ' + action;
            console.log(str);
        }.bind(this));
    }
}

// arrow function (will be compiled to _this version in 014.js)
var person4 = {
    first: 'John',
    actions: ['eat', 'drink', 'run'],
    printActions() {
        this.actions.forEach((action) => {
            var str = this.first + ' likes to ' + action;
            console.log(str);
        });
    }
}

person.printActions();
person2.printActions();
person3.printActions();
person4.printActions();
