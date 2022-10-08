import axios from "axios";

const query = async (endpoint: string, params: any) => {
  const result = await axios.post(`/api${endpoint}`, params, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      timeout: 40000,
    },
  });
  return result.data;
};

export const getCovalentData = async (endpoint: string) =>
  await axios
    .get(endpoint)
    .then((response) => {
      return response.data.data.items;
    })
    .catch((error) => console.log(error));

export default query;
