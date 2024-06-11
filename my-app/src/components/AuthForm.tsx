"use client";
import { authFormSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import { z } from "zod";
import { Form } from "./ui/form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";
const AuthForm = ({ type }: AuthFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = authFormSchema(type);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log(data);
      setIsLoading(false);
      router.push("/");
    }, 1500);
    
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 p-5">
      <header className="self-start ml-4">ExLenses</header>
      <h1 className="text-24 font-semibold text-black">
        {type === "login" ? "Log In" : "Sign Up"}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CustomInput
            control={form.control}
            name="email"
            label="Email"
            placeholder="Email"
          />
          <CustomInput
            control={form.control}
            name="password"
            label="Password"
            placeholder="Password"
          />

          {type === "signup" && (
            <div className="flex gap-2">
              <CustomInput
                control={form.control}
                name="firstName"
                label="First Name"
                placeholder="First Name"
              />
              <CustomInput
                control={form.control}
                name="lastName"
                label="Last Name"
                placeholder="Last Name"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full text-16 rounded-lg border border-bankGradient bg-bank-gradient font-semibold text-black p-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <LoaderCircle size={20} className="animate-spin inline" />{" "}
                &nbsp; Loading...
              </>
            ) : type === "login" ? (
              "Log In"
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
        <footer className="flex justify-center gap-1">
          <p className="text-14 font-normal text-gray-600">
            {type === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>
          <Link
            href={type === "login" ? "/signup" : "/login"}
            className="text-14 cursor-pointer font-medium"
          >
            {type === "login" ? "Sign Up" : "Sign In"}
          </Link>
        </footer>
      </Form>
    </div>
  );
};

export default AuthForm;
