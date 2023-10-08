import Modell from "../model/Modell.js";
import NagyKepView from "../view/NagyKep.js";
import KisKepekView from "../view/KisKep.js";

class Controller {
    constructor() {
        //Példányosítjuk a modellt
        const MODELL = new Modell();

        //példányosítjuk a viewt
        const NAGYKEPVIEW = new NagyKepView(MODELL.getAktualisKep(), $(".nagykep"));
        const KISKEPEKVIEW = new KisKepekView(MODELL.getList(), $(".kiskep"));


        //feliratkozunk a view eseményeire
        $(window).on("jobb", () => {
            //meg kell hívni a modell megfelelő tagfüggvényeit
            MODELL.jobb();
            let aktKep = MODELL.getAktualisKep();
            console.log(aktKep);
            //ezt a képet kéne belerakni a főkép helyére
            NAGYKEPVIEW.nagyKepCsere(aktKep.eleres);
            NAGYKEPVIEW.leirasCsere(aktKep.leiras);
            NAGYKEPVIEW.fejlecCsere(aktKep.cim);
        })

        $(window).on("bal", () => {
            MODELL.bal();
            let aktKep = MODELL.getAktualisKep();
            NAGYKEPVIEW.nagyKepCsere(aktKep.eleres);
            NAGYKEPVIEW.leirasCsere(aktKep.leiras);
            NAGYKEPVIEW.fejlecCsere(aktKep.cim);
        })

        $(window).on("kicsikepKatt", () => {
            //let aktKep = MODELL.getList();    
            //console.log(aktKep);
            //console.log(event.detail);
            //NAGYKEPVIEW.nagyKepCsere(aktKep.eleres);
            //console.log(NAGYKEPVIEW.nagyKepCsere(MODELL.getAktualisKep().eleres));
            console.log("katt");
        })

    }
}
export default Controller;