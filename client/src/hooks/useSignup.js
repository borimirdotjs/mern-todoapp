import useAuthContext from "./useAuthContext";
import { useMutation } from "@tanstack/react-query";
import { userSignup } from "../axios/fetchers";

const useSignup = () => {
  const { isLoading, mutateAsync, isError, error } = useMutation(userSignup);
  const { dispatch } = useAuthContext();

  const signup = async ({ email, password }) => {
    try {
      const data = await mutateAsync({ email, password });
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({ type: "LOGIN", payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  return { signup, isLoading, isError, error };
};

export default useSignup;
