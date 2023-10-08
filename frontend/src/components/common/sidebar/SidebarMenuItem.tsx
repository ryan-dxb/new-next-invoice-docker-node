import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NextPage } from "next";
import Link from "next/link";

interface SidebarMenuItemProps {
  icon: React.ReactNode;
  title: string;
  href: string;
  active?: boolean;
}

const SidebarMenuItem: NextPage<SidebarMenuItemProps> = ({
  icon,
  title,
  href,
  active,
}) => {
  return (
    <li
      className={cn(
        "flex flex-row  w-full h-14   space-x-2 rounded-md cursor-pointer",
        active ? "bg-primary/10" : "hover:bg-primary/10"
      )}
    >
      <Link
        href={href}
        className="flex items-center justify-center w-full h-full px-4 py-auto"
      >
        <div className="flex flex-row w-full space-x-2">
          {icon}
          <span className="text-sm font-medium text-gray-700">{title}</span>
        </div>
      </Link>
    </li>
  );
};

export default SidebarMenuItem;
