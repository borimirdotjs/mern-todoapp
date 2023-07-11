import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import { AuthContextProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
