import React from "react";

interface Props {
  expenses: any[];
  deleteExpense: (expense: any) => void;
}

const Expenses = ({ expenses, deleteExpense }: Props) => {
  return (
    <div className="container mt-5">
      <p className="text-3xl mb-6">Expenses</p>
      {expenses.length === 0 && (
        <p className="text-red-300">No expense to show</p>
      )}

      {/* {expenses.map((item: any, index) => (
        <div key={index} className="flex pt-2 pb-2 hover:bg-gray-800">
          <div className="w-full">
            <p className="text-2xl">{item.title}</p>
            <p className="text-1xl">{item.description}</p>
          </div>
        </div>
      ))} */}

      {expenses.map((item: any, index) => (
        <div
          key={index}
          className="bg-gray-700 hover:bg-slate-800 pt-2 pb-4 mt-2 cursor-pointer"
        >
          <div className="mt-2 px-2">
            <button
              className="rounded-none float-right focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-3 py-1.5"
              onClick={() => deleteExpense(item)}
            >
              X
            </button>
            <p className="text-2xl">{item.title}</p>
            <p className="text-1xl">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expenses;
