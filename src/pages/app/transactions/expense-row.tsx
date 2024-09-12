import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { Bank, FirstAid } from "@phosphor-icons/react";
import { CircleArrowDown } from "lucide-react";
import { useState } from "react";
import { ExpenseDetails } from "./expense-details";

export function ExpenseRow() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
      <DialogTrigger asChild>
        <TableRow className="cursor-pointer">
          <TableCell>
            <CircleArrowDown className="h-4 w-4 text-rose-500 dark:text-rose-400" />
          </TableCell>
          <TableCell>Exame no Oftamologista</TableCell>
          <TableCell>11/09/2024</TableCell>
          <TableCell>R$150,00</TableCell>
          <TableCell>
            <div className="flex gap-2 items-center">
              <div className="flex h-5 w-5 overflow-hidden rounded-full justify-center items-center bg-red-500">
                <FirstAid weight="fill" className="text-white w-4 h-4" />
              </div>
              Saúde
            </div>
          </TableCell>
          <TableCell>
            <div className="flex gap-2 items-center">
              <div className="flex h-5 w-5 overflow-hidden rounded-full justify-center items-center bg-gray-600">
                <Bank weight="fill" className="text-white w-4 h-4" />
              </div>
              Nubank
            </div>
          </TableCell>
          <TableCell>
            <Badge className="bg-red-600 dark:bg-red-700 text-white">
              Não pago
            </Badge>
          </TableCell>
        </TableRow>
      </DialogTrigger>

      <ExpenseDetails />
    </Dialog>
  );
}
