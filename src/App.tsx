import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Signup } from "./pages/Singup";
import { Signin } from "./pages/Signin";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
};

export default App;
