
//@ts-nocheck
import {imgW4lbl} from "./imgW4lbl";
import {imgW2lbl} from "./imgW2lbl";
import {jt1} from "./jt1";
import {rnl} from "./rnl";

export default function getTemplateItemsNextra(template_name){
let ret = null;
    if(template_name == "imgW4lbl"){
    return {
        "items" : imgW4lbl.items,
        "extra" : imgW4lbl.extra,
    }
    }
    if(template_name == "imgW2lbl"){
    return {
        "items" : imgW2lbl.items,
        "extra" : imgW2lbl.extra,
    }
    }
    if(template_name == "jt1"){
    return {
        "items" : jt1.items,
        "extra" : jt1.extra,
    }
    }
    if(template_name == "rnl"){
    return {
        "items" : rnl.items,
        "extra" : rnl.extra,
    }
    }
    

}