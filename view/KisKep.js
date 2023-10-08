//view ba nem inportálunk képlistát
class KisKepekView {
    #kepekLista = [];
    //#adat ;

    constructor(kepek, SzuloElem) {
        this.#kepekLista = kepek;
        console.log(this.#kepekLista);
        this.SzuloElem = SzuloElem;

        this.#htmlOsszerak();

        this.SzuloElem.on('click', (event) => {
            this.#sajatEsemenykezelo("kicsikepKatt");
            console.log(event.detail);
            //console.log(this.#kepekLista[event.detail].eleres);
        });
    }
    #htmlOsszerak() {
        //csak egy képet jelenítsen meg majd
        let txt = "";

        for (const key in this.#kepekLista) {
            const element = this.#kepekLista[key];
            txt += `<div class="kisKepTarolo col-md-3">
            <img class="kiskep" src="${this.#kepekLista[key].eleres}" alt="${this.#kepekLista[key].cim}">
             </div>`;
        }
        this.SzuloElem.html(txt);
    }

    #sajatEsemenykezelo(esemenynev) {
        const esemenyem = new CustomEvent(esemenynev);
        window.dispatchEvent(esemenyem);
    }
}
export default KisKepekView;