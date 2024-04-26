import fs from 'fs';
import readline from 'readline';
import nutrient_names from './conversions/NutrientNameConversion.js';
import nutrient_filter from './conversions/NutrientIDFilter.js';
import path from 'path';
const __dirname = path.resolve();

//Important nutrient IDs for easy reference.
//1079 - Fiber
//1003 - Protein
//1063 - Total Sugars
//1050 - Carbohydrates
//1005 - Carbohydrates
//1085 - Total Fat
//1258 - Total Saturated Fats
//1257 - Total trans fats
//1292 - Total Monosaturate Fats
//2047 - Calories(Atwoods)
//1253 - Cholesterol

async function Nutrient() {
    //Initialize nutrient list from relevant excel file.
    const list = await nutrients();

    async function nutrients() {
        const file = fs.createReadStream(path.join(__dirname, "./search/FoodCSV/foundation_nutrient.csv"));
        let list = [];

        const reader = readline.createInterface({
            input: file,
            crlfDelay: Infinity
        });

        for await (const line of reader) {
            const nutrientArr = line.split(",");
            let obj = {};
            let name = await nutrient_names.search(nutrientArr[2]).catch((err) => {throw err;});

            obj.fdc_id = Number(nutrientArr[1]);
            obj.nutrient_id = Number(nutrientArr[2]);
            if (name != false) {
                obj.nutrient_name = name;
            }
            obj.amount_100g = Number(nutrientArr[3]);
            obj.amount_per_gram = Number(Math.round(Number(nutrientArr[3])+'e2')+'e-2') / 100;

            list.push(obj);
        }

        return list;
    };

    async function binarySearch(ID) {
        let min = 0;
        let max = list.length - 1;

        return new Promise(function (resolve, reject) {
            while (min <= max) {
                let mid = Math.floor((max + min) / 2);

                if (list[mid].fdc_id < ID) {
                    min = mid + 1;
                } else if (list[mid].fdc_id > ID) {
                    max = mid - 1;
                } else {
                    //console.log(list[mid].fdc_id, ID, mid, min, max);
                    resolve(resultSpread(ID, mid));
                    break;
                }
            }
    
            reject(false);
        });
    }

    function resultSpread(ID, index) {
        let resultList = [list[index]];
        let ascending = index + 1;
        let descending = index - 1;
    
        //Ascending
        while (list[ascending].fdc_id === ID) {
            resultList.push(list[ascending]);
            ascending++;
        }

        //Descending
        while (list[descending].fdc_id === ID) {
            resultList.unshift(list[descending]);
            descending--;
        }

        return nutrient_filter(resultList);
    }

    return {
        nutrient_list: list,
        searchByFDC: binarySearch
    }
}

const nutrients = await Nutrient();
export default nutrients;