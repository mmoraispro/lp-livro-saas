import Link from "next/link";
import FormCadastro from "./form-cadastro";

export default async function RegisterPage() {
  return (
    <>
      <FormCadastro />
      <p className="text-sm text-muted-foreground mt-3">
        Já possui cadastro?{" "}
        <Link className="text-gray-800 hover:underline" href="/login">
          Faça o login
        </Link>
        .
      </p>
    </>
  );
}
