import Modell from "../model/Modell.js";
import NagyKepView from "../view/NagyKep.js";
import KisKepView from "../view/KisKep.js";
import { KEPLISTA } from "../model/adat.js";

class Controller {
    constructor() {
        //Példányosítjuk a modellt
        const MODELL = new Modell();

        //példányosítjuk a viewt
        const NAGYKEPVIEW = new NagyKepView(MODELL.getAktualisKep(), $(".nagykep"));
        //const KISKEPEKVIEW = new KisKepekView(KEPLISTA, $(".kiskep"));
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
            //meg kell hívni a modell megfelelő tagfüggvényeit
            MODELL.bal();
            let aktKep = MODELL.getAktualisKep();
            console.log(aktKep);
            //ezt a képet kéne belerakni a főkép helyére
            NAGYKEPVIEW.nagyKepCsere(aktKep.eleres);
            NAGYKEPVIEW.leirasCsere(aktKep.leiras);
            NAGYKEPVIEW.fejlecCsere(aktKep.cim);
        })
    }
}
export default Controller;