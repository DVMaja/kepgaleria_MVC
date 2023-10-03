//
//view ba nem inportálunk képlistát
class KisKepekView {
    #kepek = [];
    //#adat ;

    constructor(kep, SzuloElem) {
        this.#kep = kep;
        this.SzuloElem = SzuloElem;
        //this.adat= KEPLISTA;
        //console.log(this.#adat);
        this.#htmlOsszerak();
        console.log("elérhető")

    }
    #htmlOsszerak() {
        //csak egy képet jelenítsen meg
        let txt = "";
        txt += `<div class="row">`;
        for (const key in KEPLISTA) {
            const element = KEPLISTA[key];
            txt += `<div class=".col-md-3"><img class="kiskep" src="${KEPLISTA[key]}" alt="Cinque Terre"></div>`;
        }
        txt += `</div>`;
        this.SzuloElem.html(txt);
    }
}
export default KisKepekView;