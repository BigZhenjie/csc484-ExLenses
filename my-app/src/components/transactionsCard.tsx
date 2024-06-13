import React from 'react'

const TransactionsCard = ({transactions} : {transactions : transactionDetail[]}) => {
  return (
    <div className="flex flex-col bg-offWhite p-2 w-[95%] rounded-b-lg">
        <div className="flex">
          <p className="w-[30%]">
            Date
          </p>
          <p className="w-[25%]">
            Amount
          </p>
          <p className="w-[45%]">
            Description
          </p>
          
        </div>
        <hr className=' border border-gray-500'/>
        {transactions.map((transaction, index) => {
          return (
            <div key={index} className="flex mt-4">
              <p className="w-[30%] overflow-hidden">{transaction.date}</p>
              <p className="w-[25%] overflow-hidden">
                {transaction.amount}
              </p>
              <p className="w-[45%] overflow-hidden h-5">{transaction.description}</p>
            </div>
          );
        })}
      </div>
  )
}

export default TransactionsCard