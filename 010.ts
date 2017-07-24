const stringArray = ['I like', 'I study from', 'This is'];

const result = rootCave(...stringArray);

console.log(result);


document.getElementById('result').innerHTML = result.join('<br/>');
