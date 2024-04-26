import fs from 'fs';
import readline from 'readline';
// import ID_list from './conversions/ID_list.js';
import nutrients from './Nutrient.js';
import path from 'path';
const __dirname = path.resolve();

const buildFoundationFoods = async () => {
    const file = fs.createReadStream(path.join(__dirname, "./search/FoodCSV/foundation_food.csv"));
    const reader = readline.createInterface({input: file, crlfDelay: Infinity});
    const uniques = {};
    const ingredient_list = [];

    for await (const line of reader) {
        const arr = line.split(";");
        const ID = String(arr[0]);
        const name = arr[2];

        //If ingredient already exists, ignore line.
        if (uniques[name] === undefined) {
            const ingredient = {};
            const nutrientObj = await nutrients.searchByFDC(Number(ID)).then((res) => {
                return res;
            }).catch((error) => {
                throw error;
            });
            
            ingredient.name = name;
            ingredient.fdc_id = ID;

            ingredient.nutrients = nutrientObj;
            ingredient_list.push(ingredient);
            
            uniques[name] = true;
        }
    }
    
    return ingredient_list;
}

export default await buildFoundationFoods();