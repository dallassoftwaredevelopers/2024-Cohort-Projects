import { useRef, useState } from "react";

export default function usePostAppointment() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const controller = useRef(new AbortController());

  async function postAppointment(newAppointmentData) {
    try {
      if (controller.current.signal.aborted) {
        controller.current = new AbortController();
      }

      //previous request is loading abort it
      if (isLoading) {
        controller.current.abort();
      }
      setIsLoading(true);
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAppointmentData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok POST APPOINTMENT");
      }
      const res = await response.json();
      setError(null);
      return res;
    } catch (error) {
      console.error("Error creating appointment: ", error);
      setError("Failed to create appointment");
    } finally {
      setIsLoading(false);
    }
  }

  return { postAppointment, isLoading, error };
}
