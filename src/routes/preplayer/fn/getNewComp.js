//4-nov-2024
//@ts-nocheck
export default function getNewComp(){

return {
    //start of slide as per pulse
    startTime:0,
    //end of slide as per pulse
    endTime:0,
    //if a component has templates then that component has become a component module.
    template:'',
    //The type field provides us a chance to register our component inthe system. a comp is only displayed if it is issue a type from the engine.
    type: 'test',
    //-This can be changed from this place only --manually
    version:'0.0.0',
    //--this is the object that is different for each slide and hence is Mixed type.
    code : {},

};




}