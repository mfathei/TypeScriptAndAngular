var sales = ["Mohamed", "Ahmed", "Dina"];
var marketing = ["John", "Jasmine", "Sales"];

var departments = ["Software", sales, "HR", marketing, "Finance"];

console.log(departments);
console.log("---------------------------------------------------------------------------");

 departments = ["Software", ...sales, "HR", ...marketing, "Finance"];// note ... spread operator

console.log(departments);
