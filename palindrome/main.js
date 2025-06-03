// Reverse string function declaration
function reverseString(string) {

    // Initialize an empty string variable which will be gradually filled with the letters of the string in reversed order
    let reversedString = '';

    // Loop the string from the end to the start
    for (let i = string.length - 1; i >= 0; i--) {

        // Add next letter to the reversed string
        reversedString += string[i];

    }

    return reversedString;

}