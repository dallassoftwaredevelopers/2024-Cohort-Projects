import React, { createContext, useState ,useContext,useEffect} from 'react';
import { UserContext } from './UserContext';
import axios from "axios";

// Create a context
const PantryContext = createContext();

// Create a provider component
const PantryProvider = ({ children }) => {
  
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  


  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search logic here
    console.log("Search term:", searchTerm);
    // Update the recipes state with the search  results using axios
    if (!searchTerm) {
      alert("Please enter a search term");
      return;
    } else {
      const url = `/recipes/search/${searchTerm}`;
      //got to the recipe controller in backend to get the recipes based on user's search
      axios.get(url).then((response) => {
        console.log(
          "response from server",
          response.data.length,
          response.data
        );
        setRecipes(response.data);
        // console.log(recipes);
      });
    }
  };
  const handleCategory = (category) => {
   // setRecipes([]);
    const url = `/recipes/category/${category}`;
    axios.get(url).then((response) => {
      console.log("response from server", response.data.length, response.data);
      setRecipes(response.data);
      // console.log(recipes);
    });
  };


  // Define any functions or state you want to share with child components

  return (
    <PantryContext.Provider value={{handleSubmit,
    searchTerm,setSearchTerm,recipes,setRecipes,handleCategory}}>
      {children}
    </PantryContext.Provider>
  );
};

export { PantryContext, PantryProvider };
