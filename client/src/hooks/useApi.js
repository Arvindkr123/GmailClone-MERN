import API from "../services/api.js";
import { useState } from "react";

const useApi = (urlObject) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const call = async (payload, type = "") => {
    setResponse(null);
    setError("");
    setLoading(true);
    try {
      const res = await API(urlObject, payload, type);
      setResponse(res.data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { call, response, loading, error };
};

export default useApi;
