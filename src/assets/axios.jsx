import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  // 백엔드의 서버 경로 위치
  credentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
