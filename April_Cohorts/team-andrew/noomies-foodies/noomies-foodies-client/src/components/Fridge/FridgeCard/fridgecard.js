import { useState, useRef } from 'react';
import './fridgecard.css';
import ViewMoreModal from '../../ListPage/ViewMoreModal/viewmore';
import Popup from 'reactjs-popup';


export default function FridgeCard ({itemName, itemId, children, onEditClick, itemQuantity, editText, onDeleteClick}) {
    const ref = useRef();
    
    const closeModal = () => {
    ref.current.close();
    };

    return (
        <div className="card-container">
            <div className='fridge-content'>
                <div className="fridge-text">{itemName}</div>
                <div className="fridge-color"  style={{backgroundColor: "#FFFFFF"}}>
                    <span className='quant-text'>{itemQuantity}</span>
                </div>
            </div>
            <div className='fridge-button'>
                <Popup
                ref={ref}
                trigger={
                <button>
                <img src="./images/list-images/pepicons-pop_dots-y.png" ></img>
                </button>
                }
                closeOnDocumentClick={true}
                position={'bottom right'}
                arrow={false}
                offsetY={-35}
                >
                    <ViewMoreModal closeModal={closeModal} onEditClick={onEditClick} editText={editText} onDeleteClick={onDeleteClick}/>
                </Popup>
            </div> 
            
            
                      
        </div>
      );
};