import { useParams } from "react-router-dom";
import '../ListPage.css'
import ListCard from "../ListCard/card";
import Button from "../buttons/button";
import AddProductModal from "../AddProductModal/addproductmodal";
import Modal from "../Modal/Modal";
import NoItems from "./NoItems/noitems";
import { useState } from "react";

function ListItemPage({listId, listName, onAddClick}) {

    let items = [{ list_id:1, item: "milk"}, { list_id:2, item:"butter"}, {list_id:3, item:"bread"}]

    let idItems = items.filter(i => listId === i.list_id)
    
    const [listItems, setListItems] = useState(idItems)

    const [openProdModal, setOpenProdModal] = useState(false)
    const closeProdModal = () => setOpenProdModal(false)

    const updateItems = (newItem) => {
        setListItems(items => [...items, newItem])
    }

    // need to change to item id instead of i.item
    const deleteItems = (id) => {
        const remainingItems = listItems.filter(i => id !== i.item)
        setListItems(remainingItems)
    } 

    
    return (
        <>
            <div className="list-add-btn-area">
                <Button imageUrl={"./images/list-images/plus-icon.png"} onButtonClick={()=>setOpenProdModal(o => !o)} buttonName={"Add Product"} width={"193px"}/>
                <Modal open={openProdModal} onClose={closeProdModal} 
                children={<AddProductModal onCloseModal={closeProdModal} listId={listId} updateItems={updateItems}/>} />
            </div>
            <div className="list-header-area">
                {listName}
            </div>
            <div className="list-content-area">
                
                {listItems.length > 0 ? 
                    listItems.map((obj) => <ListCard key={obj.item} listName={obj.item} onDeleteClick={()=>deleteItems(obj.item)}/>)
                    : 
                    <NoItems text={"You haven't added any products yet!"}/>
                }
                
            </div>
        
        </>
      );
}

export default ListItemPage;