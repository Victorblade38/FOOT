import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

const Layout = () => {
  return (
    <div className="bg-background w-screen h-screen  flex justify-center items-center">
      <div className="">
        <AuthProvider>
          <Outlet />
        </AuthProvider>
      </div>
    </div>
  );
};

export default Layout;
