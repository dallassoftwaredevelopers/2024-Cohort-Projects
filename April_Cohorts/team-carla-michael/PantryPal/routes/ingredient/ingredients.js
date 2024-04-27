/**@module controller/google 
* @requires module:model/ingredient
*/
import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import Ingredient from '../../model/ingredient.js';
import create_ingredient from '../../controller/IngredientController.js';
import isAuthenticated from '../oauth/isAuthenticated.js';

const router = express.Router();

router.use("/*", (req, res, next) => {
    console.log(req.session);
    isAuthenticated(req, res, next);
});

// Endpoint to get all ingredients
router.get('/', (req, res) =>{
 res.json(ingredients);
});



export default router;