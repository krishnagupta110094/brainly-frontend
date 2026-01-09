import { LogoIcon } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <div className="w-16 md:w-36 lg:w-72 h-screen bg-white border-r border-slate-200 absolute left-0 top-0 pl-1 lg:pl-4">
      <div className="flex text-2xl font-bold pt-4 items-center gap-2">
        <div className="text-[#5046e4] flex items-center md:gap-2 justify-center">
          <div className="ml-1">
            <LogoIcon />
          </div>
          <span className="hidden md:inline">Brainly</span>
        </div>
      </div>
      <div className="pt-4">
        <SidebarItem
          text={<span className="hidden md:inline">Twitter</span>}
          icon={<TwitterIcon />}
        />
        <SidebarItem
          text={<span className="hidden md:inline">YouTube</span>}
          icon={<YoutubeIcon />}
        />
      </div>
    </div>
  );
};
