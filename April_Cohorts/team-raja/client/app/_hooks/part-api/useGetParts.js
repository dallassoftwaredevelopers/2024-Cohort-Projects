import { useEffect, useState } from "react";

export default function useGetParts(lowInventory = false) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    setError(null);
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const res = await fetchPartsData({
          signal: controller.signal,
          lowInventory,
        });

        setError(null);
        setData(res.data);
      } catch (error) {
        console.log("failed to fetch parts", error);
        setData([]);
        setError({ message: "Failed to fetch parts", error });
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

async function fetchPartsData({ signal, lowInventory }) {
  const params = new URLSearchParams({ lowInventory });

  const response = await fetch(`/api/parts?${params}`, {
    signal,
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok  GET PART");
  }
  const data = await response.json();

  return data;
}
