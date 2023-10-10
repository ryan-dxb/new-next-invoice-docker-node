import PageHeader from "@/components/common/PageHeader";
import { DataTableDemo } from "@/components/data-table/DataTable";
import { NextPage } from "next";

interface DocumentsPageProps {}

const DocumentsPage: NextPage<DocumentsPageProps> = () => {
  return (
    <div className="flex flex-col h-full pb-4">
      <PageHeader
        title="Admin Panel"
        subTitle="Manage all users and their roles"
      />

      <div className="w-11/12 mx-auto overflow-x-auto overflow-y-scroll max-w-7xl scrollbar-none">
        <div className="w-full p-4">
          <DataTableDemo />
        </div>
      </div>
    </div>
  );
};

export default DocumentsPage;
