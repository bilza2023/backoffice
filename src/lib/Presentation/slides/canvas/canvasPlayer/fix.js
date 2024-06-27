
//@ts-nocheck
import getProp from '../getProp';

export default function fix(items){
    // debugger;
    const properties = ['x','y','width','height','lineWidth', 'color', 'filled','globalAlpha' , 'gap' , 'dash','text']; // List of properties to check and fix

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        // if (item.extra.command === 'rect') {
            properties.forEach(prop => {
                if (item.extra.hasOwnProperty(prop) && typeof item.extra[prop] !== 'object') {
                    item.extra[prop] = getProp(item.extra[prop]);
                }
            });
        // }
    }
}
