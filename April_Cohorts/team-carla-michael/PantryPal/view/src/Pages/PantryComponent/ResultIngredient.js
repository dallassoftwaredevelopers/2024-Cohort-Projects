import {useEffect} from 'react';

function Result({ingredient, handleClick}) {
    console.log(ingredient);
    return (
        <div onClick={() => handleClick(ingredient)} className="capitalize" >
            {Object.keys(ingredient)}
        </div>
    );
}

export default Result;