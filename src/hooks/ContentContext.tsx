import { createContext } from "react";
import type { Content } from "../types/Content";

export interface ContentContextType {
  contents: Content[];
  allContents: Content[];
  setContents: React.Dispatch<React.SetStateAction<Content[]>>;
  setAllContents: React.Dispatch<React.SetStateAction<Content[]>>;
  refreshContents: () => void;
}

export const ContentContext = createContext<ContentContextType | null>(null);
