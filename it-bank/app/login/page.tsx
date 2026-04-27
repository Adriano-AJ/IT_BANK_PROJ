"use client"

import { Button, LinkButton } from "@/app/ui/components/button.component";
import { Input } from "@/app/ui/components/input.component";
import { User } from "../domain/model";
import  { useRouter } from "next/navigation";


export default function Login() {

  const router = useRouter();

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Lógica de autenticação aqui
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log("Email:", email);
    console.log("Password:", password);

    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
    "Content-Type": "application/json",
    },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      console.log("Login successful");
      router.push("/account");
    } else {
      console.error(await response.text());
      console.log("Login failed");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-10 p-10">
      <h1 className="text-3xl text-center font-bold">
        Impacta Bank
      </h1>
      <div className="flex flex-col gap-5 w-full">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <h3 className="text-center">Enter with your E-mail to do login</h3>
        <form onSubmit={handleLogin} className="flex flex-col justify-center gap-5">
          <Input type="email" placeholder="E-mail" name="email"/>
          <Input type="password" placeholder="Password" name="password"/>
          <Button btnType="default" btnSize="def" type="submit">
            Login
          </Button>
        </form>
        <LinkButton href="/signUp" btnType="secondary" btnSize="def" type="button">
          Sign Up
        </LinkButton>
      </div>
      <hr className="w-full border-gray-300" />
      <span className="text-sm">Conheca nossa politica de privacidade</span>
    </div>
  );
}