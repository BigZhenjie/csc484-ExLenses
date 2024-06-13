"use client";

import React from "react";
import { navBarItems } from "@/../constants/index.js";
import { motion } from "framer-motion";
import { animateFadeUpWithDelay } from "../../constants/anim";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  // const [selectedNavItem, setSelectedNavItem] = useState(navBarItems[0]);
  const router = useRouter();
  const pathName = usePathname();
  return (
    <div className="p-2 px-4 flex items-center justify-between w-full border-t-2 border-t-offWhite h-[60px]">
      {navBarItems.map((item, index) => {
        const isActive =
        pathName === item.route || pathName.startsWith(`${item.route}/`);
        return (
          <div className="w-full" key = {index}>
            {isActive ? (<motion.div className="h-[2px] bg-brightBlue" layoutId="selected"/>) : null}
            <motion.img
              {...animateFadeUpWithDelay(index)}
              src={item.imgPath}
              alt={item.label}
              onClick={() => {
                router.push(item.route)}
              }
              className={cn("w-full h-8 mt-1 rounded-b-lg py-1", {"bg-offWhite" : isActive})}
            />
          </div>
        );
      })}
    </div>
  );
};

export default NavBar;
