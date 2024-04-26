function Comparator(ingredients, recipeList) {
    const completeRecipes = [];
    const incompleteRecipes = [];

    //Checks if ingredients contains all of the items for a recipe.
    //Returns true or false.
    function compare(recipe) {
        const goal = recipe.ingredients.length;
        let counter = 0;

        for (let i = 0; i < recipe.ingredients.length; i++) {
            const currentID = recipe.ingredients[i].toString();

            for (let j = 0; j < ingredients.length; j++) {
                const ingredientID = ingredients[j].toString();

                if (ingredientID === currentID) {
                    counter++;
                    break;
                }
            }
        }

        if (counter === goal) {
            return true;
        } else {
            return counter;
        }
    }

    //Loop through each recipe and chug it through compare()
    //pushes each recipe into complete or incomplete.
    for (let i = 0; i < recipeList.length; i++) {
        const recipe = recipeList[i].toObject();
        const check = compare(recipe);
        if (check === true) {
            completeRecipes.push(recipe);
        } else {
            recipe.counter = check;
            incompleteRecipes.push(recipe);
        }
    }

    return {
        complete: completeRecipes.slice(0, 10),
        incomplete: incompleteRecipes.sort((a,b) => {
            return b.counter - a.counter;
        }).slice(0, 10)
    }
}

export default Comparator;