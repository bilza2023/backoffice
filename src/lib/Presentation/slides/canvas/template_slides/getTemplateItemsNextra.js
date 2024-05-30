
//@ts-nocheck
import {test} from "./test";
import {jt1} from "./jt1";
import {rnl} from "./rnl";

export default function getTemplateItemsNextra(template_name){
let ret = null;
    if(template_name == "test"){
    return {
        "items" : test.items,
        "extra" : test.extra,
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