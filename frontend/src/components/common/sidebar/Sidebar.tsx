import { NextPage } from "next";
import Logo from "../Logo";
import SidebarMenuItem from "./SidebarMenuItem";
import { UserCog, FileText, Users, Settings, Sliders } from "lucide-react";

interface SidebarProps {}

const Sidebar: NextPage<SidebarProps> = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 flex flex-col w-56 h-full border-r border-[0.5px] shadow-sm bg-white">
      <Logo />
      <nav className="mt-4">
        <ul className="flex flex-col px-4 space-y-4">
          <SidebarMenuItem
            href="/profile"
            icon={<UserCog size={24} />}
            title="Manage Profile"
          />
          <SidebarMenuItem
            href="/dashboard"
            icon={<Sliders size={24} />}
            title="Dashboard"
          />
          <SidebarMenuItem
            href="/documents"
            icon={<FileText size={24} />}
            title="Documents"
          />
          <SidebarMenuItem
            href="/customers"
            icon={<Users size={24} />}
            title="Customers"
          />
          <SidebarMenuItem
            href="/admin"
            icon={<Settings size={24} />}
            title="Admin Panel"
            active
          />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
