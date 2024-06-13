"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { animateSearchbar } from "@/../constants/anim.js";
import { Search, X } from "lucide-react";
import { searchTransactions } from "@/lib/utils";
import { useDataStore, useFilteredDataStore } from "@/lib/user";


const Searchbar = () => {
  const {data} = useDataStore();
  const {setFilteredData} = useFilteredDataStore();
  const [expanded, setExpanded] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const MotionX = motion(X);
  const MotionSearch = motion(Search);

  const onChange = (e:any) => {
    setSearchInput(e.target.value);
    if(data){setFilteredData(searchTransactions(data, e.target.value))};
  }

  return (
    <motion.div
      {...animateSearchbar(expanded)}
      className="w-full border border-black self-end rounded-full h-7 flex items-center justify-end p-1"
    >
      {expanded && (
        <input
          value={searchInput}
          onChange={(e) => onChange(e)}
          type="text"
          placeholder="Search through your transactions..."
          className="w-full h-full rounded-full bg-transparent border-none outline-none pl-2 text-sm"
        />
      )}
      <button className="" onClick={() => setExpanded(!expanded)}>
        {expanded ? (
        <MotionX size={18} onClick={() => 
          {setFilteredData(null)
          setSearchInput("")}
        }/>
      ) : (
        <MotionSearch size={18} />
      )}
      </button>
      
    </motion.div>
  );
};

export default Searchbar;
