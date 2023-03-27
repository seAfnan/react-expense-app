import { useEffect, useState } from "react";
import "./App.css";
import Header from "./MyComponents/Header";
import Expenses from "./MyComponents/Expenses";
import NewExpense from "./MyComponents/NewExpense";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  let initExpense;
  initExpense = localStorage.getItem("expenses");
  if (initExpense != null) {
    initExpense = JSON.parse(initExpense);
  } else {
    initExpense = [
      {
        id: 1,
        title: "Simple title",
        description: "This is simple description just for testing purpose",
      },
    ];
  }

  const [expenseArr, setExpenseArr] = useState(initExpense);
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenseArr));
  }, [expenseArr]);

  const addExpenseFn = (title: string, desc: string) => {
    let id;
    if (expenseArr.length > 0) {
      id = expenseArr[expenseArr.length - 1].id + 1;
    } else {
      id = 0;
    }
    const newExpenseObj = {
      id: id,
      title: title,
      description: desc,
    };
    setExpenseArr([...expenseArr, newExpenseObj]);
  };

  const deleteExpenseFn = (expense: any) => {
    setExpenseArr(
      expenseArr.filter((e: any) => {
        return e !== expense;
      })
    );
    localStorage.setItem("expenses", JSON.stringify(expenseArr));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <div className="container mt-5">
            <p className="text-3xl">About</p>
            <p className="text-1xl">
              This is simple Expense App. I made it just for practicing purpose.
            </p>
          </div>
        </>
      ),
    },
    {
      path: "new",
      element: (
        <>
          <Header />
          <NewExpense addExpense={addExpenseFn} />
        </>
      ),
    },
    {
      path: "list",
      element: (
        <>
          <Header />
          <Expenses expenses={expenseArr} deleteExpense={deleteExpenseFn} />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
