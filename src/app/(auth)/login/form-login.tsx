"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FormLogin() {
  return (
    <Card className="max-w-sm w-full rounded-2xl mt-12">
      <CardHeader>
        <h2 className="text-xl font-bold">Boas Vindas</h2>
        <CardDescription>Faça seu login com email e senha.</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <Label>Email</Label>
          <Input type="email" name="email" placeholder="eu@exemplo.com" />
        </div>
        <div>
          <Label>Senha</Label>
          <Input type="password" name="password" placeholder="********" />
        </div>
        <div>
          <Button className="w-full mt-6" type="submit">
            Login
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
