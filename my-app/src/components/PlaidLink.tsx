"use client";
import React, { useEffect, useState, useCallback } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createLinkToken, exchangePublicToken } from "@/lib/user.actions";
import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink,
} from "react-plaid-link";
import { useDataStore } from "@/lib/user";

const PlaidLink = ({ user }: { user: userDetail }) => {
  const {setData, data : bankData} = useDataStore();
  const router = useRouter();
  const [token, setToken] = useState("");

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);
      setToken(data?.linkToken);
    };
    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      const data = await exchangePublicToken({
        publicToken: public_token,
        user,
        bankData
      });
      setData(data!);
      router.push("/");
    },
    [user]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <Button
      className="bg-softBlue text-white w-40 h-12 rounded-lg"
      onClick={() => open()}
      disabled={!ready}
    >
      Link Account
    </Button>
  );
};

export default PlaidLink;
