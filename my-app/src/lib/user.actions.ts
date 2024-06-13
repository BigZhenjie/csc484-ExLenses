"use server";
import { plaidClient } from "./plaid";
import { CountryCode, Products } from "plaid";
import { parseStringify } from "./utils";
import { env } from "process";
import { mockTransactions } from "../../constants/mockData";

export const exchangePublicToken = async ({
  publicToken,
  user,
  bankData
}: exchangePublicTokenProps) => {
  const newData = bankData || []; // Ensure data is always an array
  try {
    const response = await plaidClient.itemPublicTokenExchange({
      public_token: publicToken,
    });

    const accessToken = response.data.access_token;

    const accountsResponse = await plaidClient.accountsGet({
      access_token: accessToken,
    });

    const accountData = accountsResponse.data.accounts[0];

    const mockTransactions = getTransactions();

    const newBankData = createBankData({
      bankId: accountData.account_id,
      bankName: accountData.name,
      mask: accountData.mask!,
      balance: accountData.balances.current!,
      type: accountData.type,
      transactions: mockTransactions,
    })
    const combinedData = [...newData, newBankData]

    if (combinedData) return combinedData;
    return null;
  } catch (error) {
    console.log("an error happened in exchangePublicToken: ", error);
  }
};

export const createLinkToken = async (user: userDetail) => {
  try {
    const tokenParams = {
      user: {
        client_user_id: user.$id,
      },
      client_name: `${user.firstName} ${user.lastName}`,
      products: ['auth', 'transactions', 'identity'] as Products[],
      language: "en",
      country_codes: ["US"] as CountryCode[],
      environment: env.PLAID_ENVIRONMENT,
    };

    const response = await plaidClient.linkTokenCreate(tokenParams);

    return parseStringify({ linkToken: response.data.link_token });
  } catch (error) {
    console.log(parseStringify(error));
  }
};


function getTransactions() {
  //get 3 random transactions from mockdata
  const transactions = mockTransactions;
  const randomTransactions = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * transactions.length);
    randomTransactions.push(transactions[randomIndex]);
  }
  return randomTransactions;
}

function createBankData({bankId, bankName, mask, balance, type, transactions} : BankData) : BankData {
  return {
    bankId: bankId,
    bankName: bankName,
    mask: mask,
    balance: balance,
    type: type,
    transactions,
  };
}