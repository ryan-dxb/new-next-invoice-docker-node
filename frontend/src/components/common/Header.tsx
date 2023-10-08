import { NextPage } from "next";
import BorderedAvatar from "./BorderedAvatar";
import HeaderDropDownMenu from "./HeaderDropDownMenu";
import { ChevronDown } from "lucide-react";

interface HeaderProps {}

const Header: NextPage<HeaderProps> = () => {
  return (
    <div className="fixed top-0 flex justify-end w-[calc(100%-224px)] h-16 ml-56 bg-white">
      <HeaderDropDownMenu>
        <div className="flex items-center justify-center h-full px-4 mr-4 space-x-4 border-l cursor-pointer">
          <BorderedAvatar />
          <div className="mr-4">
            <p className="text-sm">John Doe</p>
            <p className="text-xs">johndoe@test.com</p>
          </div>
          <div>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </HeaderDropDownMenu>
    </div>
  );
};

export default Header;
