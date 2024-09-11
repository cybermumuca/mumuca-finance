import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleArrowUp } from "lucide-react";

export function MonthlyIncomeCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Ganho Total (mês)</CardTitle>
        <CircleArrowUp className="h-4 w-4 text-emerald-500" />
      </CardHeader>
      <CardContent className="space-y-1">
        <div className="text-2xl font-bold">R$45.231,89</div>
        <p className="text-xs text-emerald-500 dark:text-emerald-400 whitespace-normal">
          +20.1% em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  );
}
