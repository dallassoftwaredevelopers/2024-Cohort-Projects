import React from 'react'

export const IngredientModal = ({ isOpen, onClose,IngredientsNeeded,modalData }) => {
    
   // console.log(IngredientsNeeded);
    if (!isOpen) return null;
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen">
    <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
      <div className="relative bg-white rounded-lg shadow-lg p-8">
        <button className="absolute top-0 right-0 m-4 text-gray-700 hover:text-gray-900" onClick={onClose}><span className='text-xl text-red-500'>X</span></button>
        <div className="modal-content">
          <h2 className="text-xl font-bold mb-4"> <span className="text-green-600">"{modalData.recipe_name}"</span></h2>
       
      {/* <h2 className="text-2xl font-bold mb-6">Ingredients I Need to make this recipe</h2> */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="w-80">
            <img src={modalData.image}  alt="" />
        </div>
        {/* Ingredients I Need cards */}
        <div className="bg-gray-200 p-4 rounded-lg space-y-2">
      
          <div className="flex justify-around gap-5">
              <div>
                <h3 className="text-lg font-semibold">What I have</h3>
                  {IngredientsNeeded[0]?.map((name, index) =>(
                    <div key={index} className="flex justify-between items-center mb-1">
                        <p>{name}</p>
                    </div>
                    ))}
              </div>
              <div>
                <h3 className="text-lg font-semibold">What I need</h3>
                  {IngredientsNeeded[1]?.map((name, index) =>(
                    <div key={index} className="flex justify-between items-center mb-1">
                        <p>{name}</p>
                  
                    </div>))}
              </div>
          </div>
          
        </div>
      </div>
       
          </div>
        </div>
      </div>
    </div>
  )
}
