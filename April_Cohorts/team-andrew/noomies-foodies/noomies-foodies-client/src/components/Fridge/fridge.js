import FridgeCard from "./FridgeCard/fridgecard";
import AddItemModal from "./AddItemModal/additemmodal";
import Button from "../ListPage/buttons/button";
import Modal from "../ListPage/Modal/Modal";
import NoItems from "../ListPage/ListItemPage/NoItems/noitems";
import {useState} from 'react'
import ListAddModal from "../ListPage/ListAddModal/ListAddModal";

function Fridge() {

    const fridgeItems = [
        {
            id: 1,
            name: 'Apple',
            quantity: 3
        },
        {
            id: 2,
            name: 'Frozen Yogurt',
            quantity: 2
        },
        {
            id: 3,
            name: 'Loaf of Bread',
            quantity: 1
        }
    ]

    const [myFridge, setMyFridge] = useState(fridgeItems)

    const [openAddItem, setOpenAddItem] = useState(false)
    const closeAddItemModal = () => setOpenAddItem(false)

    const updateThisFridge = (newItem) => {
        setMyFridge(item => [...item, newItem])
    }


    //change id to id instead of i.name Also maybe in the FridgeItemCard component
    const deleteFridgeItem = (id) => {
        const remainingFridgeItems = myFridge.filter(i => id !== i.name)
        setMyFridge(remainingFridgeItems)
    }


    return (  
        <>
        <div className="list-page-container">
            <div className="list-add-btn-area">
            <Button imageUrl={"./images/list-images/plus-icon.png"} onButtonClick={()=>setOpenAddItem(o => !o)} buttonName={"Add Item"}/>
            <Modal open={openAddItem} onClose={closeAddItemModal} children={<AddItemModal updateFridge={updateThisFridge} onCloseModal={closeAddItemModal}/>} />
            </div>
            <div className="list-header-area">
                My Fridge
            </div>
            <div className="list-content-area">
                {
                    myFridge.length > 0 ?
                    myFridge.map( (item) => 
                    <FridgeCard key={item.id} itemName={item.name} itemQuantity={item.quantity} itemId={item.id} 
                    onEditClick={()=>console.log("edit quant")} editText={null} onDeleteClick={()=>deleteFridgeItem(item.name)}/>)
                    :
                    <NoItems text={"You haven't added any items yet!"}/>
                }

            </div>

        </div>

        {/* <FridgeCard itemName={"Apple Sauce"} itemQuantity={3}/>
        <FridgeCard itemName={"Apple sdasdas asd sSauce"} itemQuantity={3}/>
        <FridgeCard itemName={"Apple "} itemQuantity={4}/>
        <AddItemModal /> */}
        </>
    );
}

export default Fridge;