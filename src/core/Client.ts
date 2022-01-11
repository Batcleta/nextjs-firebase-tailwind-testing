export default class CLiente{

    #id: string
    #nome: string
    #idade: number

    constructor(nome: string, idade: number, id: string = null){
        this.#nome = nome
        this.#idade = idade
        this.#id = id
    }

    static vazio(){
        new CLiente("", 0)
    }

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get idade() {
        return this.#idade
    }
}