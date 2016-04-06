console.log("here!");


var button = document.querySelector('#addButton');
var input = document.querySelector('#letterBox');
var letters = document.querySelector('#letterList');

var addLetter = function wordBuilder() {
  var listItem = document.createElement('li');

  listItem.textContent = input.value;

  letters.appendChild(listItem);
  input.value = '';

}

console.log(input.value);

button.addEventListener('click', addLetter);
