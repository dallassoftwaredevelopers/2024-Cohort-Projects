/**@module router/fridge*/
import express from 'express';
import FridgeController from '../../controller/FridgeController.js';
import isAuthenticated from '../oauth/isAuthenticated.js';
const router = express.Router();

router.use("/*", (req, res, next) => {
    console.log(req.session);
    isAuthenticated(req, res, next);
});

router.get("/ingredient", (req, res) => {
    FridgeController.readIngredient(req, res);
});
//route to post based on name of ingredient
router.get("/ingredient/query", (req, res) => {
    const {name,fridgeID} = req.query;
console.log(name,fridgeID);
    FridgeController.readIngredientByName(req, res);

});
router.post("/ingredient", (req, res) => {
    FridgeController.addIngredient(req, res);
});

router.post("/ingredient/delete", (req, res) => {
    FridgeController.removeIngredient(req, res); 
});

router.post("/ingredient/amount", (req, res) => {
    FridgeController.updateIngredientAmount(req, res);
})

router.post("/ingredient/inc", (req, res) => {
    FridgeController.incrementIngredient(req, res);
});

router.post("/ingredient/dec", (req, res) => {
    FridgeController.decrementIngredient(req, res);
});

router.get("/recipe/search", (req, res) => {
    FridgeController.recipeSearch(req, res);
});

router.get("/meal", (req, res) => {

    FridgeController.readMeals(req, res);
});

router.post("/meal", (req, res) => {
   
    FridgeController.addMeal(req, res);
});

router.post("/meal/delete", (req, res) => {
    FridgeController.deleteMeal(req, res); 
});

export default router;
