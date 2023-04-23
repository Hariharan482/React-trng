import axios from 'axios';

const baseUrl = `https://nijin-server.vercel.app/api/explorer`;

const getData = async () => {
  let response = await axios.get(baseUrl);
  console.log(response.data);
  return response.data;
}

export default getData;