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