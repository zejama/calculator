function add(number1,number2) {
	return number1 + number2;
}

const number1 = parseInt(prompt("Enter a number: "));
const number2 = parseInt(prompt("Enter another number: "));

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

const result = multiply(number1, number2);

alert(result);