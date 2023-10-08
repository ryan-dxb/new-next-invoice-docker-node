import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Sidebar from "@/components/common/sidebar/Sidebar";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
