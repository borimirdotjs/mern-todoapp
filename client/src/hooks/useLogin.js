import useAuthContext from "./useAuthContext";
import { useMutation } from "@tanstack/react-query";
import { userLogin } from "../axios/fetchers";

const useLogin = () => {
  const { isLoading, mutateAsync, isError, error } = useMutation(userLogin);
  const { dispatch } = useAuthContext();

  const login = async ({ email, password }) => {
    try {
      const data = await mutateAsync({ email, password });
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({ type: "LOGIN", payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  return { login, isLoading, isError, error };
};

export default useLogin;
