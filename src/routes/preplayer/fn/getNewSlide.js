//4-nov-2024
//@ts-nocheck
/***
- No data from Presentation and Ample data from component internal.2
- DO NOT USE GLOBALS FROM PRESENTATION / ENGINE TO SLIDES 
- dont use callbacks in comps since they are just display items.its not an app its presentation.
 */

export default function getNewSlide(startTime, endTime,type,str){

return {
    //start of slide as per pulse
    startTime,
    //end of slide as per pulse
    endTime,
    //if a component has templates then that component has become a component module.
    type,
    //-This can be changed from this place only --manually
    //--using this we can switch Slides to different ENGINE.
    version:'0.0.0',
    //--this is the object that is different for each slide and hence is Mixed type.
    // ---it has extra filed too for more data {name : '' , value : ''}
    // -- i  have fol means to send data to a comp
        // - content :string : the default way
        // - content : JSON.stringify() to pack more data
        // - extra: Add data to the extra array (name,value pair)
        // - items : add more number of items as in table each cell is an item with its own content and extras.
        // -Also we can us the items array in a loop OR use it name by name.. so the saving / packing and usage here must coordinate
        // -items is basically an array and later can be used as a named object since the purpose of a comp is basically to display items
    items : [
        {name : '', content:str , showAt :0, hideAt:null , entryStyle:null , exitStyle:null , extra : []} ,
        {name : '', content:'content Two' , showAt :0, hideAt:null , entryStyle:null , exitStyle:null , extra : []}
    ],
    //---this is some data (key,value pair) that the COMPONENT (not the presentation) has of its own.for example in a table the number of rows and columns are not associated with any item rather with slide so we can add those here.
    compExtra : [
        {name : '' , value : ''}
    ],
    template:'',
    //The type field provides us a chance to register our component inthe system. a comp is only displayed if it is issue a type from the engine.

};




}