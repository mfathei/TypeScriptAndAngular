function mprint(firstName) {
    console.log('Hello ' + firstName);
}
function mprint2(firstName) {
    console.log("Hello " + firstName + " ");
}
function createEmail(firstName, purchasePrice) {
    var shipping = 2.99;
    console.log("Hi " + firstName + ", Thanks for buying from us!\n            Purchase price: $" + purchasePrice + "\n            Shipping: $" + shipping + "\n            Total: $" + (purchasePrice + shipping) + "\n        ");
}
mprint('Mahdy');
mprint2('Mahdy');
createEmail('Mahdy', 100);
//# sourceMappingURL=007.js.map