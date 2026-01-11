import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config/BackendUrl";
import type { Content } from "../types/Content";
import { ContentContext } from "./ContentContext";

// export interface ContentContextType {
//   contents: Content[];
//   allContents: Content[];
//   setContents: React.Dispatch<React.SetStateAction<Content[]>>;
//   setAllContents: React.Dispatch<React.SetStateAction<Content[]>>;
//   refreshContents: () => void;
// }

// export const ContentContext = createContext<ContentContextType | null>(null);

export const ContentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [contents, setContents] = useState<Content[]>([]);
  const [allContents, setAllContents] = useState<Content[]>([]);

  const refreshContents = async () => {
    const res = await axios.get(`${BACKEND_URL}/content`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setAllContents(res.data.contents);
    setContents(res.data.contents);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await refreshContents();
  //   };

  //   fetchData();
  // }, []);

  return (
    <ContentContext.Provider
      value={{
        contents,
        allContents,
        setContents,
        setAllContents,
        refreshContents,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};
