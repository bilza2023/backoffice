
//@ts-nocheck

import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';
import RectangleObject from './RectangleObject';
import ImageObject from './ImageObject';
import LineObject from './LineObject';
import CircleObject from './CircleObject';
import RayObject from './RayObject';
import EllipseObject from './EllipseObject';
import TextObject from './TextObject';
import TriangleObject from './TriangleObject';
import ParaObject from './ParaObject';
import AngleObject from './AngleObject';
import SpriteObject from './SpriteObject';
import DotObject from './DotObject';


export default function itemToObject(item){
    let selectedItem;
    let lookFor = item.extra.command;
    
switch (lookFor) {

    case 'dot':
    selectedItem = new DotObject(item);
    break;
    case 'angleSymbol':
    selectedItem = new AngleObject(item);
    break;

    case 'sprite':
    selectedItem = new SpriteObject(item);
    break;

    case 'para':
    selectedItem = new ParaObject(item);
    break;

    case 'triangle':
    selectedItem = new TriangleObject(item);
    break;

    case 'text':
    selectedItem = new TextObject(item);
    break;

    case 'ellipse':
    selectedItem = new EllipseObject(item);
    break;

    case 'ray':
    selectedItem = new RayObject(item);
    break;
    case 'line':
    selectedItem = new LineObject(item);
    break;

    case 'rect':
    selectedItem = new RectangleObject(item);
    break;
    
    case 'image':
    selectedItem = new ImageObject(item);
    break;
    
    case 'circle':
    selectedItem = new CircleObject(item);
    break;

    default:
        if(!selectedItem){throw new Error("Item type not found");}
        break;
       
}

return selectedItem; 
}



///////////////////////////////////////////////////////////////////////////


// function selectedItem_XYWH(item){
 
//     let selectedItem = new SelectedItem(item);
//         // debugger;
//         let w = new AdderHandle('width',
//             item.extra.x.initialValue +  item.extra.width.initialValue -20 ,
//             item.extra.y.initialValue); 
//             selectedItem.handleObjects.push(w);
    
//             let h = new AdderHandle('height',
//             item.extra.x.initialValue +  item.extra.width.initialValue -20 ,
//             item.extra.y.initialValue  + item.extra.height.initialValue -20,);
    
//             h.lookingforX = false;
//             selectedItem.handleObjects.push(h);
           
//             let d = new DraggerHandle(
//             item.extra.x.initialValue  ,
//             item.extra.y.initialValue,
//             ); 
//             selectedItem.handleObjects.push(d);    

//     selectedItem.updateHandlePositions = function (){
//         const { x, y, width, height } = this.itemData.extra;
        
//         // Update width handle
//         this.handleObjects[0].updateXY(x.initialValue + width.initialValue - 20, y.initialValue);
        
//         // Update height handle
//         this.handleObjects[1].updateXY(x.initialValue + width.initialValue - 20, y.initialValue + height.initialValue - 20);
        
//         // Update dragger handle
//         this.handleObjects[2].updateXY(x.initialValue, y.initialValue);
//     } 
    
// return selectedItem; ///imp
// }//selectedItem4Rec