import React from "react";
import CountUp from "react-countup";
import TransactionsCard from "./transactionsCard";
const bankCard = ({ bankData }: { bankData: BankData }) => {
  const { bankName, mask, type, balance, transactions } = bankData;
  return (
    <div className="w-full">
    <div className="flex bg-[#def0f8] flex-col p-3  text-black rounded-t-lg gap-7">
      <div className="flex justify-between items-center">
        <p>{bankName}</p>
        <p>●●●● ●●●● ●●●● {mask}</p>
      </div>
      <div className="flex items-center justify-between">
        <p>{type}</p>
        <CountUp
          end={balance}
          duration={1}
          separator=","
          prefix="$"
          decimals={2}
        />
      </div>
    </div>
    <TransactionsCard transactions={transactions} />
    </div>
    
  );
};

export default bankCard;
