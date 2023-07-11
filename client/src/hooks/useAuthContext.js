import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    console.log("Cant use AuthContext outside the provider");
  }

  return context;
};

export default useAuthContext;
