function cold(deg){
    const freezing = 2;
    if(freezing <= deg){
        return deg + " is above freezing.";
    }else{
        return deg + " is below freezing.";
    }
}

console.log(cold(10));
console.log(cold(1));
console.log(cold(-4));
