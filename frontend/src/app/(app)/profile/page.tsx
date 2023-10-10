import BorderedAvatar from "@/components/common/BorderedAvatar";
import PageHeader from "@/components/common/PageHeader";
import { DataTableDemo } from "@/components/data-table/DataTable";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AtSign,
  Contact2,
  Globe,
  Home,
  Hotel,
  LogIn,
  Pencil,
  PhoneCall,
  Pin,
  Search,
  UserSquare,
} from "lucide-react";
import { NextPage } from "next";

interface ProfilePageProps {}

const ProfilePage: NextPage<ProfilePageProps> = () => {
  return (
    <div className="flex flex-col h-full pb-4">
      <PageHeader title="Profile" subTitle="Manage your profile and settings" />

      <div className="w-11/12 mx-auto overflow-x-auto overflow-y-scroll max-w-7xl scrollbar-none">
        <div className="flex w-full p-4">
          <Card className="w-full max-w-2xl py-4 mx-auto">
            <div className="flex flex-col items-center justify-center">
              <BorderedAvatar size="xl" />
            </div>

            <div className="flex items-center justify-center flex-1 h-10 rounded-md ">
              <Button className="flex px-3 rounded-r-none" disabled>
                <Pencil className="w-5 h-5" />
              </Button>
              <div className="relative flex flex-1">
                <Input
                  placeholder="First Name"
                  className="relative w-1/2 w-full h-10 px-4 py-2 border-2 border-l-0 rounded-l-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 grid-rows-4 px-4 gap-y-6">
              <div className="flex flex-row items-center order-1 space-x-4">
                <Pencil className="w-5 h-5 " />
                <div className="flex flex-row space-x-2">
                  <h1 className="font-semibold">First Name: </h1>
                  <p className=" text-muted-foreground">John</p>
                </div>
              </div>
              <div className="flex flex-row items-center order-3 space-x-4">
                <Pencil className="w-5 h-5 " />
                <div className="flex flex-row space-x-2">
                  <h1 className="font-semibold">Last Name: </h1>
                  <p className=" text-muted-foreground">Does</p>
                </div>
              </div>

              <div className="flex flex-row items-center order-3 space-x-4">
                <LogIn className="w-5 h-5 " />
                <div className="flex flex-row space-x-2">
                  <h1 className="font-semibold">Logged In With: </h1>
                  <p className=" text-muted-foreground">Email</p>
                </div>
              </div>
              <div className="flex flex-row items-center order-3 space-x-4">
                <AtSign className="w-5 h-5 " />
                <div className="flex flex-row space-x-2">
                  <h1 className="font-semibold">Email: </h1>
                  <p className=" text-muted-foreground">johndoe@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-row items-center order-3 space-x-4">
                <Contact2 className="w-5 h-5 " />
                <div className="flex flex-row space-x-2">
                  <h1 className="font-semibold">Username: </h1>
                  <p className=" text-muted-foreground">doejohn</p>
                </div>
              </div>
              <div className="flex flex-row items-center order-3 space-x-4">
                <Home className="w-5 h-5 " />
                <div className="flex flex-row space-x-2">
                  <h1 className="font-semibold">Address: </h1>
                  <p className=" text-muted-foreground">
                    1234 Main Street, New York, NY 10001
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center order-3 space-x-4">
                <Pin className="w-5 h-5 " />
                <div className="flex flex-row space-x-2">
                  <h1 className="font-semibold">City: </h1>
                  <p className=" text-muted-foreground">
                    New York City, New York
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center order-3 space-x-4">
                <Globe className="w-5 h-5 " />
                <div className="flex flex-row space-x-2">
                  <h1 className="font-semibold">Country: </h1>
                  <p className=" text-muted-foreground">
                    United States of America
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center order-3 space-x-4">
                <Hotel className="w-5 h-5 " />
                <div className="flex flex-row space-x-2">
                  <h1 className="font-semibold">Business Name: </h1>
                  <p className=" text-muted-foreground">ABC Company</p>
                </div>
              </div>
              <div className="flex flex-row items-center order-3 space-x-4">
                <PhoneCall className="w-5 h-5 " />
                <div className="flex flex-row space-x-2">
                  <h1 className="font-semibold">Contact: </h1>
                  <p className=" text-muted-foreground">+1 (123) 456-7890</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
