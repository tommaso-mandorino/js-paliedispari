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

// IF user choice is equal to even/odd sum result
if (userChoice === numberEvenOrOdd) {

    // Alert user win
    alert(`Hai VINTO!
           Avevi scelto ${userChoice.toUpperCase()}
           e la somma del tuo numero (${userNumber})
           e del numero del computer generato casualmente (${computerNumber})
           è ${numberSum}, che è un numero ${userChoice.toUpperCase()}!`
         );

}
// ELSE
else
{

    // Alert user loose
    alert(`Hai PERSO!
           Avevi scelto ${userChoice.toUpperCase()},
           ma la somma del tuo numero (${userNumber})
           e del numero del computer generato casualmente (${computerNumber})
           è ${numberSum}, che NON è un numero ${userChoice.toUpperCase()}!`
         );

}