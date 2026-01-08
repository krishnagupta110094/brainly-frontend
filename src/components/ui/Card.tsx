import axios from "axios";
import { DeleteIcon } from "../../icons/DeleteIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import { BACKEND_URL } from "../../config/BackendUrl";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: () => void;
      };
    };
  }
}

// interface CardProps {
//   title: string;
//   link: string;
//   type: "twitter" | "youtube";
//   cardId?: string;
//   setContents?: Dispatch<SetStateAction<contentProps[]>>;
// }
// interface Content {
//   _id: string;
//   title: string;
//   link: string;
//   type: "youtube" | "twitter";
// }
// interface contentProps {
//   _id: string;
//   title: string;
//   link: string;
//   type: "youtube" | "twitter";
//   setContents: React.Dispatch<React.SetStateAction<Content[]>>;
// }

// export const Card = ({ title, link, type, cardId, setContents }: CardProps) => {
//   const handleDelete = async (contentId: string) => {
//     try {
//       const res = await axios.delete(`${BACKEND_URL}/content/${contentId}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (res.data?.success) {
//         // alert("Content deleted successfully");
//         setContents?.((prevContents) =>
//           prevContents.filter((content) => content._id !== contentId)
//         );
//       }
//     } catch (err: unknown) {
//       if (axios.isAxiosError(err) && err.response) {
//         alert(`Failed to delete content: ${err.response.data.message}`);
//         return;
//       } else {
//         alert("An unexpected error occurred");
//       }
//     }
//   };
//   useEffect(() => {
//     if (type === "twitter" && window.twttr?.widgets?.load) {
//       window.twttr.widgets.load();
//     }
//   }, [link, type]);

import { useEffect, type Dispatch, type SetStateAction } from "react";
import type { Content } from "../../types/Content";

interface CardProps {
  title: string;
  link: string;
  type: Content["type"];
  cardId?: string;
  setContents?: Dispatch<SetStateAction<Content[]>>;
}

export const Card = ({ title, link, type, cardId, setContents }: CardProps) => {
  const handleDelete = async (contentId: string) => {
    const res = await axios.delete(`${BACKEND_URL}/content/${contentId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (res.data?.success) {
      setContents?.((prev) =>
        prev.filter((content) => content._id !== contentId)
      );
    }
  };

  useEffect(() => {
    if (type === "twitter" && window.twttr?.widgets?.load) {
      window.twttr.widgets.load();
    }
  }, [type, link]);
  // jab link/type change ho, reload widget
  return (
    <div>
      <div className="p-4 bg-white rounded-md shadow-md border-slate-100 border max-w-72 min-h-48 min-w-72">
        <div className="flex justify-between">
          <div className="flex justify-center items-center text-sm font-medium text-gray-700">
            <div className="pr-2 text-gray-500 ">
              {type === "youtube" && <YoutubeIcon />}
              {type === "twitter" && <TwitterIcon />}
            </div>
            <div>{title}</div>
          </div>
          <div className="flex justify-center items-center ">
            <div className="pr-4 text-gray-500">
              <a href={link} target="_blank">
                <ShareIcon size="sm" />
              </a>
            </div>
            {setContents && (
              <div
                className="pr-2 text-gray-500 cursor-pointer hover:text-blue-500 transition"
                onClick={() => handleDelete(cardId!)}
              >
                <DeleteIcon size="sm" />
              </div>
            )}
          </div>
        </div>

        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          )}

          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
};
