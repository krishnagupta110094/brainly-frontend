import { useRef, useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/ui/Button";
import { BACKEND_URL } from "../config/BackendUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const signin = async () => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    setLoading(true);
    const response = await axios.post(BACKEND_URL + "/signin", {
      username,
      password,
    });
    const jwt = response.data.token;
    localStorage.setItem("token", jwt);
    //redirect to dashboard
    navigate("/dashboard");
    setLoading(false);
  };
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded border min-w-48 p-8 rounded-xl shadow-lg">
        <Input ref={usernameRef} placeholder={"Username"} />
        <Input ref={passwordRef} placeholder={"Password"} />
        <div className="flex justify-center py-4">
          <Button
            varient="primary"
            text="Signup"
            size="md"
            fullWidth={true}
            loading={loading} // how to handle loading state can be implement dynamically
            onClick={signin}
          />
        </div>
      </div>
    </div>
  );
};
