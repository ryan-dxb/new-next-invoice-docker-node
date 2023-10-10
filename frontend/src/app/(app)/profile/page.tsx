import BorderedAvatar from "@/components/common/BorderedAvatar";
import PageHeader from "@/components/common/PageHeader";
import InputWithIcon from "@/components/dashboardComponents/InputWithIcon";
import { DataTableDemo } from "@/components/data-table/DataTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AtSign,
  Contact2,
  FileEdit,
  Globe,
  Home,
  Hotel,
  LogIn,
  Pencil,
  PhoneCall,
  Pin,
  Search,
  UserSquare,
  Trash2,
} from "lucide-react";
import { NextPage } from "next";

interface ProfilePageProps {}

const ProfilePage: NextPage<ProfilePageProps> = () => {
  return (
    <div className="flex flex-col h-full pb-4">
      <PageHeader title="Profile" subTitle="Manage your profile and settings" />

      <div className="w-11/12 mx-auto overflow-x-auto overflow-y-scroll max-w-7xl scrollbar-none">
        <div className="flex w-full p-4">
          <Card className="w-full max-w-2xl py-8 mx-auto">
            <CardContent>
              <div className="flex flex-col items-center justify-center">
                <BorderedAvatar size="xl" />
              </div>

              <div className="w-full px-4 mt-6">
                <div className="flex flex-row space-x-4">
                  <InputWithIcon
                    icon={<Pencil className="w-5 h-5" />}
                    placeholder="First Name"
                  />
                  <InputWithIcon
                    icon={<Pencil className="w-5 h-5" />}
                    placeholder="Last Name"
                  />
                </div>

                <div className="flex flex-row mt-4 space-x-4">
                  <InputWithIcon
                    icon={<AtSign className="w-5 h-5" />}
                    placeholder="Email"
                  />
                  <InputWithIcon
                    icon={<Contact2 className="w-5 h-5" />}
                    placeholder="Username"
                  />
                </div>

                <div className="mt-4">
                  <InputWithIcon
                    icon={<Home className="w-5 h-5" />}
                    placeholder="Address"
                  />
                </div>

                <div className="flex flex-row mt-4 space-x-4">
                  <InputWithIcon
                    icon={<Pin className="w-5 h-5" />}
                    placeholder="City"
                  />
                  <InputWithIcon
                    icon={<Globe className="w-5 h-5" />}
                    placeholder="Country"
                  />
                </div>

                <div className="flex flex-row mt-4 space-x-4">
                  <InputWithIcon
                    icon={<Hotel className="w-5 h-5" />}
                    placeholder="Business Name"
                  />
                  <InputWithIcon
                    icon={<PhoneCall className="w-5 h-5" />}
                    placeholder="Contact"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-row w-full px-4 space-x-4">
                <Button className="w-full" variant="secondary">
                  <FileEdit className="w-5 h-5" />
                  <span className="ml-2">Edit Profile</span>
                </Button>
                <Button className="w-full" variant="destructive">
                  <Trash2 className="w-5 h-5" />
                  <span className="ml-2">Delete Account</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
