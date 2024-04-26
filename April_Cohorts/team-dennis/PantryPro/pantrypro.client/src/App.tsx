import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./Components/Sidebar";
import Pantry from "./Pages/Pantry";
import Dashboard from "./Pages/Dashboard";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./Components/Header/Header.css";
import PantryFormNew from "./Pages/PantryFormNew";

import PantryFormEdit from "./Pages/PantryFormEdit";



function App() {
  return (
    <Router>
      <Header title="" /> {/* Render the Header component */}
      <SideBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pantry" element={<Pantry />} />
        <Route path="/pantry/new" element={<PantryFormNew />} />
        <Route path="/pantry/:id" element={<PantryFormEdit />} />
 <Route path="/edit/:itemId" element={<PantryFormEdit />} />      
      </Routes>
      <Footer /> {/* Include the Footer component here */}
    </Router>
  );
}

export default App;
