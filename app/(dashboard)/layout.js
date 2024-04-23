import React from "react";
import Header from "../_components/Header";

function layout({ children }) {
  return (
    <div className="bg-white dark:bg-zinc-900">
      {/* <div className="h-full md:w-64 flex-col fixed inset-y-0 z-50 hidden md:flex">
        <SideNav/>
      </div> */}
      {/* <div className="md:ml-64"> */}
        {/* <TopHeader/> */}
        <Header/>
        {children}
      {/* </div> */}
    </div>
  );
}

export default layout;
