import mongoose from 'mongoose';
import Ingredient from './../model/ingredient.js';
import convertToInt from './helper/convertToInt.js';
//import dictionary from '../search/foundation_dictionary.js';
import 'dotenv/config';


const create_ingredient = (ingredient) => {
    const connected = new Promise(async (resolve, reject) => {
        await mongoose.connect(process.env.DB_URL).then(() => {
            resolve();
        }).catch((error) => {
            reject(error);
        });
    });

    const newIngredient = new Ingredient(ingredient);
    // Save the new ingredient to the database
    connected.then(() => {
        newIngredient.save()
            .then(savedIngredient => {
                console.log("New ingredient saved successfully:", savedIngredient);
            })
            .then(() => {
                //Any open mongoose connections must be disconnected after use
                //to free up connections in the connection pool.
                mongoose.disconnect();
            })
            .catch(error => {
                console.error("Error saving ingredient:", error);
            });
    }).catch((error) => {
        console.error(error);
    });
}

const read_ingredient = async (req, res) => {
    const id = req.query.id;

    await mongoose.connect(process.env.DB_URL).then(() => {
        resolve();
    }).catch((error) => {
        reject(error);
    });

    const ingredient = await Ingredient.findOne({fdc_id: id});

    if (ingredient !== null) {
        res.json(ingredient);
    } else {
        res.statusCode(404);
    }

    mongoose.disconnect();
}

export default  {
    create: create_ingredient,
    read: read_ingredient
};