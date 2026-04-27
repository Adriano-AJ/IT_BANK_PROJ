import Link from "next/dist/client/link";
import { LinkButton } from "../ui/components/button.component"
import { Input } from "../ui/components/input.component"
import { Menu } from '../ui/components/menu.component';


export default function TFinal(){
    return(
        <div>
            <div>
               <h1 className="text-xl text-left font-bold m-5 leading-10 pt-10 pb-10">Bem vindo, Adriano Júnior</h1>
                <div>
                    <div className="flex flex-col justify-center">
                        <h2 className="font-bold text-lg text-center">Selecione a conta destino</h2>
                        <div className="flex flex-col justify-center align-items-center p-10 gap-5" >
                            <Input
                            type="text"
                            placeholder="Procurar"
                            />
                            <table>
                                <thead>
                                    <tr className="border-b border-solid border-gray-500 h-10">
                                        <th className="text-left text-gray-400">Conta</th>
                                        <th className="text-left text-gray-400">Favorecido</th>  
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-solid border-gray-500 h-10 ">
                                        <td>CC - 2</td>
                                        <td>Eduardo Jose</td>
                                        <td>
                                            <Link href="/statement">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                            </svg>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-solid border-gray-500 h-10">
                                        <td>CP - 2</td>
                                        <td>Maria Silva</td>
                                        <td>
                                            <Link href="/statement">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                            </svg>
                                            </Link>
                                        </td>
                                    </tr>    
                                </tbody>
                            </table>
                            <LinkButton 
                            className="text-center"
                            type="submit" 
                            btnSize="def" 
                            btnType="destructive"
                            href="/transfer"
                            key="confirm-button"
                            >
                            Cancel
                            </LinkButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}