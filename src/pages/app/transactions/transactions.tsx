import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from "react-helmet-async";
import { TransactionHistory } from "./transaction-history";
import { Expenses } from "./expenses";

export function Transactions() {
  return (
    <>
      <Helmet title="Transações" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Transações</h1>

        <Tabs defaultValue="all">
          <TabsList className="flex w-min">
            <TabsTrigger value="all">Todas</TabsTrigger>
            <TabsTrigger value="expenses">Despesas</TabsTrigger>
            <TabsTrigger value="incomes">Receitas</TabsTrigger>
            <TabsTrigger value="transfers">Transferências</TabsTrigger>
          </TabsList>
          <TabsContent value="all"><TransactionHistory /></TabsContent>
          <TabsContent value="expenses"><Expenses /></TabsContent>
          <TabsContent value="incomes"><TransactionHistory /></TabsContent>
          <TabsContent value="transfers"><TransactionHistory /></TabsContent>
        </Tabs>
      </div>
    </>
  );
}
