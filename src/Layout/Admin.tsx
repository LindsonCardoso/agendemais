import React, { ReactNode } from "react";

// components


import { NavBar } from "../components/Header";
import Sidebar from "../components/siderBar";
import { canSSRAuth } from "../utils/canSSRAuth";

interface AdminProps {
  children: ReactNode;
}

export default function Admin({ children }: AdminProps) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-[#F8F8F8]">
        {/* Header */}
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
        </div>
      </div>
    </>
  );
}


export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})
