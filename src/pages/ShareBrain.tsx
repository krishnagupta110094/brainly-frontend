import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config/BackendUrl";
import { Card } from "../components/ui/Card";

interface Content {
  _id: string;
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export function ShareBrain() {
  const { hash } = useParams();
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (!hash) return;

    const fetchSharedBrain = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/brain/${hash}`);
        // console.log(res.data);
        setContents(res.data?.content);
        setUsername(res.data?.username || "Unknown User");
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

    fetchSharedBrain();
  }, [hash]);

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <>
      {contents.length === 0 ? (
        <div className="p-6">No contents shared.</div>
      ) : (
        <div className="p-6 min-h-screen bg-slate-100">
          <h1 className="text-xl font-semibold mb-4">
            Shared Brain by {username}
          </h1>

          <div className="flex gap-4 flex-wrap">
            {/* {contents.map((content) => (
          <Card
            key={content._id}
            {...content}
            // ❌ no delete, no share button
          />
        ))} */}
            {contents?.map(({ type, title, link, _id }) => {
              return (
                <Card
                  key={_id}
                  title={title}
                  link={link}
                  type={type}
                  cardId={_id}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
