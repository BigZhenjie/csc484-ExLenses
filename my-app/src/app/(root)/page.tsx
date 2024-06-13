"use client";
import React, { useEffect } from "react";
import Searchbar from "@/components/Searchbar";
import { useUserStore, useDataStore, useFilteredDataStore } from "@/lib/user";
import BankCard from "@/components/bankCard";
import { useRouter } from "next/navigation";

const Home = () => {
  const {user} = useUserStore();
  const {data} = useDataStore();
  const { filteredData} = useFilteredDataStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      // If user doesn't exist, redirect to login page
      router.push('/login');
    }
  }, []);

  const currentHour = new Date().getHours();
  let greeting;
  if (currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <main className="p-5 h-full flex flex-col items-center overflow-y-auto gap-5">
      <Searchbar />
      <header className="self-start text-lg">
        {/* {greeting}, {user?.firstName} */}
        {greeting},
        <div className=" m-2 ml-10 text-2xl font-bold text-softBlue">
          {user?.firstName}
        </div>
      </header>
      {data ? (
        filteredData ? (
          filteredData.map((bank, index) => {
            return <BankCard key={index} bankData={bank} />;
          })
        ) :
        data.map((bank, index) => {
          return <BankCard key={index} bankData={bank} />;
        })
      ) : (
        <section className="flex flex-col gap-10 mt-20">
          <div className="text-5xl font-bold text-center">
            Welcome to ExLenses
          </div>
          <div className="text-center text-2xl">
            Please connect an account by clicking{" "}
            <span
              className=" text-brightBlue font-bold cursor-pointer"
              onClick={() => {
                router.push("/link-account");
              }}
            >
              here.
            </span>
          </div>
        </section>
      )}
    </main>
  );
};

export default Home;
