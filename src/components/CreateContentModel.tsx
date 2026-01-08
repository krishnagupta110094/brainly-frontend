import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Input } from "./Input";
import { Button } from "./ui/Button";
import axios from "axios";
import { BACKEND_URL } from "../config/BackendUrl";

enum ContentType {
  YOUTUBE = "youtube",
  TWITTER = "twitter",
}

export const CreateContentModel = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<string>(ContentType.YOUTUBE);

  const AddContent = async () => {
    // Add content logic here
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/content`,
      {
        link,
        title,
        type,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    // ✅ Clear inputs
    if (titleRef.current) titleRef.current.value = "";
    if (linkRef.current) linkRef.current.value = "";

    // ✅ Close modal on success
    onClose();
  };
  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition duration-300" />
      )}
      <div>
        {open && (
          <div className="w-screen h-screen fixed top-0 left-0 flex justify-center z-50 ">
            <div className="flex flex-col justify-center ">
              <span className="bg-white opacity-100 p-4 rounded">
                <div className="flex justify-end">
                  <div onClick={onClose} className="cursor-pointer">
                    <CrossIcon />
                  </div>
                </div>
                <div>
                  <Input placeholder={"Title"} ref={titleRef} />
                  <Input placeholder={"Link"} ref={linkRef} />
                  <div className="mt-2">
                    <h1 className="font-semibold mb-2">Type</h1>
                    <div className="flex gap-2 p-1 mb-2 justify-center">
                      <Button
                        text="Youtube"
                        varient={
                          type === ContentType.YOUTUBE ? "primary" : "secondary"
                        }
                        size="sm"
                        onClick={() => setType(ContentType.YOUTUBE)}
                      />
                      <Button
                        text="Twitter"
                        varient={
                          type === ContentType.TWITTER ? "primary" : "secondary"
                        }
                        size="sm"
                        onClick={() => setType(ContentType.TWITTER)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button
                    varient="primary"
                    text="Submit"
                    size="md"
                    onClick={AddContent}
                  />
                </div>
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
