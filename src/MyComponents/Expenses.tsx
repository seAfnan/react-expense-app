import React from "react";

interface Props {
  expenses: any[];
  deleteExpense: (expense: any) => void;
}

const Expenses = ({ expenses, deleteExpense }: Props) => {
  return (
    <div className="container mt-2">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 border-collapse border border-slate-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 border border-slate-600 text-center"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-slate-600 text-center"
              >
                Amount
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-slate-600 text-center"
              >
                Details
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-slate-600 text-center"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {expenses.length === 0 && (
              <tr className="text-red-300 text-center">
                <td>No expense to show</td>
              </tr>
            )}
            {expenses.map((item: any, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                key={index}
              >
                <td className="px-6 py-4 border border-slate-600 text-center">
                  {item.category}
                </td>
                <td className="px-6 py-4 border border-slate-600 text-center">
                  {item.amount}
                </td>
                <td className="px-6 py-4 border border-slate-600 text-center">
                  {item.description}
                </td>
                <td className="px-6 py-4 border border-slate-600 text-center">
                  <button
                    className="rounded-none focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-3 py-1.5"
                    onClick={() => deleteExpense(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="px-6 py-4 border border-slate-600 text-center">
                Total
              </td>
              <td className="px-6 py-4 border border-slate-600 text-center">
                {expenses
                  .reduce(
                    (accumulator, expense) => expense.amount + accumulator,
                    0
                  )
                  .toFixed(1)}
              </td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Expenses;
