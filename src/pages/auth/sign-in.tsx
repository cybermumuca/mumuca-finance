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

export function SignIn() {
  return (
    <>
      <Helmet title="Entrar" />
      <Card className="mx-auto max-w-sm min-w-80">
        <CardHeader>
          <CardTitle className="text-2xl">Entrar</CardTitle>
          <CardDescription>
            Insira suas informações para entrar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
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
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Esqueceu sua senha?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
            <Button variant="outline" className="w-full">
              Entrar com Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Ainda não tem uma conta?{" "}
            <Link to="/sign-up" className="underline">
              Cadastro
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
