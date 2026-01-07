import { LogoIcon } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <div className="w-72 h-screen bg-white border-r border-slate-200 absolute left-0 top-0 pl-4">
        <div className="flex text-2xl font-bold pt-4 items-center gap-2">
            <div className="text-[#5046e4]">
                <LogoIcon/>
            </div>
            Brainly
        </div>
      <div className="pt-4">
        <SidebarItem text="Twitter" icon={<TwitterIcon />} />
        <SidebarItem text="YouTube" icon={<YoutubeIcon />} />
      </div>
    </div>
  );
};
