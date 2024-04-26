import { set } from 'mongoose';
import React, { createContext, useState,useEffect } from 'react';

// Create a context
const UserContext = createContext();

// Create a provider component
const UserProvider = ({ children }) => {
    const [profile, setProfile] = useState(false)
    const [fridgeID ,setFridgeID] = useState('');
    const [pantryList,setPantryList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [reloadPantry, setReloadPantry] = useState(false);
     console.log("reloadpantry",reloadPantry);
       
    useEffect(() => {
        async function fetchUserProfile() {
          const url = "/user/profile";
          await fetch(url).then(async (res) => {
            const json = await res.json();
            setProfile(json);
            setFridgeID(json.fridgeID._id);
            return json.fridgeID._id;           
          }).then(async(fridgeID)=>{
            const list = await fetchPantry(fridgeID);
          setPantryList(list);
          }).catch((error) => {
            console.error(error);
          });
        }
        fetchUserProfile();
      }, []);
      const fetchPantry = async (fridgeID) => {
        const endpoint = "/fridge/ingredient?fridgeID=" + fridgeID;      
        const res = await fetch(endpoint).catch((error) => {
          console.error(error);
        });
        const data = await res.json();
        const list = data.map((item) => item.name);  
        return list
      }; 
      useEffect(() => {
        const List = fetchPantry();
        console.log("pantry list reloaded after adding to pantry",pantryList);
        setPantryList(List);
      },[reloadPantry]);


      useEffect(() => {
        const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            console.log(data.categories);
            setCategories(data.categories);
          });
      }, []);
        

  // Define any functions or state you want to share with child components

  return (
    <UserContext.Provider value={{ profile,fridgeID,pantryList
                                     ,categories,setCategories ,setReloadPantry ,reloadPantry    }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };




