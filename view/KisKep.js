import { KEPLISTA } from "../model/adat.js";
class KisKepView {
    #kep;
    //#adat = [];

    constructor(kep, SzuloElem) {
        this.#kep = kep;
        this.SzuloElem = SzuloElem;
        //this.adat= KEPLISTA;
        //console.log(this.#adat);
        this.#htmlOsszerak();
        console.log("elérhető")

    }
    #htmlOsszerak() {
        let txt = "";
        for (const key in KEPLISTA) {
            const element = KEPLISTA[key];
            txt += `<div class="row">        
            <div class="col p-3><img class="kiskep" src="${KEPLISTA[key]}" alt="Cinque Terre"></div>        
            </div>`;
        }
        this.SzuloElem.html(txt);
    }
}
export default KisKepView;