import { Helmet } from "react-helmet-async";
import { MonthlyExpenseCard } from "./monthly-expense-card";
import { MonthlyIncomeCard } from "./monthly-income-card";
import { MoneyFlowByCategoryChart } from "./money-flow-by-category-chart";
import { AccountsResume } from "./accounts-resume";

export function Dashboard() {
  return (
    <>
      <Helmet title="Início" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <MonthlyIncomeCard />
          <MonthlyIncomeCard />
          <MonthlyExpenseCard />
          <MonthlyExpenseCard />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-9 gap-4">
          <MoneyFlowByCategoryChart />
          <AccountsResume />
        </div>
      </div>
    </>
  );
}
