// Random between min and max range number generation function declaration
function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}