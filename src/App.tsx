import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Signup } from "./pages/Singup";
import { Signin } from "./pages/Signin";
import Home from "./pages/Home";
import ProtectedRoute from "./routes/ProtectedRoute";
import { ShareBrain } from "./pages/ShareBrain";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/share/:hash" element={<ShareBrain />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
};

export default App;
