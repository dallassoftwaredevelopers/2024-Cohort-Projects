// import { useEffect, useState } from "react";
// import { IoCloseCircleOutline } from "react-icons/io5";
// import { GroceryItems } from "../mock_data/mockData";
// import { useNavigate } from "react-router-dom";

// //Fake Api Call with mock data
// const fakeData = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(GroceryItems);
//   }, 1000);
// });

// const Pantry = () => {
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState<string>("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [pantryItems, setPantryItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fakeData.then((data) => {
//       setPantryItems(data ?? []);
//       setIsLoading(false);
//     });
//   }, []);

//   const handleInputChange = (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       //setItemsOnHand((prevState) => [...prevState, selectedItem]);
//       setSearchTerm("");
//     }
//   };

//   const handleFilterListOnChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };

//   const incrementQuantity = (item) => {
//     item.quantity += 1;

//     const tempPantryItem = pantryItems.find(
//       (pantryItem) => pantryItem.id === item.id
//     );
//     tempPantryItem.quantity = item.quantity;

//     setPantryItems([...pantryItems]);
//   };

//   const decrementQuantity = (item) => {
//     if (item.quantity === 0) {
//       return;
//     }

//     item.quantity -= 1;

//     const tempPantryItem = pantryItems.find(
//       (pantryItem) => pantryItem.id === item.id
//     );
//     tempPantryItem.quantity = item.quantity;

//     setPantryItems([...pantryItems]);
//   };

//   //   const displayItems = itemsOnHand.map((item) => (
//   //     <div key={item.id} className="item-container">
//   //       <IoCloseCircleOutline className="close-icon" />
//   //       <img src={item.img} alt={item.item} />
//   //       <span>{item.item}</span>
//   //       <span>{item.description}</span>
//   //       <div className="modify-quantity-container">
//   //         <button onClick={() => decrementQuantity(item.id, item.quantity)}>
//   //           -
//   //         </button>
//   //         <span>{item.quantity}</span>
//   //         <button onClick={() => incrementQuantity(item.id, item.quantity)}>
//   //           +
//   //         </button>
//   //       </div>
//   //     </div>
//   //   ));

//   //   const displayFilteredList = filterList.map((item) => (
//   //     <div key={item.id} className="item-container">
//   //       <img src={item.img} alt={item.item} />
//   //       <span>{item.item}</span>
//   //       <span>{item.description}</span>
//   //       <div className="modify-quantity-container">
//   //         <button onClick={() => decrementQuantity(item.id, item.quantity)}>
//   //           -
//   //         </button>
//   //         <span>{item.quantity}</span>
//   //         <button onClick={() => incrementQuantity(item.id, item.quantity)}>
//   //           +
//   //         </button>
//   //       </div>
//   //     </div>
//   //   ));

//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }

//   return (
//     <div className="pantry-container">
//       <h1 className="title">Pantry</h1>
//       <div className="filter-search-add-container">
//         <select
//           className="dropdown-filter-items"
//           onChange={handleFilterListOnChange}
//         >
//           <option value="">Filter</option>
//           <option value="fruit">Fruits</option>
//           <option value="vegetable">Vegetables</option>
//           <option value="meat">Meats</option>
//         </select>
//         <input
//           className="search-bar"
//           type="text"
//           value={searchTerm}
//           onChange={handleInputChange}
//           onKeyDown={handleKeyDown}
//           placeholder="Search"
//         />
//         <button
//           type="button"
//           onClick={() => {
//             navigate("new");
//           }}
//         >
//           New Item
//         </button>
//       </div>
//       <div className="results-list">
//         {/* {matchedItems.map((item) => {
//           return (
//             <div className="search-results" key={item.id}>
//               {item.item}
//             </div>
//           );
//         })} */}
//       </div>
//       {pantryItems.length === 0 && <h2>No items on pantry</h2>}

//       <div className="item-list-container">
//         {pantryItems
//           .filter(
//             (item) =>
//               selectedCategory === "" || item.description === selectedCategory
//           )
//           .filter((item) =>
//             item.item.toLowerCase().startsWith(searchTerm.toLowerCase())
//           )
//           .map((item) => (
//             <div key={item.id} className="item-container">
//               <IoCloseCircleOutline
//                 className="close-icon"
//                 onClick={() => {
//                   alert("Are you sure you want to delete?");
//                 }}
//               />
//               <img src={item.img} alt={item.item} />
//               <span>{item.item}</span>
//               <span>{item.description}</span>
//               <div className="modify-quantity-container">
//                 <button onClick={() => decrementQuantity(item)}>-</button>
//                 <span>{item.quantity}</span>
//                 <button onClick={() => incrementQuantity(item)}>+</button>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Pantry;



