import foundation_food from './foundation_food.js';
import Ingredient from '../model/ingredient.js';
import mongoose from 'mongoose';
import 'dotenv/config';

(async function(){    
    const connected = new Promise(async (resolve, reject) => {
        return await mongoose.connect(process.env.DB_URL).then(() => {
            resolve();
        }).catch((error) => {
            reject(error);
        });
    });

    await connected.then(() => {
        const ingredient_list = foundation_food.map((obj) => {
            return new Ingredient(obj);
        });
        
        return ingredient_list;
    }).then(async (list) => {

        for await (const ingredient of list) {
            await ingredient.save().then((val) => {
                console.log("added: \x1b[32m" + val.name + "\x1b[0m");
            }).catch((error) => {
                throw error;
            });
        }

        return true;
    }).catch((error) => {
        throw error;
    });

    mongoose.disconnect();
})();
