var x = 10;
if(x){
    let x = 4;// var x = 4; will overwrite global x so it prints 4 instead of 10
}
console.log(x);

for(let i = 0;i < 50; i++){ // var will make it always alert with number #50 so use let
    var div = document.createElement('div');
    div.onclick = function(){
        alert('You clicked on div #' + i);
    };
    document.getElementsByTagName('section')[0].appendChild(div);
}

