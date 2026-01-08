import axios from "axios";
import { BACKEND_URL } from "../../config/BackendUrl";

export const ToggleShare = async (share: boolean) => {
  try {
    const res = await axios.post(
      `${BACKEND_URL}/brain/share`,
      { share },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (share) {
      const hash = res.data.linkHash;
      const shareLink = `${window.location.origin}/share/${hash}`;
      navigator.clipboard.writeText(shareLink);
      alert(`Share link copied:\n${shareLink}`);
    } else {
      alert("Sharing turned OFF");
    }
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      alert(err.response?.data?.message || "Invalid credentials");
    } else {
      alert("Unexpected error occurred");
    }
  }
};
