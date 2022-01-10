import CLiente from "../core/Client"
import { IconeEdição, IconeLixo } from "./Icones"

interface TabelaProps {
    clientes: CLiente[]
    clienteSelecionado?: (cliente: CLiente) => void
    clienteExcluido?: (cliente: CLiente) => void
}

function Tabela(props: TabelaProps) {

    const exibirAções = props.clienteSelecionado || props.clienteExcluido

    function renderizarCabeçalho(){
        return(
            <tr>
                <th className="text-left p-4">Código </th>
                <th className="text-left p-4">Nome </th>
                <th className="text-left p-4">Idade</th>
                {exibirAções && (<th className=" p-4">Ações</th>)}
            </tr>

        )
    }

    function renderizarAcoes(cliente: CLiente){
        return(
            <td className="flex justify-center">
                {props.clienteSelecionado && (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                        {IconeEdição}
                    </button>   

                )}
                {props.clienteExcluido && (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                        {IconeLixo}
                    </button>
                )}

            </td>
        )
    }

    function renderizarDados(){
        return props.clientes?.map((cliente, i) => (
            <tr key={cliente.id} className={ `${i % 2 === 0? 'bg-blue-100': 'bg-blue-200'}`}>
                <td className="text-left p-4">{cliente.id}</td>
                <td className="text-left p-4">{cliente.nome}</td>
                <td className="text-left p-4">{cliente.idade}</td>
                {exibirAções && renderizarAcoes(cliente)}
            </tr>
        ))
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="bg-gradient-to-r from-blue-500 to-blue-800 text-gray-100">
                {renderizarCabeçalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}

export default Tabela
