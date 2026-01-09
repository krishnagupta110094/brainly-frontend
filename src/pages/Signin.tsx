

import { useRef, useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/ui/Button";
import { BACKEND_URL } from "../config/BackendUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signin = async () => {
    const username = usernameRef.current?.value?.trim();
    const password = passwordRef.current?.value?.trim();

    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${BACKEND_URL}/signin`, {
        username,
        password,
      });

      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      localStorage.setItem("username", username);
      // Redirect to dashboard
      navigate("/dashboard");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.message || "Invalid credentials");
      } else {
        alert("Unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#020617] text-white">
      <div className="w-[420px] md:w-[560px] p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>

        <p className="text-center text-slate-300 mb-8">
          Sign in to your digital brain
        </p>

        <div className="space-y-4 w-full">
          <Input ref={usernameRef} placeholder="Username" />
          <Input ref={passwordRef} placeholder="Password" type="password" />
        </div>

        <div className="mt-6 ml-2 w-full">
          <Button
            varient="primary"
            text={loading ? "Signing in..." : "Sign in"}
            size="md"
            fullWidth
            loading={loading}
            onClick={signin}
          />
        </div>

        <p className="text-sm text-slate-300 text-center mt-6">
          Don&apos;t have an account?{" "}
          <span
            className="text-indigo-400 cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};
