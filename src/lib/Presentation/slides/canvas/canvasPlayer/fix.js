//Any item with no TrPropxx properties 

//@ts-nocheck
import getProp from '../getProp';

export default function fix(items){

    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        // if(item.extra.command == 'repeatDot'){debugger;}
        fixMissingCommons(item);
        fixCommon(item);
        
        switch (item.extra.command) {
            case 'text':
                fix_text(item)
                break;
            case 'para':
                fix_para(item);
                break;
            case 'rect':
                break;
            case 'ellipse':
                break;
            case 'circle':
                break;
            case 'dot':
                break;
            case 'grid':
                break;
        
            default:
                throw new Error("item not found to change");
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

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fix_para(item){
    const properties = ['x','y']; 
    properties.forEach(prop => {
        if (item.extra.hasOwnProperty(prop) && typeof item.extra[prop] !== 'object') {
            item.extra[prop] = getProp(item.extra[prop]);
        }
    });
}

function fix_text(item){
    const properties = ['x','y','width','height','lineWidth', 'filled', 'dx' , 'dy','text']; 
    properties.forEach(prop => {
        if (item.extra.hasOwnProperty(prop) && typeof item.extra[prop] !== 'object') {
            item.extra[prop] = getProp(item.extra[prop]);
        }
    });
}
