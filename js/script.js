console.log('S-JS-OK');

//* Recovering DOM elements
const countdownElement = document.getElementById('countdown');
const numberListElement = document.getElementById('number-list');
const form = document.getElementById('answers-form');
const message = document.getElementById('message');
const inputGroup = document.getElementById('input-group');

//* Declaring info variables
const min = 1;
const max = 100;
const totalNumbers = 5;
const time = 5;

const inputs = [];


countdownElement.innerText = time;

//* Generating random numbers
const numbers = getDifferentRandomNumbers(min, max, totalNumbers);
// Checking function output
console.log(numbers);

//* Injecting random numbers on DOM
let items = '';

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    items += `<li class="fs-4">${number}</li>`;
    inputs.push(`<input type="number" class="form-control border border-success" min="${min}" max="${max}" required>`);
}

numberListElement.innerHTML = items;
inputGroup.innerHTML = inputs.join('')


