function mprint(firstName){
    console.log('Hello ' + firstName);
}

function mprint2(firstName){
    console.log(`Hello ${firstName} `);
}

function createEmail(firstName, purchasePrice){
    var shipping = 2.99;
    console.log(
        `Hi ${firstName}, Thanks for buying from us!
            Purchase price: $${purchasePrice}
            Shipping: $${shipping}
            Total: $${ purchasePrice + shipping}
        `
    );
}


mprint('Mahdy');
mprint2('Mahdy');

createEmail('Mahdy', 100);
