import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Sidebar from "@/components/common/sidebar/Sidebar";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <Header />
      <main className=" w-[calc(100%-224px)] ml-56 py-16  ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
