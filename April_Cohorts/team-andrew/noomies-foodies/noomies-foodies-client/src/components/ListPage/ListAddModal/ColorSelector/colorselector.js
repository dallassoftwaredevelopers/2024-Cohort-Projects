import './colorselector.css'
function ColorSelector({theColor, testing, onSelectorClick, selectBorder}) {

    const styles={
        backgroundColor: theColor,
        border: selectBorder ? "1px solid black" : "none"
    }

    return ( 
        <div className="color-selector" style={{backgroundColor: theColor,
            border: selectBorder ? "2px solid black" : "none"}} onClick={onSelectorClick}>
                {testing}
        </div>

     );
}

export default ColorSelector;