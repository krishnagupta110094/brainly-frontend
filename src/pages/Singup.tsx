import { Input } from "../components/Input";
import { Button } from "../components/ui/Button";

export const Signup = () => {
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded border min-w-48 p-8 rounded-xl shadow-lg">
        <Input placeholder={"Username"} />
        <Input placeholder={"Password"} />
        <div className="flex justify-center py-4">
          <Button
            varient="primary"
            text="Signup"
            size="md"
            fullWidth={true}
            loading={true}
          />
        </div>
      </div>
    </div>
  );
};
