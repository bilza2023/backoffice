//4-nov-2024
//@ts-nocheck
/***
- No data from Presentation and Ample data from component internal.2
- DO NOT USE GLOBALS FROM PRESENTATION / ENGINE TO SLIDES 
- dont use callbacks in comps since they are just display items.its not an app its presentation.
 */
// import { uuid } from "$lib/util";
export default function getNewSlide( startTime, endTime, type, items, slideExtra=[], template='') {

return {
    startTime,
    endTime,
    type,
    version:'0.0.0',
    items, 
    slideExtra,
    template,
};




}