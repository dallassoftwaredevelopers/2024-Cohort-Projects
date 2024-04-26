import React, { useEffect, useState } from "react";
import "./ShowRecipeItem.css";
import { useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function ShowRecipeItem() {
  const { id } = useParams();
  console.log(id);

  const [recipe, setRecipe] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch recipe details when the component mounts
    fetch(`/recipes/findById/${id}`) //`http://localhost:3001/recipes/findById/${id}`
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setRecipe(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]); // Re-fetch recipe details if recipeId changes

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!recipe) {
    return <div>Loading...</div>;
  }
  console.log(recipe.totalNutrients);
  return (
    <div className="recipe-item p-3">
      {/* create a go back button  */}
      <button
        className="go-back-button flex items-center gap-2 hover:text-green-600"
        onClick={() => window.history.back()}
      >
        <BsArrowLeft />
        Go Back
      </button>
      <h1 className="recipe-title">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <div className="recipe-description">
        <div className="flex justify-around">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Ingredients</th>
                <th className="px-4 py-2">Measurements</th>
              </tr>
            </thead>
            <tbody>
              {recipe.ingredients?.map((ingredient, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="border px-4 py-2 capitalize">{ingredient}</td>
                  <td className="border px-4 py-2">
                    {recipe.measurements[index]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <h3>Total Nutritional Facts of the recipe</h3>
            {recipe && recipe.totalNutrients && (
              <table className="table-auto">
                <thead>
                  <tr>
                    <td className="border px-4 py-2">
                      <strong className="mr-4"> Amount Per </strong>100g
                    </td>
                  </tr>
                  <tr>
                    <td className=" border px-4 py-2">
                      <strong className="mr-4">Calories </strong>{" "}
                      {recipe.totalNutrients.calories} kcal
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">
                      <strong className="mr-4">Protein </strong>{" "}
                      {recipe.totalNutrients.protein} g
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">
                      <strong className="mr-4">Cholesterol </strong>{" "}
                      {recipe.totalNutrients.cholesterol}mg
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">
                      <strong className="mr-4">Carbohydrates </strong>{" "}
                      {recipe.totalNutrients.carbohydrates}g
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">
                      <strong className="mr-4">Total_fat </strong>{" "}
                      {recipe.totalNutrients.total_fat}g
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">
                      <strong className="mr-4">Total_saturated_fats </strong>{" "}
                      {recipe.totalNutrients.total_saturated_fats}g
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">
                      <strong className="mr-4">Total_trans_fats </strong>{" "}
                      {recipe.totalNutrients.total_trans_fats}g
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">
                      <strong className="mr-4">
                        Total_monosaturated_fats{" "}
                      </strong>{" "}
                      {recipe.totalNutrients.total_monosaturated_fats}g
                    </td>
                  </tr>
                </thead>
              </table>
            )}
          </div>
        </div>

        <h3 className="recipe-instruction">Instructions:</h3>
        <ol>{recipe.instructions}</ol>

        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm my-4 px-4 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <a href={"https://pantry-pal.azurewebsites.net/pdf/recipe?ID=" + id}>Download PDF</a>
        </button>
      </div>
    </div>
  );
}

export default ShowRecipeItem;
