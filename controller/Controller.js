import Modell from "../model/Modell.js";
import NagyKepView from "../view/NagyKep.js";

class Controller {
    constructor() {
        //Példányosítjuk a modellt
        const MODELL = new Modell();

        //példányosítjuk a viewt
        const NAGYKEPVIEW = new NagyKepView(MODELL.getAktualisKep(), $(".nagykep"));

    }
}
export default Controller;