"use client"
import PlaidLink from "@/components/PlaidLink";
import {useUserStore} from "@/lib/user";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";



const LinkAccount = () => {
  const {user} = useUserStore() as { user: userDetail };
  const router = useRouter();
  useEffect(() => {
      if (!user) {
        // If user doesn't exist, redirect to login page
        router.push('/login');
      }
    }
  ,[])

  return (
    <div className="h-full p-5 flex items-center justify-center">
      {user && <PlaidLink user={user} />}
    </div>
  );
};

export default LinkAccount;
