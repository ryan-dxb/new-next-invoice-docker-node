import { NextPage } from "next";

interface HeaderProps {}

const Header: NextPage<HeaderProps> = () => {
  return <div className="fixed top-0 w-full h-16 ml-56 bg-white"></div>;
};

export default Header;
