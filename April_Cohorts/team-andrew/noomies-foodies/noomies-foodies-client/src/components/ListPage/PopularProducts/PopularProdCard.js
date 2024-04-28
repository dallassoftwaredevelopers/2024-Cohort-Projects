import './PopularProdCard.css'

function PopularProdCard({onAddClick, onDeleteClick, listId, productName}) {
    return (
        <>
        <div className="pop-item">
            <button onClick={onAddClick} className='add-button'><img src="./images/list-images/add-icon.png"></img></button>
            <div className="pop-text">{productName}</div>
        </div>
        <div><hr className="pop-horizontal-line"/></div>
        </>
      );
}

export default PopularProdCard;