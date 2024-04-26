import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PantryForm.css";
import { useNavigate } from "react-router-dom";

const PantryForm: React.FC = () => {
  const navigate = useNavigate();
  // State to store form data
  const [isLoading, setIsLoading] = useState(true);
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
    axios.get("http://localhost:5206/GroceryItemType").then((response) => {
      setIsLoading(false);
      setGroceryItemTypes(response.data);
    });
  }, []);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const tempFormData = { ...formData, [name]: value };
    setFormData(tempFormData);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check if any required fields are empty
    if (
      !formData.name ||
      !formData.description ||
      formData.weight <= 0 ||
      formData.groceryItemTypeId === -1
    ) {
      alert("Please fill in all required fields.");
      return; // Stop form submission if any required fields are empty
    }

    try {
      // Perform any necessary actions, such as sending data to a server
      console.log("Form submitted:", formData);
      //Reset form fields
      setFormData({
        name: "",
        description: "",
        weight: 0,
        groceryItemTypeId: 0,
        carbs: 0,
        calories: 0,
        protein: 0,
        fat: 0,
      });
      await axios.post("http://localhost:5206/GroceryItem", formData);
      navigate("/pantry");
    } catch (error) {
      // Handle any errors that occur during the submission process
      console.error("Error submitting form:", error);
      // Optionally, display an error message to the user
      alert("Failed to submit form. Please try again.");
    }
  };
  // Handle cancel/back button click
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Pantry New Item</h1>
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
          <select name="groceryItemTypeId" onChange={handleInputChange}>
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
