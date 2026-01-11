import type { ReactElement, ReactNode } from "react";

export function SidebarItem({
  text,
  icon,
  onClick,
}: {
  text: ReactNode;
  icon: ReactElement;
  onClick?: () => void;
}) {
  return (
    <div className="flex items-center hover:bg-slate-100 cursor-pointer" onClick={onClick}>
      <div className="p-2">{icon}</div>
      <div className="p-2 font-medium">{text}</div>
    </div>
  );
}
