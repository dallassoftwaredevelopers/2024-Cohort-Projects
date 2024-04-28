import Popup from 'reactjs-popup'
import './Modal.css'

function Modal ({open, nested, onClose, children}) {
    
    
    return (   
    
    <Popup
        open={open}
        modal
        closeOnDocumentClick
        onClose={onClose}
        nested={nested}
        className='modal'
    >
        
            <div className='children'>
            <button className="close-modal" onClick={onClose}>
                <img src="./images/list-images/close-icon.png"></img>
            </button>
            {children}
            </div>
        
        
    </Popup>
    
    );
}

export default Modal