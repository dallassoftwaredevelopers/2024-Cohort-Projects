import React from 'react'; // Import React
import "./RecipeBtn.css"

const RecipeBtn = ({ onClick, imgUrl, content}) => {
    return (
        <button className="btn-container" onClick={onClick} >
            <img className="btn-pic" src={imgUrl}></img>
            <p className='btn-text'>{content}</p>
        </button>
    );

};

export default RecipeBtn;