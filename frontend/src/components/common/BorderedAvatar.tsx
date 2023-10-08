import { NextPage } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface BorderedAvatarProps {}

const BorderedAvatar: NextPage<BorderedAvatarProps> = () => {
  return (
    <div className="flex items-center justify-center bg-gray-500 rounded-full w-11 h-11">
      <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
        <Avatar className="w-9 h-9">
          <AvatarFallback className="bg-gray-300">
            <h1>JD</h1>
          </AvatarFallback>
          <AvatarImage src="https://avatars.githubusercontent.com/u/25186847?v=4" />
        </Avatar>
      </div>
    </div>
  );
};

export default BorderedAvatar;
