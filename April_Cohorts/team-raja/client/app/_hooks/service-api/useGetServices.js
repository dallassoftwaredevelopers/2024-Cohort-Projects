import { useEffect, useState } from "react";

export default function useGetServices() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    setError(null);
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const res = await fetchServiceData(controller.signal);

        setError(null);
        setData(res.data);
      } catch (error) {
        console.log("failed to fetch services", error);
        setData([]);
        setError({ message: "Failed to fetch services", error });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return { data, isLoading, error };
}

async function fetchServiceData(signal) {
  const response = await fetch(`/api/services`, { signal });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
}
