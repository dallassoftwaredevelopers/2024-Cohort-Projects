import {useState} from 'react';
import Button from '../../ListPage/buttons/button';
import '../../ListPage/ListAddModal/ListAddModal.css'

function AddItemModal({updateFridge, onCloseModal}) {
    
    const [quantity, setQuantity] = useState()
    const [name, setName] = useState("")

    const addFridgeItem = (updateFridge) => {
        const newItem = {
            name: name,
            quantity: quantity
        }
        updateFridge(newItem)
        onCloseModal()
    }

    return ( 
    
    <>
    <div className="list-add-modal-content">
        <div className="add-list-header"> Add Item To Fridge</div>
        
        <div className="add-list-input">
        <div className="add-list-color-header">Item Name:</div>
            <input 
                type="text"
                name="item-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='list-input'
                placeholder='Enter Item Name'
                id="item-name"
            >
            </input>
            <div><hr className="horizontal-line"/></div>
        </div>

        

        <div className="add-list-input">

            <div className="add-list-color-header">Quantity:</div>
            
            <input 
                type="text"
                name="item-name"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className='list-input'
                placeholder='Enter Quantity'
                id="item-name"
            >
            </input>
            <div><hr className="horizontal-line"/></div>
            

        </div>

        
        <div className="done-button">
            <Button 
            imageUrl={"./images/list-images/Vectorcheck.png"} 
            onButtonClick={()=> addFridgeItem(updateFridge)} 
            buttonName={"Done"}
            />
        </div>
    </div>
    </> 
    
    );
}

export default AddItemModal;