import NavBar from "@/components/NavBar";
import React from "react";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {


  return (
    <>
      <div className="w-[430px] h-[818px] bg-white rounded-2xl flex flex-col">
        {children}
        <NavBar />
      </div>
    </>
  );
};

export default RootLayout;
