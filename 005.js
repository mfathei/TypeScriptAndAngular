var x = 10;
if (x) {
    var x_1 = 4; // var x = 4; will overwrite global x so it prints 4 instead of 10
}
console.log(x);
var _loop_1 = function (i) {
    div = document.createElement('div');
    div.onclick = function () {
        alert('You clicked on div #' + i);
    };
    document.getElementsByTagName('section')[0].appendChild(div);
};
var div;
for (var i = 0; i < 50; i++) {
    _loop_1(i);
}
//# sourceMappingURL=005.js.map