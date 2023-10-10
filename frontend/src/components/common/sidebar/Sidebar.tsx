import { NextPage } from "next";
import Logo from "../Logo";
import SidebarMenuItem from "./SidebarMenuItem";
import { UserCog, FileText, Users, Settings, Sliders } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface SidebarProps {}

const Sidebar: NextPage<SidebarProps> = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 flex flex-col w-56 h-full border-r border-[0.5px] shadow-sm bg-white">
      <Logo />
      <nav className="flex flex-col mt-4">
        <ul className="flex flex-col px-4 space-y-4">
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

      <div className="p-4 mt-auto">
        {/* <li
      className={cn(
        "flex flex-row  w-full h-14   space-x-2 rounded-md cursor-pointer",
        active ? "bg-primary/10" : "hover:bg-primary/10"
      )}
    > */}
        <Link
          href="/profile"
          className={buttonVariants({
            variant: "outline",
            className:
              "flex items-center justify-center w-full  px-4 py-auto h-14",
          })}
        >
          <div className="flex flex-row w-full space-x-2">
            <UserCog size={24} />
            <span className="text-sm font-medium text-gray-700">
              Manage Profile
            </span>
          </div>
        </Link>
        {/* </li> */}
      </div>
    </div>
  );
};

export default Sidebar;
