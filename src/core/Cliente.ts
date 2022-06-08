export default class Cliente{
    /**
     * Mudar o target do ts config para o es2015
     * para utilizar o # como propriedade privada
     */
    #id: string
    #nome: string
    #idade: number

    constructor(nome:string,idade:number,id:string =null){
        
        this.#id = id;
        this.#idade = idade;
        this.#nome = nome;
    }

    static vazio(){
        return new Cliente('',0);
    }

    // getters
    get id(){
        return this.#id;
    }
    get nome(){
        return this.#nome;
    }
    get idade(){
        return this.#idade;
    }
}