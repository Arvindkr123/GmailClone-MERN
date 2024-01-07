import axios from "axios";

const apiUrl = "http://localhost:8080";

const API = async (urlObject, payload, type) => {
  return await axios({
    method: urlObject.method,
    url: `${apiUrl}/${urlObject.endpoint}/${type}`,
    data: payload,
  });
};

export default API;
