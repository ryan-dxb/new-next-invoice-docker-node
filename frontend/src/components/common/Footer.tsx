import { NextPage } from "next";

interface FooterProps {}

const Footer: NextPage<FooterProps> = () => {
  return (
    <div className="fixed bottom-0 w-full h-16 ml-56 bg-white">
      <h1>Footer</h1>
    </div>
  );
};

export default Footer;
