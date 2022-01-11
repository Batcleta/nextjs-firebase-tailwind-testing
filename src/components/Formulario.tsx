import { useState } from "react"
import Cliente from "../core/Client"
import Botão from "./Botão"
import Entrada from "./Entrada"

interface FormularioProps {
cliente: Cliente
clienteMudou?:(cliente: Cliente) => void
cancelado?: () => void
}

function Formulario(props: FormularioProps) {
    const id = props.cliente?.id

    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id && (    
             <Entrada 
             somenteLeitura 
             texto="Código" 
             valor={id}
             className="mb-5"
             />
            )}
            <Entrada 
            texto="nome"  
            valor={nome} 
            valorMudou={setNome}
            className="mb-5"
            />
            <Entrada 
            texto="idade" 
            tipo="number" 
            valor={idade}
            valorMudou={setIdade}
            />
            <div className=" flex justify-end mt-7">
                <Botão 
                    onClick={() => props.clienteMudou?.(new Cliente(nome, idade, id))} 
                    cor="blue" className="mr-2">{id? 'alterar': 'salvar'}
                </Botão>
                
                <Botão onClick={props.cancelado}cor="blue">cancelar</Botão>
            </div>

        </div>
    )
}

export default Formulario
