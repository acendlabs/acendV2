import axios from "axios";

const query = async (endpoint: string, params: any) => {
  const result = await axios.post(`/api${endpoint}`, params, {
    headers: {
      "content-type": "application/json",
    },
  });
  return result.data;
};

export default query;
