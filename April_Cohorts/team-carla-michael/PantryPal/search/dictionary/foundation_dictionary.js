import fs from 'fs';
import readline from 'readline';


async function lineReader() {
    const foodFile = fs.createReadStream("../FoodCSV/foundation_food.csv");
    let ordered = [];
    const set = {};
    const refObj = {};

    const reader = readline.createInterface({
        input: foodFile,
        crlfDelay: Infinity
    });

    for await (const line of reader) {
        const arr = line.split(";");
        const ID = arr[0];
        const description = arr[2];

        if (set[description] === undefined) {
            set[description] = true;
            
            const descArr = description.split(", ");

            for (const adjective of descArr) {
                let split = adjective.toLowerCase()
                    .replace(/-/g, "")
                    .replace(/[^a-zA-Z]/g, " ")
                    .split(" ");

                for (const word of split) {
                    if (refObj[word] === undefined) {
                        if (word !== "") {
                            refObj[word] = [ID];
                        }
                    } else {
                        refObj[word].push(ID);
                    }
                }
            }
        }
    }

    ordered = Object.keys(refObj).sort().reduce((obj, key) => {
        obj[key] = refObj[key];
        return obj;
    }, {});

    console.log(ordered);
    return ordered;
}

function binarySearch(prefix, near) {
    const keys = Object.keys(this.dictionary);
    let min = 0;
    let max = keys.length - 1;
    let mid;

    while (min <= max) {
        mid = Math.floor((max + min) / 2);
        const compare = prefix.localeCompare(keys[mid]);
        
        if (compare > 0) {
            min = mid + 1;
        } else if (compare < 0) {
            max = mid - 1;
        } else {
            return keys[mid];
        }
    }

    if (near) {
        //Returns the index of where the prefix should be if not found.
        return keys[mid];
    } else {
        return -1;
    }
}

const dictionary = await lineReader();

const returnObj = {
    dictionary: dictionary,
    search: binarySearch
}

console.log(returnObj.search("zdaseeddasfzxvcsdf"));
export default dictionary;