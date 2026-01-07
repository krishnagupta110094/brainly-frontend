import { CrossIcon } from "../icons/CrossIcon";
import { Input } from "./Input";
import { Button } from "./ui/Button";

export const CreateContentModel = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  //   const { modalOpen, setModalOpen } = useState(false);
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-red-200 fixed top-0 left-0 opacity-60 flex justify-center">
          <div className="flex flex-col justify-center ">
            <span className="bg-white opacity-100 p-4 rounded">
              <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                  <CrossIcon />
                </div>
              </div>
              <div>
                <Input placeholder={"Title"} onChange={() => {}} />
                <Input placeholder={"Link"} onChange={() => {}} />
              </div>
              <div className="flex justify-center">
                <Button
                  varient="primary"
                  text="Submit"
                  size="md"
                  onclick={() => {}}
                />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};


