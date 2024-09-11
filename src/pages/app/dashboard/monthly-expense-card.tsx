import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleArrowDown } from "lucide-react";

export function MonthlyExpenseCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Gasto Total (mês)</CardTitle>
        <CircleArrowDown className="h-4 w-4 text-rose-500 dark:text-rose-400" />
      </CardHeader>
      <CardContent className="space-y-1">
        <div className="text-2xl font-bold">R$10.500,90</div>
        <p className="text-xs text-emerald-500 dark:text-emerald-400">
          -12.1% em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  );
}
