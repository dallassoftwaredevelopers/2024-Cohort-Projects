import "./App.css";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Pantry from "./Pages/Pantry";
import Navbar from "./Pages/Components/Navbar";
import ShowRecipeItem from "./Pages/Recipes/ShowRecipeItem";
import Meal from "./Pages/Meal.js";

import MealPrep from "./Pages/MealPrep.js";
import SearchIngredient from "./Pages/SearchIngredient.js";
import SearchRecipe from "./Pages/SearchRecipe.js";
import {useEffect, useState} from "react";
import { PantryProvider } from "./Pages/context/PantryContext.js";
// import ShowRecipeItem from "./Pages/ShowRecipeItem";

function App() {
  const [profile, setProfile] = useState(false);

  useEffect(() => {
    async function fetchUserProfile() {
      const url = "/user/profile";
      await fetch(url).then(async (res) => {
        const json = await res.json();
        setProfile(json);
      }).catch((error) => {
        console.error(error);
      });
    }

    fetchUserProfile();
  }, []);

  //Normal routes will be inaccessible until user logs in.
  //If user is already logged in, sends them to dashboard.
  function Protected() {
    if (profile) {
      return (
      <Routes>
        <Route
          path="/"
          element={
            <PantryProvider>
            <Layout>
              <Dashboard profile={profile}/>
            </Layout>
            </PantryProvider>
          }
        />
        {/*Login/Register route will be here presumably.*/}
        <Route
          path="/dashboard"
          element={
            <PantryProvider>
            <Layout>
              <Dashboard profile={profile}/>
            </Layout>
            </PantryProvider>
          }
        />
        <Route
          path="/pantry"
          element={
            <Layout>
              <Pantry profile={profile}/>
            </Layout>
          }
        />
        <Route
          path="/recipes/:id"
          element={
            <Layout>
              <ShowRecipeItem profile={profile} />
            </Layout>
          }
        />
        <Route
          path="/meals"
          element={
            <Layout>
              <Meal profile={profile}/>
            </Layout>
          }
        />
        <Route
          path="/mealPrep"
          element={
            <Layout>
              <MealPrep profile={profile}/>
            </Layout>
          }
        />
        <Route 
          path="/ingredient/search"
          element={
            <Layout>
              <SearchIngredient profile={profile}/>
            </Layout>
          }
        />
        <Route 
          path="/recipe/search"
          element={
            <Layout>
              <SearchRecipe profile={profile} />
            </Layout>
          }
        />
      </Routes>
      );
    } else {
      return (
      <Routes>
        {/*Login/Register Route will be here.*/}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />}/>
      </Routes>
      );
    }
  }

  return (
    <Router>
      <Protected />
    </Router>
  );
}

function Layout({ children }) {
  return (
    <>
      {<Navbar  />}
      <div className="flex">
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
}

export default App;