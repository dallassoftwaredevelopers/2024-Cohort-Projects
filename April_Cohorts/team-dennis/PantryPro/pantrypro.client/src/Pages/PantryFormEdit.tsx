import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"; // Assuming you're using React Router v6
import "./PantryForm.css";

const PantryForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // State to store form data
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGroceryItemType, setSelectedGroceryItemType] = useState(
    {} as any
  );
  const [groceryItemTypes, setGroceryItemTypes] = useState([] as any[]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    weight: 0,
    groceryItemTypeId: -1,
    carbs: 0,
    calories: 0,
    protein: 0,
    fat: 0,
  });

  useEffect(() => {
    // Fetch data from the server using axios
    let tempGroceryItemTypes = [];
    axios
      .get("http://localhost:5206/GroceryItemType")
      .then((response) => {
        setGroceryItemTypes(response.data);
        tempGroceryItemTypes = response.data;
        return axios.get(`http://localhost:5206/GroceryItem/${id}`);
      })
      .then((response) => {
        setFormData(response.data);
        setSelectedGroceryItemType(
          tempGroceryItemTypes.find(
            (item) => item.id === response.data.groceryItemTypeId
          ) || ({} as any)
        );
        setIsLoading(false);
      });
  }, [id]);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const tempFormData = { ...formData, [name]: value };
    setFormData(tempFormData);
    if (name === "groceryItemTypeId") {
      setSelectedGroceryItemType(
        groceryItemTypes.find((item) => item.id === parseInt(value)) ||
          ({} as any)
      );
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Perform any necessary actions, such as sending data to a server

    axios.put(`http://localhost:5206/GroceryItem/${id}`, formData).then(() => {
      navigate("/pantry");
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleCancel = () => {
    // Navigate to previous page
    navigate(-1);
  };

  return (
    <div>
      <h1>Pantry Edit Item</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className="form-control"
          />
        </label>
        <br />
        <label>
          Weight:
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Grocery Item Type:
          <select
            name="groceryItemTypeId"
            onChange={handleInputChange}
            value={selectedGroceryItemType.id}
          >
            <option value={-1}>Select grocery item type...</option>
            {groceryItemTypes.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.description}
                </option>
              );
            })}
          </select>
        </label>
        <br />
        <label>
          Carbs:
          <input
            type="number"
            name="carbs"
            value={formData.carbs}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Calories:
          <input
            type="number"
            name="calories"
            value={formData.calories}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Protein:
          <input
            type="number"
            name="protein"
            value={formData.protein}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Fat:
          <input
            type="number"
            name="fat"
            value={formData.fat}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default PantryForm;
