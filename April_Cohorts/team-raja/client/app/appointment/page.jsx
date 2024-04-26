"use client";

import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { timeSlots, statesList } from "@/constants";
import { useRouter } from "next/navigation";
import useGetDayTimeSlots from "../_hooks/timeslot-api/useGetDayTimeSlots";
import useGetServices from "../_hooks/service-api/useGetServices";
import usePostAppointment from "../_hooks/appointments-api/usePostAppointment";

export default function AppointmentPage() {
  // const [serviceList, setServiceList] = useState(mockServicesData);
  // const [timeSlotsList, setTimeSlotsList] = useState(mockTimeSlotsData);

  const [startDate, setStartDate] = useState(new Date().toLocaleDateString());
  const dateWithNoHyphens = formatDate(startDate);

  const { data: serviceList, error: serviceListError } = useGetServices();
  const { data: timeSlotsList, error: timeSlotsListError } =
    useGetDayTimeSlots(dateWithNoHyphens);
  const [service, setService] = useState("");
  const [appointment, setAppointment] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [apt, setApt] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();
  const {
    postAppointment,
    error: appointmentPostError,
    isLoading: appointmentPostLoading,
  } = usePostAppointment();

  // const timeSlotData = useGetDayTimeSlots(startDate);

  // useEffect(() => {
  //   // console.log("timeslots", timeSlotData.data);
  //   setTimeSlotsList(timeSlotData.data);
  // }, [timeSlotData.data]);

  const serviceInputHandler = (e) => {
    setService(e.target.value);
  };

  const appointmentInputHandler = (e) => {
    setAppointment(e.target.value);
  };

  const firstNameInputHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameInputHandler = (e) => {
    setLastName(e.target.value);
  };

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneInputHandler = (e) => {
    let value = e.target.value;
    if (/\D/.test(value)) {
      alert("Please only enter numbers for phone number");
      e.target.value = value.replace(/\D/g, "");
    }
    setPhone(e.target.value);
  };

  const streetInputHandler = (e) => {
    setStreet(e.target.value);
  };

  const aptInputHandler = (e) => {
    setApt(e.target.value);
  };

  const stateInputHandler = (e) => {
    setState(e.target.value);
  };

  const cityInputHandler = (e) => {
    setCity(e.target.value);
  };

  const zipInputHandler = (e) => {
    let value = e.target.value;
    if (/\D/.test(value)) {
      alert("Please only enter numbers for zip code");
      e.target.value = value.replace(/\D/g, "");
    }
    setZip(e.target.value);
  };

  const bookAppointment = async () => {
    if (
      !service ||
      !startDate ||
      !appointment ||
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !street ||
      !state ||
      !city ||
      !zip
    ) {
      alert("Please fill out all fields");
      return;
    }

    if (zip.length !== 5) {
      alert("Please enter a valid zip code");
      return;
    }

    if (phone.length !== 10) {
      alert("Please enter a valid phone number");
      return;
    }

    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };

    if (!validateEmail(email)) {
      alert("Please enter a valid email");
      return;
    }

    const timeSlotKey = Object.keys(timeSlots).find(
      (timeSlotKey) => timeSlots[timeSlotKey] === appointment
    );
    const selectedService = serviceList.find((item) => item.name === service);
    const formattedDate = startDate.split("/");
    let [month, day, year] = formattedDate;
    if (month.length === 1) {
      month = "0" + month;
    }
    if (day.length === 1) {
      day = "0" + day;
    }
    const dateWithNoHyphens = month + day + year;

    const data = {
      appointmentTime: { date: dateWithNoHyphens, timeSlot: timeSlotKey },
      customerInfo: {
        address: street + " " + apt,
        name: firstName + " " + lastName,
        phoneNumber: phone,
        email: email,
        serviceId: selectedService.id,
      },
    };

    try {
      const response = await postAppointment(data);

      //send response data to confirmation page as url param
      const params = new URLSearchParams({
        appointment: JSON.stringify(response),
      });
      // console.log("response", response);
      router.push(`/appointmentconfirmed?${params}`);
    } catch (error) {
      console.log("error post appointment");
    }
  };

  return (
    <div>
      {showAlert && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-info">
            <span>Please enter correct zip code</span>
          </div>
        </div>
      )}
      <div className="flex flex-row min-h-screen w-full">
        <form className="flex-1 pr-2 grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-1 p-40">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <select
              className="select select-bordered select-lg w-full"
              onChange={serviceInputHandler}>
              <option
                disabled
                selected>
                Services
              </option>
              {serviceList.map((service) => (
                <option key={service.id}>{service.name}</option>
              ))}
            </select>
          </div>

          <div className="dropdown col-span-1">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-lg w-full col-span-1 ">
              Service Date - {startDate}
            </div>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-blue-500 text-primary-content">
              <div className="card-body">
                <h3 className="card-title text-white">
                  Please select the date
                </h3>
                <DatePicker
                  className="text-white"
                  selected={startDate}
                  onChange={(date) => setStartDate(date.toLocaleDateString())}
                />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <select
              className="select select-bordered select-lg w-full"
              onChange={appointmentInputHandler}>
              <option
                disabled
                selected>
                Appointment Time Slots
              </option>
              {timeSlotsList.TS79 && <option>{timeSlots.TS79}</option>}
              {timeSlotsList.TS911 && <option>{timeSlots.TS911}</option>}
              {timeSlotsList.TS111 && <option>{timeSlots.TS111}</option>}
              {timeSlotsList.TS13 && <option>{timeSlots.TS13}</option>}
              {timeSlotsList.TS35 && <option>{timeSlots.TS35}</option>}
              {timeSlotsList.TS57 && <option>{timeSlots.TS57}</option>}
            </select>
          </div>

          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full input-lg col-span-1"
            onChange={firstNameInputHandler}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full input-lg col-span-1"
            onChange={lastNameInputHandler}
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full input-lg col-span-1"
            onChange={emailInputHandler}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            maxLength="10"
            className="input input-bordered input-lg w-full col-span-1"
            onChange={phoneInputHandler}
          />
          <input
            type="text"
            placeholder="Street"
            className="input input-bordered input-lg w-full col-span-1"
            onChange={streetInputHandler}
          />
          <input
            type="text"
            placeholder="Apt"
            className="input input-bordered input-lg w-full col-span-1"
            onChange={aptInputHandler}
          />
          <select
            className="select select-bordered select-lg w-full"
            onChange={stateInputHandler}>
            <option
              disabled
              selected>
              State
            </option>
            {statesList.map((state) => (
              <option key={state.abbreviation}>{state.name}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="City"
            className="input input-bordered input-lg w-full"
            onChange={cityInputHandler}
          />
          <input
            type="text"
            placeholder="Zipcode"
            maxLength="5"
            inputMode="numeric"
            className="input input-bordered input-lg w-full"
            onChange={zipInputHandler}
          />
        </form>
        <div className="flex-1 flex flex-col justify-center items-center p-5">
          <div className="w-full max-w-lg border-4 rounded-3xl border-gray-300 shadow-md py-20 h-auto px-8">
            <h1 className="pb-6 font-bold text-3xl">Appointment Summary:</h1>
            <p className="py-5 text-xl">Name: {firstName + " " + lastName}</p>
            <p className="py-5 text-xl">Phone number: {phone}</p>
            <p className="py-5 text-xl">Selected service: {service}</p>
            <p className="py-5 text-xl">Selected date: {startDate}</p>
            <p className="py-5 text-xl">Selected time: {appointment}</p>
          </div>
          <div>
            <button
              className="btn btn-primary mt-8 "
              onClick={bookAppointment}>
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatDate(startDate) {
  const formattedDate = startDate.split("/");

  let [month, day, year] = formattedDate;
  if (month.length === 1) {
    month = "0" + month;
  }
  if (day.length === 1) {
    day = "0" + day;
  }
  const dateWithNoHyphens = month + day + year;
  return dateWithNoHyphens;
}
