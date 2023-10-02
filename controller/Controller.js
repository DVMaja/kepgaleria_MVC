import Modell from "../model/Modell.js";
import NagyKepView from "../view/NagyKep.js";
import KisKepView from "../view/KisKep.js";

class Controller {
    constructor() {
        //Példányosítjuk a modellt
        const MODELL = new Modell();

        //példányosítjuk a viewt
        const NAGYKEPVIEW = new NagyKepView(MODELL.getAktualisKep(), $(".nagykep"));
        const KISKEPVIEW = new KisKepView(MODELL.getAktualisKep(), $(".kiskep"));
        //feliratkozunk a view eseményeire
        $(window).on("jobb", () => {
            //meg kell hívni a modell megfelelő tagfüggvényeit
            MODELL.jobb();
            let aktKep = MODELL.getAktualisKep();
            console.log(aktKep);
            //ezt a képet kéne belerakni a főkép helyére
            NAGYKEPVIEW.nagyKepCsere(aktKep);
        })

        $(window).on("bal", () => {
            //meg kell hívni a modell megfelelő tagfüggvényeit
            MODELL.bal();
            let aktKep = MODELL.getAktualisKep();
            console.log(aktKep);
            //ezt a képet kéne belerakni a főkép helyére
            NAGYKEPVIEW.nagyKepCsere(aktKep);
        })
    }
}
export default Controller;