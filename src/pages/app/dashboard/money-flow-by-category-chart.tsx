import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Settings } from "lucide-react";
import { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const _chartData = [
  { id: "1", category: "Alimentação", value: 200000, color: "#3730a3" },
  { id: "2", category: "Lazer", value: 60000, color: "#e11d48" },
  { id: "3", category: "Streaming", value: 30000, color: "#0369a1" },
  { id: "4", category: "Transporte", value: 50000, color: "#16a34a" },
  { id: "5", category: "Educação", value: 80000, color: "#f97316" },
  { id: "6", category: "Saúde", value: 45000, color: "#0ea5e9" },
  { id: "7", category: "Moradia", value: 150000, color: "#f43f5e" },
  { id: "8", category: "Outros", value: 25000, color: "#9333ea" },
];

const _chartConfig = _chartData.reduce((config, item) => {
  return {
    ...config,
    [item.category]: {
      label: item.category, // Usando o nome da categoria como rótulo
      color: item.color, // Cor associada
    },
  };
}, {});

export function MoneyFlowByCategoryChart() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("expense");
  const [selectedPeriod, setSelectedPeriod] = useState("setembro-2024");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const title = "Personalizar Gráfico de Fluxo de Caixa";
  const description =
    "Selecione o período e o tipo de categoria para ajustar a visualização do gráfico";

  return (
    <Card className="col-span-3 h-[550px] flex flex-col">
      <CardHeader className="pb-8 flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <CardTitle className="text-xl">
            Fluxo de caixa por Categoria
          </CardTitle>
          <CardDescription>Setembro de 2024</CardDescription>
        </div>
        {isDesktop ? (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon" className="self-start">
                <Settings className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="mb-2">
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-2">
                  <Label htmlFor="category-type" className="text-nowrap mr-2">
                    Tipo de categoria:
                  </Label>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger
                      id="category-type"
                      className={selectedCategory ? "font-bold" : ""}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem
                          value="expense"
                          className={
                            selectedCategory === "expense" ? "font-bold" : ""
                          }
                        >
                          Despesa
                        </SelectItem>
                        <SelectItem
                          value="income"
                          className={
                            selectedCategory === "income" ? "font-bold" : ""
                          }
                        >
                          Receita
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <Label htmlFor="period" className="text-nowrap mr-2">
                    Período:
                  </Label>
                  <Select
                    value={selectedPeriod}
                    onValueChange={setSelectedPeriod}
                  >
                    <SelectTrigger
                      id="period"
                      className={selectedPeriod ? "font-bold" : ""}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>2023</SelectLabel>
                        <SelectItem
                          value="novembro-2023"
                          className={
                            selectedPeriod === "novembro-2023"
                              ? "font-bold"
                              : ""
                          }
                        >
                          Novembro de 2023
                        </SelectItem>
                        <SelectItem
                          value="dezembro-2023"
                          className={
                            selectedPeriod === "dezembro-2023"
                              ? "font-bold"
                              : ""
                          }
                        >
                          Dezembro de 2023
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>2024</SelectLabel>
                        <SelectItem
                          value="agosto-2024"
                          className={
                            selectedPeriod === "agosto-2024" ? "font-bold" : ""
                          }
                        >
                          Agosto de 2024
                        </SelectItem>
                        <SelectItem
                          value="setembro-2024"
                          className={
                            selectedPeriod === "setembro-2024"
                              ? "font-bold"
                              : ""
                          }
                        >
                          Setembro de 2024
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancelar
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button type="submit">Salvar</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ) : (
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button variant="outline" size="icon" className="self-start">
                <Settings className="h-5 w-5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="text-left">
                <DrawerTitle>{title}</DrawerTitle>
                <DrawerDescription>{description}</DrawerDescription>
              </DrawerHeader>
              <div className="flex flex-col gap-4 p-4">
                <div className="flex flex-col justify-between gap-2">
                  <Label htmlFor="category-type" className="text-nowrap mr-2">
                    Tipo de categoria
                  </Label>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger
                      id="category-type"
                      className={selectedCategory ? "font-bold" : ""}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem
                          value="expense"
                          className={
                            selectedCategory === "expense" ? "font-bold" : ""
                          }
                        >
                          Despesa
                        </SelectItem>
                        <SelectItem
                          value="income"
                          className={
                            selectedCategory === "income" ? "font-bold" : ""
                          }
                        >
                          Receita
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <Label htmlFor="period" className="text-nowrap mr-2">
                    Período:
                  </Label>
                  <Select
                    value={selectedPeriod}
                    onValueChange={setSelectedPeriod}
                  >
                    <SelectTrigger
                      id="period"
                      className={selectedPeriod ? "font-bold" : ""}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>2023</SelectLabel>
                        <SelectItem
                          value="novembro-2023"
                          className={
                            selectedPeriod === "novembro-2023"
                              ? "font-bold"
                              : ""
                          }
                        >
                          Novembro de 2023
                        </SelectItem>
                        <SelectItem
                          value="dezembro-2023"
                          className={
                            selectedPeriod === "dezembro-2023"
                              ? "font-bold"
                              : ""
                          }
                        >
                          Dezembro de 2023
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>2024</SelectLabel>
                        <SelectItem
                          value="agosto-2024"
                          className={
                            selectedPeriod === "agosto-2024" ? "font-bold" : ""
                          }
                        >
                          Agosto de 2024
                        </SelectItem>
                        <SelectItem
                          value="setembro-2024"
                          className={
                            selectedPeriod === "setembro-2024"
                              ? "font-bold"
                              : ""
                          }
                        >
                          Setembro de 2024
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DrawerFooter className="pt-2">
                <DrawerClose asChild>
                  <Button type="submit">Salvar</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        )}
      </CardHeader>

      <CardContent className="flex-1 h-full">
        <ResponsiveContainer width="100%" height="100%">
          <ChartContainer config={_chartConfig}>
            <PieChart accessibilityLayer style={{ fontSize: 16 }}>
              <ChartTooltip
                content={
                  <ChartTooltipContent className="p-3 text-muted-foreground shadow-lg  max-w-xs min-w-[170px] w-auto space-x-2" />
                }
              />
              <Pie
                data={_chartData}
                dataKey="value"
                nameKey="category"
                innerRadius={55}
                label={window.innerWidth >= 640}
                labelLine={window.innerWidth >= 640}
              >
                {_chartData.map((category, index) => (
                  <Cell key={`cell-${index}`} fill={category.color} />
                ))}
              </Pie>
              <ChartLegend
                className="overflow-x-scroll flex lg:flex-wrap lg:overflow-x-hidden p-4 mt-2"
                content={<ChartLegendContent />}
              />
            </PieChart>
          </ChartContainer>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
