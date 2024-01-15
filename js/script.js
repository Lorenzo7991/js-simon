console.log('S-JS-OK');

//* Recovering DOM elements
const countdownElement = document.getElementById('countdown');
const numberListElement = document.getElementById('number-list');
const form = document.getElementById('answers-form');
const message = document.getElementById('message');
const inputGroup = document.getElementById('input-group');
const instructions = document.getElementById('instructions');
//* Declaring info variables
const min = 1;
const max = 100;
const totalNumbers = 5;
let time = 5;

countdownElement.innerText = time;

//* Generating random numbers
const numbers = getDifferentRandomNumbers(min, max, totalNumbers);
//? Checking function output
console.log(numbers);

//* Injecting random numbers on DOM
let items = '';
const inputs = [];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    items += `<li class="fs-4">${number}</li>`;
    inputs.push(`<input type="number" class="form-control border border-success" min="${min}" max="${max}" required>`);
}

numberListElement.innerHTML = items;
inputGroup.innerHTML = inputs.join('');
const inputFields = document.querySelectorAll('input');

//* Countdown
countdownElement.innerText = time;
const countdown = setInterval(() => {
    countdownElement.innerHTML = --time;
    if (time === 0) {
        clearInterval(countdown);
        form.classList.remove('d-none');
        numberListElement.classList.add('d-none');
        instructions.innerText = 'Inserisci tutti i numeri che sei riuscito a memorizzare!';
    }
}, 1000);

//* Verifying user input
form.addEventListener('submit', e => {
    //* Preventing default form behavior
    e.preventDefault();

    const userGuess = [];

    for (let i = 0; i < inputFields.length; i++) {
        const field = inputFields[i];
        const value = parseInt(field.value);

        if (!isNaN(value) && value >= min && value <= max && !userGuess.includes(value)) {
            userGuess.push(value);
        }
    }
    //? Checking loop value
    console.log(userGuess);

    if (userGuess.length < totalNumbers) {
        message.classList.add('text-danger');
        message.innerText = 'Sono stati inseriti valori non validi o duplicati';
    }

    //* Checking correct user guesses
    const correctAnswers = [];
    for (let i = 0; i < userGuess.length; i++) {
        let guess = userGuess[i];
        if (numbers.includes(guess)) correctAnswers.push(guess);
    }

    //* Providing correct message answer
    message.classList.remove('text-danger');
    if (correctAnswers.length === totalNumbers) message.classList.add('text-success');

    if (correctAnswers.length === totalNumbers) {
        const guessedNumbersString = correctAnswers.join(', '); // Unisce i numeri con una virgola e uno spazio tra di essi
        message.innerText = `Hai indovinato ${correctAnswers.length} numeri. I numeri indovinati sono: ${guessedNumbersString}`;
    } else {
        message.innerText = 'Nessun numero indovinato.';
    }
});
