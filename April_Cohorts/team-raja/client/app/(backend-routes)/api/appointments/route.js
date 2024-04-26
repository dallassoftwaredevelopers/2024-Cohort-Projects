import { headers } from "next/headers";

const API_URL = process.env.API_URL;
const LOC = "/api/appointments";
export const dynamic = "force-dynamic"; // have next js NOT cache this request
export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const date = searchParams.get("date");

  try {
    const data = await getAppointmentsByDay(date);
    const body = JSON.stringify({ data });
    return new Response(body, {
      status: 200,
    });
  } catch (error) {
    const body = JSON.stringify({
      data: [],
      message: `failed to get appointments list for day: ${date}`,
      error: error?.message,
    });

    return new Response(body, {
      status: 500,
    });
  }
}

export async function POST(request) {
  const appointmentData = await request.json();

  try {
    const data = await postAppointment(appointmentData);

    const body = await JSON.stringify(data);
    return new Response(body, {
      status: 200,
    });
  } catch (error) {
    const body = JSON.stringify({
      data: [],
      message: { message: `failed to create appointment`, appointmentData },
      error: error?.message,
    });

    return new Response(body, {
      status: 500,
    });
  }
}

async function getAppointmentsByDay(date) {
  const params = new URLSearchParams({ date });
  const res = await fetch(`${API_URL}/appointment/all?${params}`, {
    headers: { "Content-Type": "application/json" },
  });
  return await res.json();
}

/*
appointmentData:{
  appointmentTime:{
    day:03212024,
    timeSlot:"TS79"
  },
  customerInfo:{
    address:"123 road",
    name:"bob",
    phoneNumber:8171231234,
    email:"bob@bob.com",
    serviceId:"q1234"
  }
}
*/
async function postAppointment(appointmentData) {
  const body = await JSON.stringify(appointmentData);

  const res = await fetch(`${API_URL}/appointment/save`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body,
  });
  const data = await res.json();

  return data;

  //! for testing returning same data with confirmationId added
  // appointmentData.confirmationId = "confirmationBOB1234";
  // return appointmentData;
}
