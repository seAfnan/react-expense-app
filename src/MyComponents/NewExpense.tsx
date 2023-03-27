import React, { ReactNode, useRef, useState } from "react";

interface Props {
  addExpense: (title: string, desc: string) => void;
}

const NewExpense = ({ addExpense }: Props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const titleInpRef = useRef<HTMLInputElement>(null);

  const addExpenseFn = () => {
    if (!title || !desc) {
      alert("Title and Details is Required");
      return false;
    } else {
      addExpense(title, desc);
      setTitle("");
      setDesc("");
      titleInpRef.current?.focus();
    }
  };
  return (
    <div className="container mt-5">
      <p className="text-3xl">Add New</p>
      <div className="mb-6 mt-5">
        <label
          htmlFor="expenseCategoryInp"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Expense Title
        </label>
        <input
          type="text"
          ref={titleInpRef}
          id="expenseCategoryInp"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="expenseDetailsInp"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Exepnse Details
        </label>
        <input
          type="text"
          id="expenseDetailsInp"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="....."
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-none text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={addExpenseFn}
      >
        Submit
      </button>
    </div>
  );
};

export default NewExpense;
