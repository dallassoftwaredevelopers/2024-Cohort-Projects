import { useEffect, useRef, useState } from "react";

export default function useGetDayTimeSlots(date) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setError(null);

    const fetchData = async () => {
      try {
        setIsLoading(true);

        const res = await fetchTimeSlotData({
          date,
          signal: controller.signal,
        });

        setError(null);
        setData(res.data);
      } catch (error) {
        console.log("failed to fetch timeslots for day", error);

        setData([]);
        setError({ message: "failed to fetch timeslots for day", error });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [date]);

  return { data, isLoading, error };
}

async function fetchTimeSlotData({ date, signal }) {
  const response = await fetch(`/api/timeslots/${date}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
    signal,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();

  return data;
}
