import React from "react";
import Topnav from "./Topnav";
import Sidebar from "./Sidebar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col lg:px-6 px-2">
      <Topnav />
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 md:pl-8 md:pr-0  pl-2 pr-2 py-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageLayout;
