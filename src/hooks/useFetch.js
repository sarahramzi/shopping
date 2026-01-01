import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => {
        setIsError(true);
        setError(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return {
    data,
    error,
    isError,
    isLoading,
  };
}
