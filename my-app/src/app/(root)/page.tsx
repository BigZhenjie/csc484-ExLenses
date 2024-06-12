"use client";
import React from "react";
import user from "@/lib/user";
import Searchbar from "@/components/Searchbar";

const Home = () => {
  const { userDetail, setUserDetail, data, setData } = user();
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
        {/* {greeting}, {userDetail?.firstName} */}
        {greeting},
        <div className=" m-2 ml-10 text-2xl font-bold text-softBlue">
          Zhenjie
        </div>
      </header>
      {data ? (
        <></>
      ) : (
        <section className="flex flex-col gap-10 mt-20">
          <div className="text-5xl font-bold text-center">
            Welcome to ExLenses
          </div>
          <div className="text-center text-2xl">
            Please connect an account by clicking{" "}
            <span className=" text-brightBlue font-bold">here.</span>
          </div>
        </section>
      )}
    </main>
  );
};

export default Home;
