import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wallet } from "lucide-react";

export function AccountsResume() {
  return (
    <Card className="col-span-3 xl:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <CardTitle className="text-xl">Contas</CardTitle>
          <CardDescription>Resumo das contas</CardDescription>
        </div>

        <Wallet className="w-4 h-4 self-start" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Avatar className="h-6 w-6">
                <AvatarImage
                  src={`https://avatar.vercel.sh/a.png`}
                  alt={"Nubank"}
                />
                <AvatarFallback>NU</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                  Conta Investimentos
                </p>
                <p className="text-muted-foreground text-xs">Previsto</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-end whitespace-nowrap">
                R$100.567,09
              </p>
              <p className="text-muted-foreground text-xs text-end">
                R$120.230,34
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-1 justify-start items-center gap-4">
              <Avatar className="h-6 w-6">
                <AvatarImage
                  src={`https://avatar.vercel.sh/ab.png`}
                  alt={"Nubank"}
                />
                <AvatarFallback>NU</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm text-nowrap font-bold">Conta Nubank</p>
                <p className="text-muted-foreground text-xs">Previsto</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-end text-nowrap">
                R$15.050,67
              </p>
              <p className="text-muted-foreground text-xs text-end">
                R$14.780,00
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-1 justify-start items-center gap-4">
              <Avatar className="h-6 w-6">
                <AvatarImage
                  src={`https://avatar.vercel.sh/1.png`}
                  alt={"Nubank"}
                />
                <AvatarFallback>CA</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm text-nowrap font-bold">Carteira</p>
                <p className="text-muted-foreground text-xs">Previsto</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-end text-nowrap">
                R$1.200,04
              </p>
              <p className="text-muted-foreground text-xs text-end">R$530,00</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="">
          <p className="text-sm text-nowrap font-bold">Total</p>
          <p className="text-muted-foreground text-xs">Previsto</p>
        </div>
        <div>
          <p className="text-sm font-bold text-end text-nowrap">R$116.817,08</p>
          <p className="text-muted-foreground text-xs text-end">R$135.540,34</p>
        </div>
      </CardFooter>
    </Card>
  );
}
