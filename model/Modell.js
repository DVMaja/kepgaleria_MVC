import { KEPLISTA } from "./adat.js";

class Modell {
    #lista = []
    constructor() {
        this.#lista = KEPLISTA;

    }
    getList() {
        return this.#lista;
    }
}
export default Modell;