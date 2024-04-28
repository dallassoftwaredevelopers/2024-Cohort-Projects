import Button from '../buttons/button';
import PopularProdCard from '../PopularProducts/PopularProdCard';
import './addproductmodal.css'
import PopularFridgeButton from './PopularFridgeButton/popularfridgebtn';
import { useState } from 'react';

function AddProductModal({listId, updateItems, onCloseModal}) {

    const [itemName, setItemName] = useState("")
    const [selectedButton, setSelectedButton] = useState("Popular")

    function popButtonClick (selection){
        setSelectedButton(selection)
    }

    const addNewItem = (updateItems) => {
        const newItem = { id: listId, item: itemName}
        {newItem.item && updateItems(newItem)}
        {newItem.item && onCloseModal()}
    }

    const addPopItem = (updateItems, popItemName) => {
        const newPopItem = {id: listId, item: popItemName}
        {newPopItem.item && updateItems(newPopItem)}
        {newPopItem.item && onCloseModal()}
    }

    const popList = ["Whole Grain Bread", "2% Milk", "Diet Coke", "Chocolate", "Ice Cream"]
 
    const [popProd, setPopProd] = useState(popList)

    return ( 
        <div className="prodmodal-container">

            <div className="prodmodal-top-bar">
                <input 
                    type="text"
                    name="item-name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    className='item-input'
                    placeholder='Enter Item Name'
                    id="item-name"
                >
                </input>
                <div className="add-item-button">
                    <Button 
                    imageUrl={"./images/list-images/plus-icon.png"}
                    onButtonClick={() =>addNewItem(updateItems)} 
                    buttonName={"Add Item"} width={"140px"}/>
                </div>
            </div>
            
            <div className="prodmodal-button-area">
                    <PopularFridgeButton buttonName={"Popular"} 
                    backgroundColor={selectedButton === "Popular" ? "#309F48" : "#FFFFFF"}
                    fontColor={selectedButton === "Popular" ? "#FFFFFF" : "#000000"}
                    border={selectedButton === "Popular" ? "none" : "1px solid #309F48"}
                    onButtonClick={()=>popButtonClick("Popular")}
                    />
                    <PopularFridgeButton buttonName={"From My Fridge"} 
                    backgroundColor={selectedButton === "Fridge" ? "#309F48" : "#FFFFFF"}
                    fontColor={selectedButton === "Fridge" ? "#FFFFFF" : "#000000"}
                    border={selectedButton === "Fridge" ? "none" : "1px solid #309F48"}
                    onButtonClick={()=>popButtonClick("Fridge")}
                    />
            </div>

            <div className="prodmodal-content-area">
                {selectedButton === "Popular" ? 
                
                popProd.map( (popItem) => <PopularProdCard productName={popItem} onAddClick={() =>addPopItem(updateItems, popItem)}/>)
                
                : "No Items In Fridge!"}
            </div>

        </div>
     );
}

export default AddProductModal;