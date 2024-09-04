
//@ts-nocheck

import SelectedItem from "./SelectedItem";
import DraggerHandle from './handleObject/DraggerHandle';
import AdderHandle from './handleObject/AdderHandle';


export default function getSelectedItem(item){
    let selectedItem;
    let lookFor = item.extra.command;

switch (lookFor) {
    case 'rect':
        selectedItem = new SelectedItem(item);
        // debugger;
        let w = new AdderHandle('width',
            item.extra.x.initialValue +  item.extra.width.initialValue -20 ,
            item.extra.y.initialValue); 
            selectedItem.handleObjects.push(w);
    
            let h = new AdderHandle('height',
            item.extra.x.initialValue +  item.extra.width.initialValue -20 ,
            item.extra.y.initialValue  + item.extra.height.initialValue -20,);
    
            h.lookingforX = false;
            selectedItem.handleObjects.push(h);
           
            let d = new DraggerHandle(
            item.extra.x.initialValue  ,
            item.extra.y.initialValue,
            ); 
            selectedItem.handleObjects.push(d);    
    break;

    default:
        if(!selectedItem){throw new Error("Item type not found");}
        break;
       
}

return selectedItem; 
}