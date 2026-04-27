import { Input } from "../ui/components/input.component"
import { LinkButton } from "../ui/components/button.component"
import { Menu } from '../ui/components/menu.component';

export default function Transfer(){
    return(
        <div>
            <div>
                <h1 className="text-xl text-left font-bold m-5 leading-10 pt-10 pb-10">Bem vindo, Adriano Júnior</h1>
                <div className="flex justify-center flex-col gap-5 p-10 align-items-center">
                <h2 className="font-bold leading-5 text-center text-lg pb-5">Digite o valor abaixo para transferir</h2>
                    <div className="flex flex-col gap-5 align-items-center justify-center text-center pb-3">
                        <div className="flex pb-3 justify-center flex-col">
                            <Input type="number" placeholder="Digite o valor em R$" />
                        </div>    
                        <div className="flex flex-col gap-3 ">
                            <LinkButton 
                            type="submit" 
                            btnSize="def" 
                            btnType="default" 
                            href="/tfinal"
                            key="transfer-button"
                            >
                                Transfer
                            </LinkButton>
                            <LinkButton 
                            type="button"
                            btnSize="def" 
                            btnType="destructive" 
                            href="/statement"
                            key="cancel-button"
                            >
                                Cancel
                            </LinkButton>
                        </div>
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}