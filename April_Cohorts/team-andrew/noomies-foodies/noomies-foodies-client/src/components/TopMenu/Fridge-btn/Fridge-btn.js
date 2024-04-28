import React from 'react'; // Import React
import "./Fridge-btn.css";

const Fridge = () => {
    return (
        <a className="fridge-btn" href="#" >
            <img className="fridge-pic" src="/images/top-menu-icons/fridge.png"></img>
            <p>My Fridge</p>
        </a>
    );

};

export default Fridge;