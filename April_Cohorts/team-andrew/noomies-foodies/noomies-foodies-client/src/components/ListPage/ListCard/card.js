import { useState, useRef } from 'react';
import './card.css'
import ViewMoreModal from '../ViewMoreModal/viewmore';
import Popup from 'reactjs-popup';


export default function ListCard ({color, listId, listName, children, setLists, onEditClick, editText, onDeleteClick}) {
    const ref = useRef();
    const [openViewModal, setOpenViewModal] = useState(false);
    
    const openModal = () => {
        setOpenViewModal(true);
      };
    
      const closeModal = () => {
        ref.current.close();
      };

    return (
        <div className="card-container">
            <div className='list-content'>
                {color && <div className="list-color"  style={{backgroundColor: color}}></div>}
                <div className="list-text">{listName}</div>
            </div>
            <div className='list-button'>
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
