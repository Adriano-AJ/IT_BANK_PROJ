import { NextResponse } from 'next/server';
import { User } from "@/app/domain/model";
// Simulação do seu banco de dados
const userDb: Record<string, User> = {
  "adriano@test.com": { email: "adriano@test.com", password: "123" }
};

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (userDb[email] && userDb[email].password === password) {
      return NextResponse.json({ message: "Login successful" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Erro interno no servidor" }, { status: 500 });
  }
}
