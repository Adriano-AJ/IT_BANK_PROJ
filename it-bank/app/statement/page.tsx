import * as React from 'react';

export default function Statement() {
    return (
        <div className="flex flex-col justify-center gap-10 p-10">  
            <h1 className="text-xl text-left font-bold m-5 leading-10 pt-10 pb-10">Bem vindo, Adriano Júnior</h1>
            <div className="flex flex-col justify-center ">
                <div className='flex items-center'>
                    <h2 className='font-bold text-xl'>Saldo disponível</h2>
                    <span className='m-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.274.857-.69 1.654-1.227 2.36a11.042 11.042 0 01-7.315 4.635c-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </span>
                </div>
                <div className="flex flex-col border border-radius rounded-md border-solid border-gray-600 justify-center space-y-5 p-5">
                <div className='flex justify-between items-center'>
                    <h2>Conta 123</h2>
                    <h2 className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h3m-7.5 0h.75m15 0h-.75M3.75 6a2.25 2.25 0 012.25-2.25h12a2.25 2.25 0 012.25 2.25M3.75 6v12.75a.75.75 0 001.2.6l5.55-4.2a.75.75 0 01.9 0l5.55 4.2a.75.75 0 001.2-.6V6" />
                        </svg>
                    </h2>
                </div>
                <table>
                    <thead>
                        <tr className="border-b border-solid border-gray-500 h-10">
                            <th className="text-left text-gray-400">Transação</th>
                            <th className="text-left text-gray-400">Data</th>
                            <th className="text-left text-gray-400">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-solid border-gray-500 h-10">
                            <td>Compra 1</td>
                            <td>01/01/2024</td>
                            <td>R$ -1.000,00</td>
                        </tr>
                        <tr className="border-b border-solid border-gray-500 h-10">
                            <td>Compra 2</td>
                            <td>05/01/2024</td>
                            <td>R$ -200,00</td>
                        </tr>
                        <tr className="border-b border-solid border-gray-500 h-10">
                            <td>Depósito</td>
                            <td>10/01/2024</td>
                            <td>R$ 300,00</td>
                        </tr>
                        <tr className="border-b border-solid border-gray-500 h-10">
                            <td>Compra 1</td>
                            <td>01/01/2024</td>
                            <td>R$ -1.000,00</td>
                        </tr>
                        <tr className="border-b border-solid border-gray-500 h-10">
                            <td>Compra 2</td>
                            <td>05/01/2024</td>
                            <td>R$ -200,00</td>
                        </tr>
                        <tr className="border-b border-solid border-gray-500 h-10">
                            <td>Depósito</td>
                            <td>10/01/2024</td>
                            <td>R$ 300,00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
}