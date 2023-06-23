import axios from "axios";

const http = axios.create();

http.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      "X-RapidAPI-Key": "3fba826cfdmsh373099d2a7c06a9p15a2a5jsnf5116acdeccf",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
});

export default http;
