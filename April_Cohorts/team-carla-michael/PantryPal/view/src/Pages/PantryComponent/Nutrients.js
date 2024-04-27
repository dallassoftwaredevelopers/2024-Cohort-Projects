function Nutrients(props) {
    function convertToGrams(measurement, gram) {
        const perGram = Number(Math.round((gram / 100)+'e2')+'e-2');;

        switch(measurement) {
            case("ounce"):
                return Math.ceil(28 * perGram);
            case("cup"):
                return Math.ceil(340 * perGram);
            case("pound"):
                return Math.ceil(453 * perGram);
            case("tablespoon"):
                return Math.ceil(14 * perGram);
        }
    }

    function changeMeasure(measure) {
        props.setMeasure(measure);
    }

    return (
        <div className="flex flex-col justify-between">
            <h4 className="text-base font-semibold">Nutrients per {props.measure}:</h4>
            <p>Calories: {convertToGrams(props.measure, props.data.nutrients.calories)}</p>
            <p>Carbohydrates: {convertToGrams(props.measure, props.data.nutrients.carbohydrates)}</p>
            <p>Protein: {convertToGrams(props.measure, props.data.nutrients.protein)}</p>
            <p>Cholesterol: {convertToGrams(props.measure, props.data.nutrients.cholesterol)}</p>
            <p>Total Fat: {convertToGrams(props.measure, props.data.nutrients.total_fat)}</p>
            <p>Saturated Fats: {convertToGrams(props.measure, props.data.nutrients.total_saturated_fats)}</p>
            <p>Trans Fats: {convertToGrams(props.measure, props.data.nutrients.total_trans_fats)}</p>
            <div className="mt-1">
                <p className="text-sm font-semibold">Change measurement:</p>
                <select id="small" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option onClick={() => {changeMeasure("ounce")}} selected>Ounce</option>
                    <option onClick={() => {changeMeasure("tablespoon")}} value="tbsp">Tablespoon</option>
                    <option onClick={() => {changeMeasure("cup")}} value="cup">Cup</option>
                    <option onClick={() => {changeMeasure("pound")}} value="lb">Pound</option>
                </select>
            </div>
        </div>
    );
}

export default Nutrients;