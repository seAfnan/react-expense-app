import { useEffect, useState } from "react";
import "./App.css";
import Header from "./MyComponents/Header";
import Expenses from "./MyComponents/Expenses";
import NewExpense from "./MyComponents/NewExpense";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExpenseFilter from "./MyComponents/ExpenseFilter";
// import categories from "./categories";

function App() {
  // Expenses
  let initExpense;
  initExpense = localStorage.getItem("expenses");
  if (initExpense != null) {
    initExpense = JSON.parse(initExpense);
  } else {
    initExpense = [
      {
        id: 1,
        category: "Entertainment",
        description: "This is simple description just for testing purpose",
        amount: 0,
      },
    ];
  }

  // Expense state and Hook to save in LocalStorage
  const [expenseArr, setExpenseArr] = useState(initExpense);
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenseArr));
  }, [expenseArr]);

  // Add and Remove Expense
  const addExpenseFn = (desc: string, amount: number, category: string) => {
    let id;
    if (expenseArr.length > 0) {
      id = expenseArr[expenseArr.length - 1].id + 1;
    } else {
      id = 0;
    }
    const newExpenseObj = {
      id: id,
      category: category,
      description: desc,
      amount: amount,
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

  // Filter Expense on the basis of Category
  const [selectedCategory, seSelectedCategory] = useState("");
  const visibleExpenses = selectedCategory
    ? expenseArr.filter((e: any) => e.category === selectedCategory)
    : expenseArr;

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
          <NewExpense
            onSubmit={(expense) =>
              setExpenseArr([
                ...expenseArr,
                { ...expense, id: expenseArr.length + 1 },
              ])
            }
          />
        </>
      ),
    },
    {
      path: "list",
      element: (
        <>
          <Header />
          <ExpenseFilter
            onSelectCategory={(category) => seSelectedCategory(category)}
          />
          <Expenses
            expenses={visibleExpenses}
            deleteExpense={deleteExpenseFn}
          />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
