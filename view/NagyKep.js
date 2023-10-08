class NagyKepView {
    #kep; //szöveges típus, de lehetne objektum is

    constructor(kep, SzuloElem) {
        //MIt akarunk megjeleníteni és hova
        this.#kep = kep;
        this.SzuloElem = SzuloElem;

        //HTML tag létrehozása
        this.#htmlOsszerak();
        //meg kell fogni a gombojkat
        this.balGombElem = $("#bal");
        this.jobbGombElem = $("#jobb");
        this.nagyKepHelye = $("#nagyKepHelye");

        this.balGombElem.on("click", () => {
            this.#sajatEsemenykezelo("bal");
        })

        this.jobbGombElem.on("click", () => {
            this.#sajatEsemenykezelo("jobb");
        })
    }

    nagyKepCsere(kep) {
        this.nagyKepHelye.attr("src", kep);
    }

    #sajatEsemenykezelo(esemenynev) {
        console.log(esemenynev);
        const esemenyem = new CustomEvent(esemenynev);
        window.dispatchEvent(esemenyem);
    }

    #htmlOsszerak() {
        let txt = `<button class="col-md-1" id='bal'>BAL</button>`
        txt += "";
        txt += `<div class="card col-md-10">
        <div class="card-header text-center">${this.#kep.cim}</div>
        <div class="card-body text-center">
        <img id="nagyKepHelye" src="${this.#kep.eleres}" class="img-thumbnail" alt="Cinque Terre"></div>
        <div class="card-footer text-center">${this.#kep.leiras}</div>
        </div>`;
        txt += `<button class="col-md-1" id='jobb'>JOBB</button>`
        this.SzuloElem.html(txt);
    }
}
export default NagyKepView;