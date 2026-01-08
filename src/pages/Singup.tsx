import { useRef, useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/ui/Button";
import { BACKEND_URL } from "../config/BackendUrl";
import axios from "axios";

export const Signup = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const signup = async () => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    setLoading(true);
    await axios.post(BACKEND_URL + "/signup", { username, password });
    setLoading(false);
    alert("Signup Successful!");
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
            onClick={signup}
          />
        </div>
      </div>
    </div>
  );
};
