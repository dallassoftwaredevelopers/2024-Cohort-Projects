"use client";
import { mockData } from "../utility/mockData/mockAppointmentApi";
import { timeSlots } from "@/constants";
import { formatDate } from "../utility/formatDateUtil";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { app } from "../firebase/config";

export default function AppointmentConfirmationPage() {
  // const searchParams = useSearchParams();
  // const appointment = searchParams.get("appointment");

  // let appointmentData = { day: "no day", timeSlot: "no timeslot" };
  // let confirmId = "no id";
  // let customer = { name: "no name" };

  // if (appointment != null && appointment != "undefined") {
  //   try {
  //     const { appointmentInfo, confirmationId, customerInfo } =
  //       JSON.parse(appointment);
  //     appointmentData = appointmentInfo;
  //     confirmId = confirmationId;
  //     customer = customerInfo;
  //   } catch (error) {
  //     appointmentData = { day: "no day", timeSlot: "no timeslot" };
  //     confirmId = "error saving appointment";
  //     customer = { name: "no name" };
  //   }
  // }

  return (
    <Suspense>
      <AppointmentInfo />
    </Suspense>
  );
}

function AppointmentInfo() {
  const searchParams = useSearchParams();
  const appointment = searchParams.get("appointment");

  let appointmentData = { day: "no day", timeSlot: "no timeslot" };
  let confirmId = "no id";
  let customer = { name: "no name" };

  if (appointment != null && appointment != "undefined") {
    try {
      const { day, timeSlot, confirmationID } = JSON.parse(appointment);
      appointmentData = {
        day,
        timeSlot,
      };
      confirmId = confirmationID;
      // customer = customerInfo;
    } catch (error) {
      appointmentData = { day: "no day", timeSlot: "no timeslot" };
      confirmId = "error saving appointment";
      customer = { name: "no name" };
    }
  }
  return (
    <div className="card flex items-center bg-white p-8 rounded-none">
      <div className="card-body items-center border-black border-2 rounded-lg text-black">
        <h1 className="card-title">Your booking is confirmed</h1>
        <p>See you soon</p>
        {/* <p>Service Name</p> */}
        <p>Confirmation Id: {confirmId}</p>
        <p>Date:{formatDate(appointmentData.day)}</p>
        <p>Time: {timeSlots[appointmentData.timeSlot]}</p>
        <div className="card-actions justify-end">
          <Link href={"/appointment"}>
            <button className="btn bg-primary text-white">Book a new appointment</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
