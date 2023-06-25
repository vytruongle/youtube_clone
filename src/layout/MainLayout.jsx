import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex h-full">
      <div className="flex-1">
        <Sidebar />
      </div>
      <div className="flex max-ssm:basis-[87.5%] md:basis-[94.5%] lg:basis-[95.4%] xl:basis-[97%] 2xl:basis-[97%] 3xl:basis-[98.5%] flex-col h-full">
        <Header />
        <div className="flex flex-col h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
