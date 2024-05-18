import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
