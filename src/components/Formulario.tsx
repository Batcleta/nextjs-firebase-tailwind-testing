import { useState } from "react"
import CLiente from "../core/Client"
import Botão from "./Botão"
import Entrada from "./Entrada"

interface FormularioProps {
cliente: CLiente
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
                <Botão cor="blue" className="mr-2">{id? 'alterar': 'salvar'}</Botão>
                <Botão cor="blue">cancelar</Botão>
            </div>

        </div>
    )
}

export default Formulario
