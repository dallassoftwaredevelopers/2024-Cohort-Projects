import {useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";
import { MealPrepModal } from "../Modals/MealPrepModal";
import { IngredientModal } from '../Modals/IngredientModal';

function SearchRecipe({profile}) {
    const [recipes, setRecipes] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    const [isOpenIng, setIsOpenIng] = useState(false);
    const [IngredientsNeeded, setIngredientneeded] = useState([]);
    const [recipeSelected, setRecipeSelected] = useState("");

    const openModal = (recipeId, recipe_name) => {
      setIsOpen(true);
      console.log(recipe_name, "RIGHTHERE");
      setModalData({
        recipeId: recipeId,
        recipe_name: recipe_name,
        fridgeID: profile.fridgeID._id,
      });
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };

    const openModalIng = (id, name, image) => {
        setRecipeSelected(id);
        setIsOpenIng(true);
        setModalData({
          recipeId: id,
          recipe_name: name,
          image,
          image,
        });
      };

    const closeModalIng = () => {
        setIngredientneeded("");
        setIsOpenIng(false);
    };

    const truncateString = (str, num) => {
        if (str.length > num) {
          return str.slice(0, num) + "...";
        } else {
          return str;
        }
    };

    useEffect(() => {
        async function search() {
            const url = "fridge/recipe/search/?fridgeID=" + profile.fridgeID._id;
    
            const data = await fetch(url).then(async (res) => {
                return await res.json().catch((error) => {console.error(error)});
            }).catch((error) => {
                console.error(error);
            });
            setRecipes(data.incomplete);
            return data.incomplete;
        }

        search();
    }, []);

    function Missing(props) {
        let missing = props.recipe.ingredients.length - props.recipe.counter;
        return (<span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
            Missing {missing} ingredients</span>);
    }

    return (
        <div className="">
            <h1 className="text-2xl font-bold my-5 mr-5">Recipes based off your ingredients:</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {recipes.map((recipe, index) => (
                <div
                    key={index}
                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-green-800 dark:border-gray-700 animate-fade-down animate-delay-100"
                  >
                    <NavLink to={`/recipes/${recipe._id}`}>
                      <img src={recipe.image} alt="" className="rounded-t-lg" />
                    </NavLink>
                    <div className="text-start flex flex-col gap-y-3 items-start p-5">
                      <h3 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white truncate">
                        {truncateString(recipe.name, 20)}
                      </h3>
      
                      <button
                        className="text-indigo-300 hover:text-indigo-800"
                        onClick={() =>
                          openModalIng(recipe._id, recipe.name, recipe.image)
                        }
                      >
                        View Ingredients
                      </button>
                      <div className="flex space-x-2 justify-start">
                        {/* Tags */}
                        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
                          {recipe.category}
                        </span>
                        {/* <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
                        TAG 2
                      </span> */}
                      </div>
                    </div>
                    <button
                      className="bg-black px-3 py-2 text-white rounded-sm font-semibold w-full"
                      onClick={() => openModal(recipe._id, recipe.name)}
                    >
                      Add to Meal Plan
                    </button>
                  </div>
                ))}
            </div>
            <MealPrepModal
                     isOpen={isOpen}
                     onClose={closeModal}
                     modalData={modalData}
                    />
            <IngredientModal
            isOpen={isOpenIng}
            onClose={closeModalIng}
            IngredientsNeeded={IngredientsNeeded}
            modalData={modalData}
          />
        </div>
    );
}

export default SearchRecipe;