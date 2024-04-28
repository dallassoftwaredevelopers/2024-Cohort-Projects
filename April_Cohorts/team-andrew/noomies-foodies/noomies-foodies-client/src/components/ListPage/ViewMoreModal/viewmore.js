import './viewmore.css'

function ViewMoreModal ({onDeleteClick, onEditClick, closeModal, editText}) {


    return (
          
        <div className="modal-container">
            <button className="modal-close" onClick={closeModal}>
                <img src="./images/list-images/view-close.png"></img>
            </button>
            <div className="modal-content">
                {editText && <button  className="modal-text" onClick={onEditClick} >{editText}</button>}
                <div><hr className="horizontal-line"/></div>
                <button  className="delete-button" onClick={onDeleteClick} >Delete</button>
            </div> 
        </div>
        
    );
}

export default ViewMoreModal;