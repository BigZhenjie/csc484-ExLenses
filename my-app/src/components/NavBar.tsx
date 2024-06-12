"use client";

import React from "react";
import { navBarItems } from "@/../constants/index.js";
import { motion } from "framer-motion";
import { animateFadeUp } from "../../constants/anim";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(navBarItems[0]);
  const router = useRouter();
  return (
    <div className="p-2 px-4 flex items-center justify-between w-full border-t-2 border-t-offWhite h-[60px]">
      {navBarItems.map((item, index) => {
        return (
          <div className="w-full">
            {item === selectedNavItem ? (<motion.div className="h-[2px] bg-brightBlue" layoutId="selected"/>) : null}
            <motion.img
              {...animateFadeUp(index)}
              src={item.imgPath}
              alt={item.label}
              key={index}
              onClick={() => {
                setSelectedNavItem(item)
                router.push(item.route)}
              }
              className={cn("w-full h-8 mt-1 rounded-b-lg py-1", {"bg-offWhite" : item === selectedNavItem})}
            />
          </div>
        );
      })}
    </div>
  );
};

export default NavBar;
