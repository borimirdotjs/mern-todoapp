import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";

const Root = () => {
  return (
    <div className="root">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Root;
