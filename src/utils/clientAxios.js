import axios from "axios";

const urlAxios = axios.create({
  baseURL: `https://4c8nliipj2.execute-api.sa-east-1.amazonaws.com`,
});

export default urlAxios;
