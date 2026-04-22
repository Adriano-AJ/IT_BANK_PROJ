import { Button, LinkButton } from "@/app/ui/components/button.component";
import { Input } from "@/app/ui/components/input.component";

export default function SignUp() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-10">
      <h1 className="text-3xl text-center font-bold">
        Impacta Bank
      </h1>
      <div className="flex flex-col gap-5 w-full">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <h3 className="text-center">Create your account</h3>
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Password" />
        <Button btnType="default" btnSize="def" type="submit">
          Sign Up
        </Button>
        <LinkButton btnType="destructive" btnSize="def" type="button" href="/login" className="text-center">
          Cancel
        </LinkButton>
      </div>
      <hr className="w-full border-gray-300" />
      <span className="text-sm">By signing up, you agree to our Terms of Service and Privacy Policy.</span>
    </div>
  );
}