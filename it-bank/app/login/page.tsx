import { Button, LinkButton } from "@/app/ui/components/button.component";
import { Input } from "@/app/ui/components/input.component";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-10">
      <h1 className="text-3xl text-center font-bold">
        Impacta Bank
      </h1>
      <div className="flex flex-col gap-5 w-full">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <h3 className="text-center">Enter with your E-mail to do login</h3>
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Password" />
        <Button btnType="default" btnSize="def" type="submit">
          Login
        </Button>
        <LinkButton href="/signUp" btnType="secondary" btnSize="def" type="button">
          Sign Up
        </LinkButton>
      </div>
      <hr className="w-full border-gray-300" />
      <span className="text-sm">Conheca nossa politica de privacidade</span>
    </div>
  );
}