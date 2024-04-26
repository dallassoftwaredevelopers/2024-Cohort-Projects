'use client'
import useGetParts from "@/app/_hooks/part-api/useGetParts";
import useUpdatePart from "@/app/_hooks/part-api/useUpdatePart";
import { mockPartsData } from "@/app/utility/mockData/mockGetPartsApi"
import { partsAttributes } from "@/constants"
import { useEffect, useState } from "react";

export default function InventoryPage() {
    const [partsData, setPartsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const { data: partsDataFromApi, isLoading: partsDataLoading, error: partsDataError } = useGetParts(false);
    const {updatePart, error: updatePartsError, isLoading: updatePartsLaoding} = useUpdatePart();
    const inventoryPerPage = 6;
    const indexOfLastInventory = currentPage * inventoryPerPage;
    const indexOfFirstInventory = indexOfLastInventory - inventoryPerPage;
    const currentInventory = partsData.slice(indexOfFirstInventory, indexOfLastInventory);
    const totalPages = Math.ceil(partsData.length / inventoryPerPage);

    useEffect(() => {
        if (partsDataFromApi) {
            setPartsData(partsDataFromApi);
        }
    }, [partsDataFromApi]);
    
    const updateParts = async (part) => {
        try{
            await updatePart(part);
        } catch(error){
            console.error('error posting parts data to api : ', err)
        }
    }
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleQuantityChange = (e, partId, delta = 0) => {
        const value = Math.max(0, parseInt(e.target.parentElement.querySelector('input[name="quantity"]').value) + delta)
        setPartsData((prevData) => prevData.map((part) => part.id === partId ? { ...part, quantity: value } : part))
    }

    return (
        <div className="w-full border-2 border-black m-4 p-6 rounded-xl">
            <h1 className="text-center pb-6 font-bold">Inventory</h1>
            <table className="table text-center">
                <thead>
                    <tr className="text-black border-2 border-black">
                        {partsAttributes.map((item, index) => <th className="text-gray-500 uppercase" key={index}>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {currentInventory.map((part, index) => {
                        return (
                        <tr key={part.id}  className="border-gray-300 text-black font-medium">
                            <th>{indexOfFirstInventory + index + 1}</th>
                            <td>{part.name}</td>
                            <td>{part.threshold}</td>
                            <td>
                                <div className="inline-flex">
                                    <button onClick={ (e) => handleQuantityChange(e, part.id, 1) } className="flex justify-center items-center text-2xl w-8 h-8 border-2 border-black hover:bg-gray-200">+</button>
                                    <input type="number" name="quantity" value={part.quantity} onChange={ (e) => handleQuantityChange(e, part.id)} className="text-center w-10 h-8 bg-gray-300 border-y-2 border-black daisy-custom-input"/>
                                    <button onClick={ (e) => handleQuantityChange(e, part.id, -1) } className="flex justify-center items-center text-2xl w-8 h-8 border-2 border-black hover:bg-gray-200">-</button>
                                    <button name="update" className="h-8 ml-4 px-2 border-2 border-black hover:bg-gray-200" onClick={(e) => updateParts(part)}>Update</button>
                                </div>
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table>
            <div className="flex items-center justify-between mt-4">
                <div className="flex-1">
                    {currentPage > 1 && (<button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="mr-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg flex items-center justify-center">Previous</button>)}
                </div>
                <div className="flex flex-1 justify-end">
                    {currentPage < totalPages && (<button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="self-end ml-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg flex justify-center">Next</button>)}
                </div>
            </div>
        </div>
    )
}