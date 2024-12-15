import Link from "next/link";
import FormLogin from "./form-login";

export default async function LoginPage() {
  return (
    <>
      <FormLogin />
      <p className="text-sm text-muted-foreground mt-3">
        Não possui cadastro?{" "}
        <Link className="text-gray-800 hover:underline" href="/cadastro">
          Registre-se
        </Link>
        .
      </p>
    </>
  );
}
