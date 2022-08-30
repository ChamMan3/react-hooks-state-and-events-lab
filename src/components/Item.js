import React, {useState} from "react";


function Item({ name, category }) {
  const [cartItem, setItems] = useState(false)
  // items ? "Add to Cart" : "Remove From Cart"
  function handleAddClick(){
    setItems((cartItem) => !cartItem)
  }
  return (
    <li className={cartItem ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className={cartItem ? "remove" : "add"} 
        onClick={handleAddClick}
        >
        {cartItem ? "Remove from" : "Add to"} Cart 
      </button>
    </li>
  );
}

export default Item;
