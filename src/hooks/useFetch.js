import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setIsError(true);
        setError(err.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    error,
    isError,
    isLoading,
  };
}
