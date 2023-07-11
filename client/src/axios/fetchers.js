import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
});

export const getAllTodos = async () => {
  const req = await api.get("/todos");
  const response = req.json();
};

export const userSignup = async ({ email, password }) => {
  const response = await api.post("/user/signup", { email, password });
  return response.data;
};

export const userLogin = async ({ email, password }) => {
  const response = await api.post("/user/login", { email, password });
  return response.data;
};
