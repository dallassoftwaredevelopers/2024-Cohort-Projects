import { useRef, useState } from "react";

export default function usePostPart() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const controller = useRef(new AbortController());

  //  newPartData:{
  //     "partId":12345,
  // 	"name":"test",
  // 	"quantity":10,
  // 	"threshold":5
  // }

  async function postPart(newPartData) {
    try {
      if (controller.current.signal.aborted) {
        controller.current = new AbortController();
      }

      //previous request is loading abort it
      if (isLoading) {
        controller.current.abort();
      }
      setIsLoading(true);
      const response = await fetch("/api/parts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPartData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok POST PART");
      }

      setError(null);
    } catch (error) {
      console.error("Error creating part: ", error);
      setError("Failed to create part");
    } finally {
      setIsLoading(false);
    }
  }

  return { postPart, isLoading, error };
}
