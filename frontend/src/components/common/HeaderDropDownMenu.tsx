"use client";

import { NextPage } from "next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Cloud,
  CreditCard,
  FileText,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  Sliders,
  User,
  UserPlus,
  Users,
} from "lucide-react";

interface HeaderDropDownMenuProps {
  children: React.ReactNode;
}

const HeaderDropDownMenu: NextPage<HeaderDropDownMenuProps> = ({
  children,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          <h1 className="text-xs font-bold text-gray-500 uppercase">
            John Doe
          </h1>
          <p>
            <span className="text-xs text-gray-500">
              Project Manager at <span className="font-bold">Acme</span>
            </span>
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="w-4 h-4 mr-2" />
            <span>Profile</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Sliders className="w-4 h-4 mr-2" />
            <span>Dashboard</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FileText className="w-4 h-4 mr-2" />
            <span>Documents</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Users className="w-4 h-4 mr-2" />
            <span>Customers</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="w-4 h-4 mr-2" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderDropDownMenu;
