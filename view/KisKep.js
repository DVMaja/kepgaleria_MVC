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
        txt += `<div class="row">`;
        for (const key in KEPLISTA) {
            const element = KEPLISTA[key];
            txt += `<div ><img class="kiskep" src="${KEPLISTA[key]}" alt="Cinque Terre"></div>`;
        }
        txt += `</div>`;
        this.SzuloElem.html(txt);
    }
}
export default KisKepView;