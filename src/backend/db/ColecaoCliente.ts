
import CLiente from "../../core/Client";
import ClienteRepositorio from "../../core/CLienteRepo";
import firebase from "../config";


export default class ColecaoCliente implements ClienteRepositorio {

    #conversor = {
        toFirestore(cliente: CLiente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
        fromFirestore(
                snapshot: firebase.firestore.QueryDocumentSnapshot, 
                options: firebase.firestore.SnapshotOptions): CLiente 
            {
            const dados = snapshot.data(options)
            return new CLiente(dados.nome, dados.idade, snapshot.id)
        }
    }
    
    async salvar(cliente: CLiente): Promise<CLiente> {
        if(cliente?.id) {
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente
        } else {
            const docRef = await this.colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(cliente: CLiente): Promise<void> {
        return this.colecao().doc(cliente.id).delete()
    }

    async obter(): Promise<CLiente[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
        return firebase
            .firestore().collection('clientes')
            .withConverter(this.#conversor)
    }
}