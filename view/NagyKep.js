class NagyKepView {
    #kep; //szöveges típus, de lehetne objektum is

    constructor(kep, SzuloElem) {
        //MIt akarunk megjeleníteni és hova
        this.#kep = kep;
        this.SzuloElem = SzuloElem;

        //HTML tag létrehozása
        this.#htmlOsszerak();
    }

    #htmlOsszerak() {
        let txt = "";
        txt = `<div class="card">
        <div class="card-header">Főkép</div>
        <div class="card-body">
        <img src="${this.#kep}" class="img-thumbnail" alt="Cinque Terre"></div>
        <div class="card-footer">Leírás</div>
        </div>`;
        this.SzuloElem.html(txt);
    }
}
export default NagyKepView;