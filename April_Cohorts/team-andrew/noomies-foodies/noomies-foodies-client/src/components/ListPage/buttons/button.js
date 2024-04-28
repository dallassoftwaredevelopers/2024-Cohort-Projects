import "./button.css"

export default function Button({imageUrl, onButtonClick, buttonName, width}) {
    
    return (  
        <button onClick={onButtonClick} className="button-style" style={{width: width}}>
            <span>
                {imageUrl && <img src={imageUrl} alt="button icon" className="button-image"></img>}
                <span className="button-text">{buttonName}</span>
            </span>
        </button>
    );
}

