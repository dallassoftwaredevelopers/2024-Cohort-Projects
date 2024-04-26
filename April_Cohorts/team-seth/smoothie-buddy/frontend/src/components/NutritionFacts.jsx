import ingredients from '../data/ingredients.json'
import nutritionData from '../data/nutrition_data.json'
import './NutritionFacts.css';

function findIngredients(recipe) {
    let specifiedIngredients = ingredients['ingredients by recipe'][recipe]["main"];
    return specifiedIngredients;
};
function parseNutritionData(recipe) {
    let parsedData = {};
    let specifiedIngredients = findIngredients(recipe);
    for (let i = 0; i < specifiedIngredients.length; i++) {
        for (let j = 0; j < nutritionData.length; j++) {
            if (specifiedIngredients[i] === nutritionData[j]["ingredients"][0]["text"]) {
                let nutritionValues = nutritionData[j]["ingredients"][0]["parsed"][0]["nutrients"];
                let dailyValues = nutritionData[j]["totalDaily"]
                parsedData[specifiedIngredients[i]] = [nutritionValues, dailyValues];
            };
        }
    }
    
    const dataArray = Object.values(parsedData);
    return dataArray;
}

function sumNutritionData(recipe) {

    let dataArray = parseNutritionData(recipe)

    let sumNutrition = {
        "Total Fat": {
            "quantity": 0,
            "unit": "g",
            "dailyValue": 0,
        },
        "Cholesterol": {
            "quantity": 0,
            "unit": "mg",
            "dailyValue": 0,
        },
        "Sodium": {
            "quantity": 0,
            "unit": "mg",
            "dailyValue": 0,
        },
        "Carbohydrates": {
            "quantity": 0,
            "unit": "g",
            "dailyValue": 0,
        },
        "Protein": {
            "quantity": 0,
            "unit": "g",
            "dailyValue": 0,
        },
        "Vitamin-D": {
            "quantity": 0,
            "unit": "IU",
            "dailyValue": 0,
        },
        "Calcium": {
            "quantity": 0,
            "unit": "mg",
            "dailyValue": 0,
        },
        "Iron": {
            "quantity": 0,
            "unit": "mg",
            "dailyValue": 0,
        },
        "Potassium": {
            "quantity": 0,
            "unit": "mg",
            "dailyValue": 0,
        },
        "Vitamin-C": {
            "quantity": 0,
            "unit": "mg",
            "dailyValue": 0,
        },
    }
    let calories = 0;

    for (let i = 0; i < dataArray.length; i++) {
        calories += Math.round(dataArray[i][0]["ENERC_KCAL"]["quantity"]);
        
        sumNutrition["Total Fat"]["quantity"] += Math.round(dataArray[i][0]["FAT"]["quantity"]);
        sumNutrition["Total Fat"]["dailyValue"] += Math.round(dataArray[i][1]["FAT"]["quantity"]);
        
        sumNutrition["Cholesterol"]["quantity"] += Math.round(dataArray[i][0]["CHOLE"]["quantity"]);
        sumNutrition["Cholesterol"]["dailyValue"] += Math.round(dataArray[i][1]["CHOLE"]["quantity"]);
        
        sumNutrition["Sodium"]["quantity"] += Math.round(dataArray[i][0]["NA"]["quantity"]);
        sumNutrition["Sodium"]["dailyValue"] += Math.round(dataArray[i][1]["NA"]["quantity"]);
        
        sumNutrition["Carbohydrates"]["quantity"] += Math.round(dataArray[i][0]["CHOCDF"]["quantity"]);
        sumNutrition["Carbohydrates"]["dailyValue"] += Math.round(dataArray[i][1]["CHOCDF"]["quantity"]);
        
        sumNutrition["Protein"]["quantity"] += Math.round(dataArray[i][0]["PROCNT"]["quantity"]);
        sumNutrition["Protein"]["dailyValue"] += Math.round(dataArray[i][1]["PROCNT"]["quantity"]);
        
        sumNutrition["Vitamin-D"]["quantity"] += Math.round(dataArray[i][0]["VITD"]["quantity"]);
        sumNutrition["Vitamin-D"]["dailyValue"] += Math.round(dataArray[i][1]["VITD"]["quantity"]);
        
        sumNutrition["Calcium"]["quantity"] += Math.round(dataArray[i][0]["CA"]["quantity"]);
        sumNutrition["Calcium"]["dailyValue"] += Math.round(dataArray[i][1]["CA"]["quantity"]);
        
        sumNutrition["Iron"]["quantity"] += Math.round(dataArray[i][0]["FE"]["quantity"]);
        sumNutrition["Iron"]["dailyValue"] += Math.round(dataArray[i][1]["FE"]["quantity"]);
        
        sumNutrition["Potassium"]["quantity"] += Math.round(dataArray[i][0]["K"]["quantity"]);
        sumNutrition["Potassium"]["dailyValue"] += Math.round(dataArray[i][1]["K"]["quantity"]);
        
        sumNutrition["Vitamin-C"]["quantity"] += Math.round(dataArray[i][0]["VITC"]["quantity"]);
        sumNutrition["Vitamin-C"]["dailyValue"] += Math.round(dataArray[i][1]["VITC"]["quantity"]);
    }
    return [calories, sumNutrition]
}

export default function NutritionFacts(props) {
    
    const [calories, nutritionFacts] = sumNutritionData(props.recipe)
    
    const keys = Object.keys(nutritionFacts)
    const sumValues = Object.values(nutritionFacts)
    return (

        <div className="nutritionCard">
            <h1>Nutrition Facts</h1>
            <h3>Serving Size <span>1 shake</span></h3>
            <div className="caloriesDiv">
                <h2>Calories</h2>
                <h2>{calories}</h2>
            </div>
            <div className="dailyValue">
                <div></div>
                <h4 >%Daily Value*</h4>
            </div>
            <ul>
                {keys.map((key, index) => (
                <li key={index}>
                    <div className="listDiv">
                        <h4>
                            {key}
                        </h4>
                        {sumValues[index]["quantity"]}
                        {sumValues[index]["unit"]}
                    </div>
                    <p>
                        {sumValues[index]["dailyValue"]}%
                    </p>
                </li>
            ))}
            </ul>
        </div>

    );
}