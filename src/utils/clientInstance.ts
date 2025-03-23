import axios from "axios";

const clientInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default clientInstance;
