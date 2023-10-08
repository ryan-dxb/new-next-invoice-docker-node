import { NextPage } from "next";

interface FooterProps {}

const Footer: NextPage<FooterProps> = () => {
  return (
    <div className="fixed bottom-0 w-[calc(100%-224px)] h-16 ml-56 bg-white flex items-center justify-center">
      <div className="flex flex-col">
        <h3>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by{" "}
          <a
            href="
            "
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-500"
          >
            John Doe
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
