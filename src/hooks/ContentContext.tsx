import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config/BackendUrl";
import type { Content } from "../types/Content";

interface ContentContextType {
  contents: Content[];
  allContents: Content[];
  setContents: React.Dispatch<React.SetStateAction<Content[]>>;
  setAllContents: React.Dispatch<React.SetStateAction<Content[]>>;
  refreshContents: () => void;
}

const ContentContext = createContext<ContentContextType | null>(null);

export const ContentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [allContents, setAllContents] = useState<Content[]>([]);
  const [contents, setContents] = useState<Content[]>([]);

  const refreshContents = async () => {
    const res = await axios.get(`${BACKEND_URL}/content`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    setAllContents(res.data.contents);
    setContents(res.data.contents);
  };

  useEffect(() => {
    refreshContents();
  }, []);

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

export const useContents = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContents must be used inside ContentProvider");
  }
  return context;
};
