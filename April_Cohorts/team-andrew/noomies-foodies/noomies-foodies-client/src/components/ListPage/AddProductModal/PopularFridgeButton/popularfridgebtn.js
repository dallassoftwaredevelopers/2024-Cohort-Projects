import './popularfridgebtn.css'

function PopularFridgeButton({onButtonClick, buttonName, fontColor, border, width,backgroundColor}) {
    
    
    return ( 
        <button onClick={onButtonClick} className="pop-fridge-button" 
        style={{width: width, backgroundColor: backgroundColor,
                border: border}}
        >
            <span>
                <span style={{color: fontColor}}className="pop-btn-text">{buttonName}</span>
            </span>
        </button>   
     );
}

export default PopularFridgeButton;