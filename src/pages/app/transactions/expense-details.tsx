import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Bank, FirstAid } from "@phosphor-icons/react";
import { CreditCard, Pencil, Trash2 } from "lucide-react";

// interface ExpenseDetailsProps {
//   open: boolean;
// }

export function ExpenseDetails() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (!isDesktop) {
    return (
      <CardContent>
        <CardHeader>
          <CardTitle>Exame no Oftamologista</CardTitle>
          <CardDescription>Resumo da despesa</CardDescription>
        </CardHeader>
        <div className="flex justify-around items-center mt-2 w-full">
          <Button size="sm">
            <CreditCard className="mr-2 h-4 w-4" />
            Pagar
          </Button>
          <Button variant="outline" size="sm">
            <Pencil className="mr-2 h-4 w-4" />
            Editar
          </Button>
          <Button variant="destructive" size="sm">
            <Trash2 className="mr-2 h-4 w-4" />
            Deletar
          </Button>
        </div>
        <div className="grid grid-cols-2 justify-start">
          <div className="flex flex-col items-start justify-start p-2">
            <Label
              htmlFor="billing-date"
              className="text-sm text-muted-foreground"
            >
              Data de cobrança
            </Label>
            <p id="billing-date" className="text-sm font-medium">
              11/09/2024
            </p>
          </div>
          <div className="flex flex-col items-start justify-start p-2">
            <Label htmlFor="category" className="text-sm text-muted-foreground">
              Categoria
            </Label>
            <div
              id="category"
              className="flex gap-1 items-center justify-center text-sm font-medium"
            >
              <div className="flex h-5 w-5 overflow-hidden rounded-full justify-center items-center bg-red-500">
                <FirstAid weight="fill" className="text-white w-4 h-4" />
              </div>
              Saúde
            </div>
          </div>
          <div className="flex flex-col items-start justify-start p-2">
            <Label htmlFor="status" className="text-sm text-muted-foreground">
              Status
            </Label>
            <Badge
              id="status"
              className="bg-red-600 dark:bg-red-700 text-white"
            >
              Não pago
            </Badge>
          </div>
          <div className="flex flex-col items-start justify-start p-2">
            <Label htmlFor="account" className="text-sm text-muted-foreground">
              Conta
            </Label>
            <div
              id="account"
              className="flex gap-1 items-center text-sm font-medium"
            >
              <div className="flex h-5 w-5 overflow-hidden rounded-full justify-center items-center bg-gray-600">
                <Bank weight="fill" className="text-white w-4 h-4" />
              </div>
              Nubank
            </div>
          </div>
          <div className="flex flex-col items-start justify-start p-2">
            <Label htmlFor="value" className="text-sm text-muted-foreground">
              Valor
            </Label>
            <p id="value" className="text-sm font-medium">
              R$ 50,00
            </p>
          </div>
          <div className="flex flex-col items-start justify-start p-2">
            <Label
              htmlFor="attachments"
              className="text-sm text-muted-foreground"
            >
              Anexos
            </Label>
            <p id="attachments" className="text-sm font-medium">
              4 anexos
            </p>
          </div>
          <div className="flex flex-col items-start justify-start p-2">
            <Label
              htmlFor="recurrence"
              className="text-sm text-muted-foreground"
            >
              Recorrência
            </Label>
            <p id="recurrence" className="text-sm font-medium">
              Repetida (Mensal)
            </p>
          </div>
          <div className="flex flex-col items-start justify-start p-2">
            <Label
              htmlFor="description"
              className="text-sm text-muted-foreground"
            >
              Descrição
            </Label>
            <p
              id="description"
              className="text-sm text-emerald-600 dark:text-emerald-400 font-medium cursor-pointer"
            >
              Adicionar
            </p>
          </div>
        </div>
      </CardContent>
    );
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Exame no Oftamologista</DialogTitle>
        <DialogDescription>Resumo da despesa</DialogDescription>
      </DialogHeader>
      <div className="flex justify-around items-center mt-2 w-full">
        <Button size="sm">
          <CreditCard className="mr-2 h-4 w-4" />
          Pagar
        </Button>
        <Button variant="outline" size="sm">
          <Pencil className="mr-2 h-4 w-4" />
          Editar
        </Button>
        <Button variant="destructive" size="sm">
          <Trash2 className="mr-2 h-4 w-4" />
          Deletar
        </Button>
      </div>
      <div className="grid grid-cols-2 justify-start">
        <div className="flex flex-col items-start justify-start p-2">
          <Label
            htmlFor="billing-date"
            className="text-sm text-muted-foreground"
          >
            Data de cobrança
          </Label>
          <p id="billing-date" className="text-sm font-medium">
            11/09/2024
          </p>
        </div>
        <div className="flex flex-col items-start justify-start p-2">
          <Label htmlFor="category" className="text-sm text-muted-foreground">
            Categoria
          </Label>
          <div
            id="category"
            className="flex gap-1 items-center justify-center text-sm font-medium"
          >
            <div className="flex h-5 w-5 overflow-hidden rounded-full justify-center items-center bg-red-500">
              <FirstAid weight="fill" className="text-white w-4 h-4" />
            </div>
            Saúde
          </div>
        </div>
        <div className="flex flex-col items-start justify-start p-2">
          <Label htmlFor="status" className="text-sm text-muted-foreground">
            Status
          </Label>
          <Badge id="status" className="bg-red-600 dark:bg-red-700 text-white">
            Não pago
          </Badge>
        </div>
        <div className="flex flex-col items-start justify-start p-2">
          <Label htmlFor="account" className="text-sm text-muted-foreground">
            Conta
          </Label>
          <div
            id="account"
            className="flex gap-1 items-center text-sm font-medium"
          >
            <div className="flex h-5 w-5 overflow-hidden rounded-full justify-center items-center bg-gray-600">
              <Bank weight="fill" className="text-white w-4 h-4" />
            </div>
            Nubank
          </div>
        </div>
        <div className="flex flex-col items-start justify-start p-2">
          <Label htmlFor="value" className="text-sm text-muted-foreground">
            Valor
          </Label>
          <p id="value" className="text-sm font-medium">
            R$ 50,00
          </p>
        </div>
        <div className="flex flex-col items-start justify-start p-2">
          <Label
            htmlFor="attachments"
            className="text-sm text-muted-foreground"
          >
            Anexos
          </Label>
          <p id="attachments" className="text-sm font-medium">
            4 anexos
          </p>
        </div>
        <div className="flex flex-col items-start justify-start p-2">
          <Label htmlFor="recurrence" className="text-sm text-muted-foreground">
            Recorrência
          </Label>
          <p id="recurrence" className="text-sm font-medium">
            Repetida (Mensal)
          </p>
        </div>
        <div className="flex flex-col items-start justify-start p-2">
          <Label
            htmlFor="description"
            className="text-sm text-muted-foreground"
          >
            Descrição
          </Label>
          <p
            id="description"
            className="text-sm text-emerald-600 dark:text-emerald-400 font-medium cursor-pointer"
          >
            Adicionar
          </p>
        </div>
      </div>
    </DialogContent>
  );
}
