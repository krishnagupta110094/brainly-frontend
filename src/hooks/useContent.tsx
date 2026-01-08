import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config/BackendUrl";

export const useContents = () => {
  const [contents, setContents] = useState([]);

  const refreshContents = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/content`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data);
      setContents(response.data.contents);
    } catch (error) {
      console.error("Error fetching contents:", error);
    }
  };
  useEffect(() => {
    refreshContents();
    const interval = setInterval(() => {
      refreshContents();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return {contents,refreshContents};
};
