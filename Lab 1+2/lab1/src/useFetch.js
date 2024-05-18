import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    axios
      .get(url)
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
