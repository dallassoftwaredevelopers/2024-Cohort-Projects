import fs from 'fs';
import readline from 'readline';
import path from 'path';
const __dirname = path.resolve();
const appRoot = process.env.PWD;
console.log(appRoot);

const conversion = async function() {

    const list = await nutrients();

    async function nutrients() {
        const file = fs.createReadStream(path.join(__dirname, "./search/FoodCSV/nutrient_name.csv"));
        let list = [];

        const reader = readline.createInterface({
            input: file,
            crlfDelay: Infinity
        });

        for await (const line of reader) {
            const lineArr = line.split(";");
            let obj = {};

            obj.nutrient_id = lineArr[0];
            obj.nutrient_name = lineArr[1].replace('"', '');
            
            list.push(obj);
        }

        return list;
    }

    async function binarySearch(ID) {
        let min = 0;
        let max = list.length - 1;

        while(min <= max) {
            let mid = Math.floor((max + min) / 2);

            if (list[mid].nutrient_id < ID) {
                min = mid + 1;
            } else if (list[mid].nutrient_id > ID) {
                max = mid - 1;
            } else {
                return list[mid]["nutrient_name"];
            }
        }

        return false;
    }

    return {
        nutrient_name_list: list,
        search: binarySearch
    }
}

export default await conversion();