import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <>
      <Helmet title="Cadastro" />
      <Card className="mx-auto max-w-sm max-[400px]:w-[340px]">
        <CardHeader>
          <CardTitle className="text-xl">Cadastro</CardTitle>
          <CardDescription>
            Insira suas informações para criar uma conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">Nome</Label>
                <Input id="first-name" placeholder="Samuel" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Sobrenome</Label>
                <Input id="last-name" placeholder="Laurindo" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@exemplo.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="w-full">
              Criar conta
            </Button>
            <Button variant="outline" className="w-full">
              Entrar com Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Já possui uma conta?{" "}
            <Link to="/sign-in" className="underline">
              Entrar
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
