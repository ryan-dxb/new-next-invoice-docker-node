import { DataTableDemo } from "@/components/data-table/DataTable";
import { UserSquare } from "lucide-react";
import { NextPage } from "next";

interface AdminPanelPageProps {}

const AdminPanelPage: NextPage<AdminPanelPageProps> = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full overflow-y-scroll">
      <div className="flex flex-col w-full h-full p-4 mx-auto">
        <div className="flex flex-row py-4 space-x-2">
          <UserSquare className="w-10 h-10 text-gray-700" />
          <h1 className="text-3xl text-gray-700">Users</h1>
        </div>

        <div className="">
          <DataTableDemo />
        </div>
      </div>
    </div>
  );
};

export default AdminPanelPage;
