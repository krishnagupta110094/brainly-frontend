import type { ReactElement } from "react";

export function SidebarItem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex items-center hover:bg-slate-100 cursor-pointer">
      <div className="p-2">{icon}</div>
      <div className="p-2 font-medium">{text}</div>
    </div>
  );
}
