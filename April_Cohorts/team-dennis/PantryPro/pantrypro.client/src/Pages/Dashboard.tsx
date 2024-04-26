
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type PantryItem = {
  groceryItemType: object;
  id: number;
  name: string;
  quantity: number;
  calories: number;
  groceryItemTypeId: number;
};

const Dashboard = () => {
  const navigate = useNavigate();
  const url = "http://localhost:5206/GroceryItem";

  const [pantryList, setPantryList] = useState<Array<PantryItem>>([]);

  useEffect(() => {
    axios.get(url).then((json) => setPantryList(json.data));
  }, []);
console.log(pantryList);
  const displayItems = () => {
    return pantryList.map((item) => {
      return (
        <div key={item.id} className="item-dashboard">
          <span>{item.name}</span>
          <span>{item.groceryItemType.description}</span>
          <span>{item.quantity}</span>
        </div>
      );
    });
  };

  return (
    <div>
      <h1 className="title">Dashboard Page</h1>
      <div  className="dashboard-button-container">
        <h3 className="grid-item-one">Pantry List</h3>
        <button  className ="grid-item-two" type="button" onClick={() => navigate("/pantry")}>
          Add Item
        </button>

      </div>
      <div className="item-dashboard-container">
            <div className="dashboard-header">
              <h3 className = "list-item-one">Ingredient</h3>
              <h3 className = "list-item-two">Type</h3>
              <h3 className = "list-item-three">quantity</h3>
            </div>
        {pantryList.length == 0 ? (
          <Link to="/pantry">Add item from pantry</Link>
        ) : (
          displayItems()
        )}
      </div>
    </div>
  );
};

export default Dashboard;
