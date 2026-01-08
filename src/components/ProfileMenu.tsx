import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProfileMenuProps {
  username: string;
}

const ProfileMenu = ({ username }: ProfileMenuProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/signin");
  };

  return (
    <div className="relative">
      {/* Profile Icon */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center cursor-pointer font-bold text-white select-none"
      >
        {username.charAt(0).toUpperCase()}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-48 rounded-xl bg-[#0f172a] border border-white/10 shadow-xl backdrop-blur-xl p-4 z-50">
          <p className="text-sm text-slate-300 mb-3">Signed in as</p>

          <p className="font-semibold text-white mb-4 truncate">{username}</p>

          <button
            onClick={logout}
            className="w-full py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition text-sm font-medium"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
