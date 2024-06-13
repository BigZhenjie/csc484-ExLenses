"use client"
import React from 'react'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/lib/user";

const History = () => {
  const router = useRouter();
  const {user} = useUserStore() 
  useEffect(() => {
      if (!user) {
        // If user doesn't exist, redirect to login page
        router.push('/login');
      }
    }
  ,[])
  return (
    <div className='h-full p-5'>History</div>
  )
}

export default History