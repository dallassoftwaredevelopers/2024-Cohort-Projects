import foundation_food from "../../search/foundation_food.js";
import { expect } from "chai";

describe("Ingredient List - Foundation Foods", function() {
    it("Should not be undefined.", function() {
        expect(foundation_food).to.not.equal(undefined);
    });

    it("Should return an Almond Butter ingredient", function() {
        const ingredient = foundation_food[0];

        expect(ingredient.name).to.equal("Almond butter, creamy");
        expect(ingredient.fdc_id).to.equal("2262074");
        expect(ingredient.nutrients).to.not.equal(undefined);
        expect(ingredient.nutrients.calories).to.equal(645);
    });

    it("Should return an Apple Juice ingredient", function() {
        const ingredient = foundation_food[3];

        expect(ingredient.name).to.equal("Apple juice, with added vitamin C, from concentrate, shelf stable");
        expect(ingredient.fdc_id).to.equal("2003590");
        expect(ingredient.nutrients).to.not.equal(undefined);
        expect(ingredient.nutrients.calories).to.equal(48);
    });
});