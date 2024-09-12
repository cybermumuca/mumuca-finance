import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusCircle } from "lucide-react";
import { ExpenseRow } from "./expense-row";

const data = [
  {
    id: "121248u234",
    name: "Oftamologista",
    billingDate: "11/09/2024",
    value: "R$50,00",
    category: "Saúde",
    account: "Nubank",
    ignored: false,
  },
];

export function Expenses() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="h-min flex flex-col gap-2">
          <CardTitle>Despesas</CardTitle>
          <CardDescription>Visualize suas despesas.</CardDescription>
        </div>

        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Nova Despesa
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[5%]">#</TableHead>
              <TableHead className="w-[20%]">Nome</TableHead>
              <TableHead>Data de Pagamento</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Conta</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 9 }, () => {
              return <ExpenseRow />;
            })}
          </TableBody>
        </Table>
        {/* <div className="flex gap-4 items-center">
          <CircleArrowDown className="h-4 w-4 text-rose-500 dark:text-rose-400" />
          <div>
            <p>Oftamologista</p>
            <p>11/09/2024</p>
          </div>
          <div>
            <p>Saúde</p>
          </div>
          <div>
            <p>Nubank</p>
          </div>
          <div>
            <p>R$50,00</p>
            <Badge>Pendente</Badge>
          </div>
        </div> */}
      </CardContent>
    </Card>
  );
}
