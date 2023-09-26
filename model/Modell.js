import { KEPLISTA } from "./adat.js";

class Modell {
    #lista = []
    #id;
    constructor() {
        //ez jellemzi a program aktuális állapotát. 
        this.#lista = KEPLISTA;
        this.#id = 0;

    }
    getList() {
        return this.#lista;
    }

    getAktualisKep() {
        return this.#lista[this.#id];
    }

    jobb() {
        //Növeli az ID értékét
        this.#id++;
        if (this.#id >= this.#lista.length) {
            this.#id = 0;
        }
    }

    bal() {
        //Csökkenti az ID értékét
        this.#id--;
        if (this.#id < 0) {
            this.#id = this.#lista.length - 1;
        }
    }

}
export default Modell;