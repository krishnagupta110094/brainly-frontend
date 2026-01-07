import { ShareIcon } from "../../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export const Card = ({ title, link, type }: CardProps) => {
  return (
    <div>
      <div className="p-4 bg-white rounded-md shadow-md border-slate-100 border max-w-72 min-h-48 min-w-72">
        <div className="flex justify-between">
          <div className="flex justify-center items-center text-sm font-medium text-gray-700">
            <div className="pr-2 text-gray-500">
              <ShareIcon size="sm" />
            </div>
            {title}
          </div>
          <div className="flex justify-center items-center ">
            <div className="pr-4 text-gray-500">
              <a href={link} target="_blank">
                <ShareIcon size="sm" />
              </a>
            </div>
            <div className="pr-2 text-gray-500">
              <ShareIcon size="sm" />
            </div>
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
