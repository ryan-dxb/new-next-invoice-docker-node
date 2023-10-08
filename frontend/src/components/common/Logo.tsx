import { NextPage } from "next";
import { Receipt } from "lucide-react";

interface LogoProps {}

const Logo: NextPage<LogoProps> = () => {
  return (
    <div className="flex items-center justify-center h-16 space-x-1 border-b">
      <div className="">
        <Receipt size={32} />
      </div>
      <p>
        <span className="text-xl font-bold">Next</span> Invoice
      </p>
    </div>
  );
};

export default Logo;
