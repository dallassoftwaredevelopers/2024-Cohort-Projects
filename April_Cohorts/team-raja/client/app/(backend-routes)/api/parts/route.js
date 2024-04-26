import { mockData } from "@/app/utility/mockData/mockAppointmentApi";
import { mockPartsData } from "@/app/utility/mockData/mockGetPartsApi";

const API_URL = process.env.API_URL;
const LOC = "/api/parts/";

export const dynamic = "force-dynamic"; // have next js NOT cache this request
export async function GET(request) {
  //
  const searchParams = request.nextUrl.searchParams;
  const lowInventory = searchParams.get("lowInventory");

  try {
    const data = await getAllParts({ lowInventory });

    const body = JSON.stringify({ data });

    return new Response(body, {
      status: 200,
    });
  } catch (error) {
    const body = JSON.stringify({
      data: [],
      message: "failed to get parts list",
      error: error.message,
    });
    return new Response(body, {
      status: 500,
    });
  }
}

//request body:{partid,name,quantity,threshold }
export async function PUT(request) {
  const part = await request.json();

  try {
    setTimeout;
    const data = await updatePart(part);
    const body = JSON.stringify({ data });

    return new Response(body, {
      status: 200,
    });
  } catch (error) {
    const body = JSON.stringify({
      data: {},
      message: "failed to update part",
      error: error.message,
    });
    return new Response(body, {
      status: 500,
    });
  }
}

//request body:{partid,name,quantity,threshold }
export async function POST(request) {
  const part = await request.json();
  try {
    const data = await createPart(part);
    const body = JSON.stringify({ data });

    return new Response(body, {
      status: 200,
    });
  } catch (error) {
    const body = JSON.stringify({
      data: {},
      message: "failed to update part",
      error: error.message,
    });
    return new Response(body, {
      status: 500,
    });
  }
}

// part:{partid,name,quantity,threshold }
async function createPart(part) {
  const body = JSON.stringify(part);
  const response = await fetch(`${API_URL}/parts`, {
    body,
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Network response not ok");
  }
  const data = await response.json();

  return data;
}

// part:{partid,name,quantity,threshold }
async function updatePart(part) {
  console.log("part", part);
  const body = JSON.stringify(part);
  const response = await fetch(`${API_URL}/parts`, {
    body,
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Network response not ok");
  }
  const data = await response.json();

  return data;
}

//
async function getAllParts({ lowInventory = false }) {
  const params = new URLSearchParams({ lowInventory });

  const response = await fetch(`${API_URL}/parts?${params}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Network response not ok");
  }
  return data;
}
