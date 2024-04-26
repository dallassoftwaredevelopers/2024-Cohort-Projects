import React, { useEffect, useState } from 'react'

export const GrocerryList = ({isOpen,onClose,meals,fridgeID}) => {
    const [pantry,setPantry] = useState([]);
    const[state,setState] = useState(false);
   
    useEffect(() =>{
        const fetchPantry = async () => {
            const endpoint = "/fridge/ingredient?fridgeID=" + fridgeID;
      
            const res = await fetch(endpoint).catch((error) => {
              console.error(error);
            });
            const data = await res.json();
            setPantry(data);
        }
        fetchPantry();
    },[state]);
    if (!isOpen) return null;
    let list =[];
    meals.map((meal) => {
        list.push(meal.ingredients);});
        list =[].concat(...list)
        console.log(list.length);
    const uniqueList = [...new Set(list)];
    const pantryItems = pantry.filter(item => (item.name));
    list = uniqueList.filter(item => !pantryItems.some(pantryItem => pantryItem.name === item));
    list.sort();
    console.log(list);
    const addToPantry = async (item) => {
        console.log("item clicked",item);

        if(item){
            const endpoint = `/fridge/ingredient/query?name=${item}&fridgeID=${fridgeID}`;

        const res = await fetch(endpoint,{fridgeID:fridgeID}).catch((error) => {
          console.error(error);
         });
         const data = res.data;
        console.log(data);
        setState(!state);
        }
        

      //setPantry(data);
    }


    

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
  <div className="relative w-auto max-w-full mx-auto my-6">
  <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
    {/* Modal content */}
    <div className="relative flex flex-col bg-white border-2 border-gray-200 shadow-md rounded-lg">
      {/* Modal header */}
      <div className="px-6 py-4 bg-gray-100 border-b border-gray-200 rounded-t-lg">
        <h3 className="text-lg font-semibold text-gray-800">Pantry Items & Grocery List</h3>
      </div>
        <div className="p-6  flex ">
          {/* Modal body */}
          <div className="p-6  ">
            <h3 className='font-bold'>Pantry</h3>
            <ul className=' grid grid-cols-3'>
            {/* Pantry Items */}
         
                {/* First column */}
                <div>
                {pantry.slice(0, Math.ceil(pantry.length / 3)).map((item, index) => (
                    <p key={index} className="text-gray-700" onClick={()=>addToPantry(item)}>{item.name}</p>
                ))}
                </div>
                {/* Second column */}
                <div>
                {pantry.slice(Math.ceil(pantry.length / 3), Math.ceil((2 * pantry.length) / 3)).map((item, index) => (
                    <p key={index} className="text-gray-700">{item.name}</p>
                ))}
                </div>
                {/* Third column */}
               
                <div>
                {pantry.slice(Math.ceil((2 * pantry.length) / 3)).map((item, index) => (
                    <p key={index} className="text-gray-700">{item.name}</p>
                ))}
                </div>
             

            </ul>            
          </div>
          <div className="p-6  ">
          <h3 className='font-bold'>Grocery list</h3>
          <ul className=' grid grid-cols-4'>
            {/* Pantry Items */}
         
                {/* First column */}
                <div>
                {list.slice(0, Math.ceil(list.length / 4)).map((item, index) => (
                    <p key={index} className="text-gray-700 cursor-pointer"   title="Click to add to Pantry"onClick={()=>addToPantry(item) }>{item}</p>
                ))}
                </div>
                {/* Second column */}
                <div>
                {list.slice(Math.ceil(list.length / 4), Math.ceil((2 * list.length) / 4)).map((item, index) => (
                    <p key={index} className="text-gray-700 cursor-pointer"  title="Click to add to Pantry" onClick={()=>addToPantry(item)}>{item}</p>
                ))}
                </div>
                {/* Third column */}
                <div>
                {list.slice(Math.ceil((2 * list.length) / 4), Math.ceil((3 * list.length) / 4)).map((item, index) => (
                    <p key={index} className="text-gray-700 cursor-pointer"   title="Click to add to Pantry"onClick={()=>addToPantry(item)}>{item}</p>
                ))}
                </div>
                {/* Fourth column */}
                <div>
                {list.slice(Math.ceil((3 * list.length) / 4)).map((item, index) => (
                    <p key={index} className="text-gray-700 cursor-pointer"   title="Click to add to Pantry"onClick={()=>addToPantry(item)}>{item}</p>
                ))}
                </div>
             

            </ul> 

          </div>
        </div>
         
 
      
      {/* Modal footer */}
      <div className="flex justify-between px-6 py-4 bg-gray-100 border-t border-gray-200 rounded-b-lg">
        <button className="text-lg text-gray-600 hover:text-gray-900">Print</button>
        <button
          className="text-lg text-gray-600 hover:text-gray-900 cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div>
  )
}
export default GrocerryList;