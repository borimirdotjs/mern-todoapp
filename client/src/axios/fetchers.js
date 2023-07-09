import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
});

export const getAllTodos = async () => {
  const req = await api.get("/todos");
  const response = req.json();
};
