//Any item with no TrPropxx properties 

//@ts-nocheck
import getProp from '../../lib/Presentation/slides/canvas/getProp';

export default function fix(slides){

    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        fix2(slide.items);
        
    }
}

 function fix2(items){

    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        fixMissingCommons(item);
        fixCommon(item);
        
        switch (item.extra.command) {
            
            case 'line':
                fix_final(item , [
                    "x1",
                    "y1",
                    "x2",
                    "y2",
                    "lineWidth",
                ]);
                break;
            case 'rect':
                fix_final(item , [
                        "x",
                        "y",
                        "width",
                        "height",
                        "filled",
                        "lineWidth",
                ]);
                break;
                case 'text':
                    fix_final(item , ['x','y','text']);
                    break;
            case 'ellipse':
                fix_final(item , [
                        "x",
                        "y",
                        "radiusX",
                        "radiusY",
                        "rotation",
                        "startAngle",
                        "endAngle",
                        "lineWidth",
                        "fill",
                ]);
                break;
            case 'circle':
                fix_final(item , [
                    "x",
                    "y",
                    "radius",
                    "startAngle",
                    "endAngle",
                    "fill",
                    "lineWidth",
                ]);
                break;
            case 'dot':
                fix_final(item , [
                    "x",
                    "y",
                    "label",
                    "dot_width",
                    "text_color",
                    "text_size",
                    "fill",
                ]);
                break;
            case 'triangle':
                fix_final(item , [
                    "x1",
                    "y1",
                    "x2",
                    "y2",
                    "x3",
                    "y3",
                    "lineWidth",
                    "filled",
                ]);
                break;
            case 'ray':
                fix_final(item , [
                    "x0",
                    "y0",
                    "x1",
                    "y1",
                    "lineWidth",
                    "arrowWidth",
                    "arrowHeight",
                ]);
                break;
          
            case 'repeatText':
                fix_final(item , [
                    "textArray",
                    "initialX",
                    "initialY",
                    "xFactor",
                    "yFactor",
                ]);
                break;
            case 'para':
                fix_final(item , [
                    "x",
                    "y",
                ]);
                break;
            case 'sprite':
                fix_final(item , [
                    "dx",
                    "dy",
                ]);
                break;
        
            default:
                // do nothing here since all items are not processed
                // throw new Error("item not found to change");
                break;
        }        
    } // Close the for loop

} // Close the fix function
/////////////////////////////////////////////////
function fixCommon(item){
    const properties = ['color', 'globalAlpha' , 'gap' , 'dash']; 
    properties.forEach(prop => {
        if (item.extra.hasOwnProperty(prop) && typeof item.extra[prop] !== 'object') {
            item.extra[prop] = getProp(item.extra[prop]);
        }
    });
}

function fixMissingCommons(item) {
    const properties = ['color', 'globalAlpha', 'gap', 'dash'];
    if (!item.extra.color) {item.extra.color = getProp('gray');}
    if (!item.extra.globalAlpha) {item.extra.globalAlpha = getProp(1);}
    if (!item.extra.gap) {item.extra.gap = getProp(0);}
    if (!item.extra.dash) {item.extra.dash = getProp(0);}
}

function fix_final(item,props=[]){
    props.forEach(prop => {
        if (item.extra.hasOwnProperty(prop) && typeof item.extra[prop] !== 'object') {
            item.extra[prop] = getProp(item.extra[prop]);
        }
    });
}
