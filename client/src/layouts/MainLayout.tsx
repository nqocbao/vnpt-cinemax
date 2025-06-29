import React from "react";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className }) => {
  return (
    <div className={"flex flex-col min-h-screen bg-white " + (className || "")}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
