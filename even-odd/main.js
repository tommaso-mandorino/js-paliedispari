// Random between min and max range number generation function declaration
function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

// Checking if number is even or odd function declaration
function isEvenOrOdd(number) {

    // IF number divided by 2 has no remainder
    if (number % 2 === 0) {

        // Return number is even
        return 'even';

    } else {

        // Return number is odd
        return 'odd';

    }

}

// Ask the user tho choose even or odd
const userChoice = prompt('Scegli pari o dispari:');

// Ask the user to choose his number
const userNumber = Number(prompt('Inserisci il tuo numero:'));

// Generate a randome number between 1 and 5 for the computer
const computerNumber = randomNumber(1, 5);

// Sum user and computer numbers
const numberSum = userNumber + computerNumber;

// Check if number sum is even or odd and converts result in italian to match user choice
const numberEvenOrOdd = isEvenOrOdd(numberSum) === 'even' ? 'pari' : 'dispari';