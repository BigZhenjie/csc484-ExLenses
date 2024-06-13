"use client";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/lib/user";
import { Button } from "@/components/ui/button";

const Account = () => {
  const router = useRouter();
  const { user } = useUserStore();
  useEffect(() => {
    if (!user) {
      // If user doesn't exist, redirect to login page
      router.push("/login");
    }
  }, []);
  return (
    <div className="h-full p-5 flex flex-col items-center justify-center">
      Account 
      <Button onClick={() => router.push("/login")}>
        Logout
      </Button>
    </div>
  );
};

export default Account;
