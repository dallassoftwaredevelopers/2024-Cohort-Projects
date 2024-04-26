"use client";

import useGetAppointments from "../../_hooks/appointments-api/useGetAppointments";
import useGetServices from "../../_hooks/service-api/useGetServices";
import useGetParts from "../../_hooks/part-api/useGetParts";
// import { mockData } from "../../utility/mockData/mockGetAppointmentsApi";
import { timeSlots } from "../../../constants.js";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AdminPage() {
  const [currentPage, setCurrentPage] = useState(1);
  let date = new Date().toLocaleDateString();
  const formattedDate = date.split("/");

  let [month, day, year] = formattedDate;
  if (month.length === 1) {
    month = "0" + month;
  }
  if (day.length === 1) {
    day = "0" + day;
  }
  const dateWithNoHyphens = month + day + year;

  const { data, error, isLoading } = useGetAppointments(dateWithNoHyphens);

  let lowInventory = false;

  const {
    data: getAppointmentsData,
    error: getAppointmentsError,
    isLoading: getAppointmentsIsLoading,
  } = useGetAppointments(dateWithNoHyphens);
  const {
    data: getServicesData,
    isLoading: getServicesIsLoading,
    error: getServicesError,
  } = useGetServices();
  const {
    data: getPartsData,
    isLoading: getPartsIsLoading,
    error: getPartsError,
  } = useGetParts((lowInventory = false));

  if (getServicesIsLoading || getAppointmentsIsLoading || getPartsIsLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  const serviceName = (serviceId) => {
    for (let i = 0; i < getServicesData.length; i++) {
      if (getServicesData[i].id === serviceId) {
        return getServicesData[i].name;
      }
    }
    return null;
  };

  const partNameCollection = (serviceId) => {
    let result = "";
    for (let i = 0; i < getServicesData.length; i++) {
      if (getServicesData[i].id === serviceId) {
        for (let j = 0; j < getServicesData[i].partsNeeded.length; j++) {
          for (let k = 0; k < getPartsData.length; k++) {
            if (getServicesData[i].partsNeeded[j] === getPartsData[k].id) {
              result += getPartsData[k].name + ", ";
            }
          }
        }
      }
    }
    return result.slice(0, -2);
  };

  const findLowInventoryParts = (partsInventory) => {
    let lowInventoryParts = [];
    for (let i = 0; i < partsInventory.length; i++) {
      let lowInventoryPart = { name: "", quantity: 0 };
      if (partsInventory[i].quantity < partsInventory[i].threshold) {
        lowInventoryPart.name = partsInventory[i].name;
        lowInventoryPart.quantity = partsInventory[i].quantity;
        lowInventoryParts.push(lowInventoryPart);
      }
    }
    return lowInventoryParts;
  };

  const rowsPerPage = 10;

  let indexOfLastRow = currentPage * rowsPerPage;
  let indexOfFirstRow = indexOfLastRow - rowsPerPage;
  let displayedRows =
    getAppointmentsData.length >= rowsPerPage
      ? getAppointmentsData.slice(indexOfFirstRow, indexOfLastRow)
      : getAppointmentsData;

  const totalPages = Math.ceil(getAppointmentsData.length / rowsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  let lowInventoryList = findLowInventoryParts(getPartsData);

  return (
    <>
      <h1 className="text-black text-center pb-4 font-bold">
        Today's Appointments
      </h1>
      <table className=" text-black w-full min-w-full divide-y divide-gray-200">
        <thead className="text-black w-full max-w-full border-2 border-black rounded-3xl bg-gray-50">
          <tr className="mb-7">
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Service</th>
            <th>Parts Needed</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 mt-4 overflow-scroll max-h-max">
          {displayedRows.map((app, index) => {
            return (
              <tr
                className="hover"
                key={uuidv4()}>
                <th
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  key={uuidv4()}>
                  {indexOfFirstRow + index + 1}
                </th>
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  key={uuidv4()}>
                  {app.name}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  key={uuidv4()}>
                  {timeSlots[app.time]}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  key={uuidv4()}>
                  {serviceName(app.serviceId)}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  key={uuidv4()}>
                  {partNameCollection(app.serviceId)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {totalPages > 1 && (
        <div className="flex text-blue-500 items-center justify-between pt-5">
          {!(currentPage === 1) ? (
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white mr-20">
              Previous
            </button>
          ) : (
            <div className="flex-1"></div>
          )}
          {!(currentPage === totalPages) ? (
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-white bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ml-20">
              Next
            </button>
          ) : (
            <div className="flex-1"></div>
          )}
        </div>
      )}

      <h1 className="text-black text-center pb-10 font-bold">
        Low Inventory Summary
      </h1>
      <table className=" text-black w-full min-w-full divide-y divide-gray-200">
        <thead className="text-black w-full max-w-full border-2 border-black rounded-3xl bg-gray-50">
          <tr className="mb-7">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantity
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 mt-4 overflow-scroll max-h-max">
          {lowInventoryList.map((item, index) => {
            return (
              <tr
                className="hover"
                key={uuidv4()}>
                <th
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  key={uuidv4()}>
                  {index + 1}
                </th>
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  key={uuidv4()}>
                  {item.name}
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  key={uuidv4()}>
                  {item.quantity}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
