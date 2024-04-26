/**@module controller/helper/soundex */


/** Soundex algorithm is a phonetic algorithm used to find
 * words that sound like each other.
 * 
 * If results cannot be found 
 * 
 * Struggles with non-english food names.
*/

function Soundex() {
    function convert(input) {
        let word = input.replaceAll(/^a-zA-Z/g, "").toLowerCase().split('');
        const code = word[0].toUpperCase();

        //Converts each letter to corresponding soundex number.
        word = letterToInt(word);

        console.log(word);
    }

    function filter(arr) {
        let last = arr[0];
        return arr.reduce((acc, curr) => {
            if (curr === last) {

            }
        }, arr[0]);
    }

    function letterToInt(word) {
        const vowels = "aeiou";
        const conversions = {
            "bfpv": 1,
            "cgjkqsxz": 2,
            "dt": 3,
            "l": 4,
            "mn": 5,
            "r": 6
        };

        const keyList = Object.keys(conversions);
        word = word.map((val) => {
            if (vowels.includes(val)) {
                return 0;
            }

            for (let i = 0; i < keyList.length; i++) {
                const key = keyList[i];
                
                if(key.includes(val)) {
                    return conversions[key];
                }
            }
        });

        return word;
    }

    return {
        //May add other functions as well.
        convert: convert
    };
}

Soundex().convert("Robert");

