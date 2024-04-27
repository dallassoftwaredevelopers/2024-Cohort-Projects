
/*Converts a word into an integer based off UTF-16 character codes.*/
function convertToInt(word) {
    let value = 0;
    for (let i = 0; i < word.length; i++) {
        value += word.charCodeAt(i);
    }

    return value;
}

export default convertToInt;