import { useContext } from "react";
import { ContentContext } from "./ContentContext";

export const useContents = () => {
  const context = useContext(ContentContext);

  if (!context) {
    throw new Error("useContents must be used inside ContentProvider");
  }

  return context;
};
