import React from "react";
import './BackBtn.css'
// prop is onclick function from parent element
const BackBtn = ({ onBackButtonClick }) => {
    const handleClick = () => {
        if (onBackButtonClick) {
            onBackButtonClick(); // Call the onClick function if it exists
        }
    };
    return (
        <button className="back-btn" onClick={handleClick}>
            <img className="back-img" src="./images/recipes-icon/back-button.png" alt="back"></img>
        </button>
    )
}
export default BackBtn;