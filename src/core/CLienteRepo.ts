import CLiente from "./Client";

export default interface ClienteRepositorio{
    salvar(cliente: CLiente): Promise<CLiente>
    excluir(cliente: CLiente): Promise<void>
    obter(): Promise<CLiente[]>
}