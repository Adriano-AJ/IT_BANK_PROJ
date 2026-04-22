import * as React from "react";

export default function Account() {
  return (
    <div className="flex flex-col justify-center gap-10 p-10">
      <h1 className="text-3xl font-bold m-5 leading-10 pt-10 pb-10">Bem vindo, Emilio Resende</h1>
      <div className="flex flex-col justify-center m-5 space-y-5">
        <h2 className="font-bold text-left leading-5 pb-2">Selecione sua conta para iniciar</h2>
        <table>
            <thead>
                <tr className="border-b border-solid border-gray-500 h-10">
                    <th className="text-left text-gray-400">Conta</th>
                    <th className="text-left text-gray-400">Descriçao</th>
                    <th className="text-left text-gray-400">Saldo</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-solid border-gray-500 h-10">
                    <td>CC - 2</td>
                    <td>Conta Corrente</td>
                    <td>R$ 1.000,00</td>
                </tr>
                <tr className="border-b border-solid border-gray-500 h-10">
                    <td>CP - 2</td>
                    <td>Conta Poupança</td>
                    <td>R$ 5.000,00</td>
                </tr>    
            </tbody>   
        </table>
      </div>
    </div>
  );
}