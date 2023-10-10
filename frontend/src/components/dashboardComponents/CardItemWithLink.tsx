import { NextPage } from "next";
import { Button, buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CardItemWithLinkProps {
  title: string;
  link: string;
  value: string;
  isAmmount?: boolean;
}

const CardItemWithLink: NextPage<CardItemWithLinkProps> = ({
  title,
  link,
  value,
  isAmmount = false,
}) => {
  return (
    <div className="flex flex-row items-center justify-between flex-1">
      <h4 className="font-semibold text-center text-gray-800">{title}</h4>
      <div className="flex flex-row items-center space-x-3">
        <p className="inline-block ">
          {isAmmount && <span className="text-gray-500 ">$</span>}
          {value}
        </p>
        <Link
          href={link}
          className={buttonVariants({
            variant: "outline",
            className: "w-8 h-8 p-0 bg-transparent",
          })}
        >
          <span>
            <ArrowRight size={24} className="w-4 h-4 text-gray-500" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CardItemWithLink;
