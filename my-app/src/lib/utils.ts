import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));


export const authFormSchema = (type: string) => z.object({
  //sign-in
  email: z.string().email(),
  password: z.string().min(8),
  //sign-up
  firstName: type ==="login"? z.string().optional() : z.string().min(3),
  lastName: type ==="login"? z.string().optional() : z.string().min(3),
});

export const searchTransactions = (bankData: BankData[], search: string) => {
  const copyBankData = parseStringify(bankData);
  //filter each bank in the bankData array
  //filter each transaction in the bank.transactions array
  //return the transaction if the transaction.description includes the search string
  
  //return the bank if the bank.transactions array is not empty
  return copyBankData.filter((bank: BankData) => {
    bank.transactions = bank.transactions.filter((transaction) => {
      return transaction.description.toLowerCase().includes(search.toLowerCase());
    });
    return bank.transactions.length > 0;
  });
}