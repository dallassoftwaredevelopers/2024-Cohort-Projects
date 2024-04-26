import { useRef, useState } from "react";

export default function useUpdatePart() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const controller = useRef(new AbortController());

  //  newPartData:{
  //     "partId":12345,
  // 	"name":"test",
  // 	"quantity":10,
  // 	"threshold":5
  // }

  async function updatePart(newPartData) {
    try {
      //check if controller was used
      if (controller.current.signal.aborted) {
        controller.current = new AbortController();
      }

      //previous request is loading abort it
      if (isLoading) {
        controller.current.abort();
      }

      setIsLoading(true);
      const response = await fetch("/api/parts", {
        method: "PUT",
        signal: controller.current.signal,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPartData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok PUT PART");
      }

      setError(null);
    } catch (error) {
      console.error("Error updating data:", error);
      setError("Failed to update data");
    } finally {
      setIsLoading(false);
    }
  }

  return { updatePart, isLoading, error };
}
