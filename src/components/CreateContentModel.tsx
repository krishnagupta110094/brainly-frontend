import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Input } from "./Input";
import { Button } from "./ui/Button";
import axios from "axios";
import { BACKEND_URL } from "../config/BackendUrl";

enum ContentType {
  YOUTUBE = "youtube",
  TWITTER = "twitter",
  OTHERS = "others",
}

export const CreateContentModel = ({
  open,
  onClose,
  onSuccess,
}: {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
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
    onSuccess();

    // ✅ Close modal on success
    onClose();
  };
  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="w-[300px] mr-6 md:w-[420px] rounded-3xl bg-[#0f172a] border border-white/10 shadow-2xl p-8 text-white">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Add Content</h2>
              <div
                onClick={onClose}
                className="cursor-pointer text-slate-400 hover:text-white transition"
              >
                <CrossIcon />
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              <Input placeholder="Title" ref={titleRef} />
              <Input placeholder="Link" ref={linkRef} />
            </div>

            {/* Type Selector */}
            <div className="mt-6">
              <p className="text-sm text-slate-300 mb-2">Content Type</p>
              <div className="flex gap-3">
                <Button
                  text="YouTube"
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
                <Button
                  text="Others"
                  varient={
                    type === ContentType.OTHERS ? "primary" : "secondary"
                  }
                  size="sm"
                  onClick={() => setType(ContentType.OTHERS)}
                />
              </div>
            </div>

            {/* Action */}
            <div className="mt-8">
              <Button
                varient="primary"
                text="Add to Brain"
                size="md"
                fullWidth
                onClick={AddContent}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
