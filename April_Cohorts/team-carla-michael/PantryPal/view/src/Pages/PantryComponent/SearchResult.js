import { useNavigate } from 'react-router-dom';

function Result({ingredient, fridgeID}) {
    const navigate = useNavigate();

    async function pushToPantry() {
        const url = "/fridge/ingredient";

        await fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                'fridgeID': fridgeID,
                'ingredientID': ingredient.id,
                'measurement': 'ounce',
                'amount': '16'
            })
        }).then((res) => {
            console.log();
            //navigate("/pantry");
        }).catch((error) => {
            console.error(error);
            throw error;
        });

        navigate("/pantry");
    }

    //Splits large ingredient name into a readable heading and sub-heading.
    function parseName(heading){
        const split = heading.split(", ");
        
        return {
            heading: split[0].replace('"', ''),
            sub_heading: split.slice(1).join(", ")
        }
    };

    const header = parseName(ingredient.name);
    const calories = ingredient.nutrients.calories;
    const carbs = ingredient.nutrients.carbohydrates;
    const total_fat = ingredient.nutrients.total_fat;
    const protein = ingredient.nutrients.protein;
    return (
        <div className="flex justify-between justify-start m-5 bg-gray-300 py-2 px-8 rounded-lg">
            <div className="mr-4">
                <div>
                    <h1 className="text-lg font-semibold">{header.heading}</h1>
                    <h3 className="text-xs font-semibold">{header.sub_heading}</h3>
                </div>

                <button onClick={pushToPantry} className="px-3 text-s mt-3 py-2 bg-gray-200 rounded hover:bg-gray-400">
                    Add to Pantry</button>
            </div>
            <div>
                <p className="text-xs font-semibold m-2">Calories: {calories}</p>
                <p className="text-xs font-semibold m-2">Carbohydrates: {carbs}g</p>
                <p className="text-xs font-semibold m-2">Total Fat: {total_fat}g</p>
                <p className="text-xs font-semibold m-2">Protein: {protein}g</p>
            </div>
        </div>
    );
}

export default Result;