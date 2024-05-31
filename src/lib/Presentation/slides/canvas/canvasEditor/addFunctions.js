//@ts-nocheck
import {getNewItem} from '$lib/Presentation';
/**
   *31-may-2024 
   * addNewItem is different from getNewItem. In Presentation lib every slide basically has its content placed in "items". we use "getNewItem" to get a generic Presentation item for a slide and then using  addNewItem(data) assign the data to the newly created item.extra.
   
   * We can write any number of consumer functions  (like addEllipse,addCircle etc)for addNewItem(data) and it will create a blank item and assign item.extra to data. 
   *
   *
   */
   function addNewItem(data,items){
    const newItem = getNewItem();
    newItem.extra = data;      
    items.unshift(newItem);      
    items = [...items];
  }

function randNo(length=8){
    const digits = '0123456789';
  let result = '';
  const digitsLength = digits.length;
  for (let i = 0; i < length; i++) {
      result += digits.charAt(Math.floor(Math.random() * digitsLength));
  }
  return result;
}
function addReqExtraFields(obj,command,color){
  obj.translate = true;
  obj.command = command;
  obj.name = command + "_" +randNo();
  
  obj.color = color;
  //hide at is used when it is larger than showAt. for other use cases use other variables.e.g use "visibility for blinking"
  obj.hideAt = 0;
  obj.showAt = 0;
  
  obj.visibility = 0;
  obj.globalAlpha = 1;
  return obj;
}
//////////////////////////////////
////////======Add Functions 
//////////////////////////////////

 function addEllipse(items){
  const obj = { 
    "x": 15,
    "y": 7,
    "radiusX": 50,
    "radiusY": 100,
    "rotation": 0,
    "startAngle": 0,
    "endAngle": 360,
    "lineWidth": 1,
    "color": "red",
    "fill": false,
        "dash": 0,
        "gap": 0,
    };

    addNewItem(addReqExtraFields(obj,"ellipse","red"),items);
  }
  function addCircle(items){
    const obj = {
      "x": 5,
      "y": 5,
      "radius": 100,
      "startAngle": 0 ,
      "endAngle": 360 ,
      "color": "red",
      "fill": false,
      "lineWidth": 1,
      "dash": 0,
      "gap": 0,
      };
    addNewItem(addReqExtraFields(obj,"circle","red"),items);
  }
  function addBezier(items){
    // debugger;
    const obj = {
          "x":  3,
          "y":  1,
          "x1": 29,
          "y1": 5,
          "x2": 3,
          "y2": 10,
          "lineWidth": 1,
          "showHandle" : false,
          "dash": 0,
          "gap": 0,
          };
    addNewItem(addReqExtraFields(obj,"bezier","red"),items);      
    
  }
  function addRect(items){
    const obj = {
          "x": 5,
          "y": 5,
          "width": 100,
          "height": 100,
          "filled": false,
          "lineWidth": 1,
          "dash": 0,
          "gap": 0,
          };
          addNewItem(addReqExtraFields(obj,"rect","red"),items); 
  }
  function addAngleSymbol(items){
    const obj = {
          "x": 20,
          "y": 9,
          "radius": 25,
          "ticks": 3,
          "startAngle": -90,
          "endAngle" : 0,
          "lineWidth" : 1,
          "showOrigin" : false,
          };
          addNewItem(addReqExtraFields(obj,"angleSymbol","red"),items); 
  }
  function addDot(items){
    const obj = {
          "x": 5,
          "y": 5,
          "label": "label",
          "dot_width": 10,
          "text_color": "yellowbezier",
          "text_size": 24,
          "fill": true,
          };
          addNewItem(addReqExtraFields(obj,"dot","red"),items); 
  }
  
  function addGrid(items){ //one grid allowed
    if(gridCommandExists()){
    toast.push("Grid already exists");
    return;
    }
    const obj ={
              "cellWidth": 50,
              "cellHeight": 50,
              "lineWidth": 1,
              "lineColor": "green"
          };
          addNewItem(addReqExtraFields(obj,"grid","red"),items); 
  }
  
  function addPolygon(items){
    const obj ={
      "points": [100,100,150,200,10,100],
              "filled": false,
              "lineWidth": 1,
              "dash": 0,
              "gap": 0
    };
    addNewItem(addReqExtraFields(obj,"polygon","red"),items); 
  }
  function addTri(items){
    const obj ={
              "x1": 2,
              "y1": 2,
              "x2": 2,
              "y2": 8,
              "x3": 10,
              "y3": 10,
              "lineWidth": 2,
              "filled": false,
              "dash": 0,
              "gap": 0,
    };
    addNewItem(addReqExtraFields(obj,"triangle","red"),items); 
  }
  function addLines(items){
    const obj ={
              "x": 3,
              "y": 3,
              "arr": "2,0,0,-1,3,2,-3,2,0,-1,-2,0,0,-2",
              "lineWidth": 1,
              "dash": 0,
              "gap": 0,
    };
    addNewItem(addReqExtraFields(obj,"lines","yellow"),items); 
  }
  function addLine(items){
    const obj ={
              "x1": 2,
              "y1": 2,
              "x2": 8,
              "y2": 8,
              "lineWidth": 2,              
              "dash": 0,
              "gap": 0,
    };
    addNewItem(addReqExtraFields(obj,"line","red"),items); 
  }
  
  function addRay(items){
    const obj ={
              "x0": 2,
              "y0": 2,
              "x1": 8,
              "y1": 8,
              "lineWidth": 2,
              "arrowWidth": 8,
              "arrowHeight": 12,
              "startArrow": true,
              "endArrow": true,
              "dash": 0,
              "gap": 0,
    };
    addNewItem(addReqExtraFields(obj,"ray","yellow"),items); 
  }
  function addRepeatDot(items){
    const obj ={
      "numberOfDots": 5,
      "initialX": 1,
      "initialY": 1,
      "xFactor": 1,
      "yFactor": 0,
      "width": 5,
    };
    addNewItem(addReqExtraFields(obj,"repeatDot","yellow"),items); 
  }
  function addRepeatText(items){
    const obj ={
      "textArray": "1,2,3,4",
      "initialX": 4,
      "initialY": 4,
      "xFactor": 4,
      "yFactor": 0,
      "font": "20px Arial"
    };
    addNewItem(addReqExtraFields(obj,"repeatText","red"),items); 
  }
  
  function addPara(items){
    const obj ={
      "text": "Hello",
      "x": 4,
      "y": 4,
      "font": "20px Arial",
     "shadowOffsetX" : 0,
     "shadowOffsetY" : 0,
     "lineHeightOffset" : 0,
     "xOffset"        : 0,
     "shadowColor" : "gray",
     "shadowBlur" : 0
  };
  addNewItem(addReqExtraFields(obj,"para","red"),items); 
  }
  function addText(items){
    const obj ={
      "text": "Hello",
      "x": 4,
      "y": 4,
      "font": "20px Arial",
     "shadowOffsetX" : 0,
     "shadowOffsetY" : 0,
     "shadowColor" : "gray",
     "shadowBlur" : 0
    };
  addNewItem(addReqExtraFields(obj,"text","black"),items); 
  }
  function addSprite(items){
    // debugger;
    const obj ={
      "spriteId": "000",
      "sheet": "students",
      "sheetItem": "student_w_tablet",
      "dx": 0,
      "dy": 0,
      "wFactor" : 1,
      "hFactor" : 1,
     "shadowOffsetX" : 0,
     "shadowOffsetY" : 0,
     "shadowColor" : "gray",
     "shadowBlur" : 0
    };
  addNewItem(addReqExtraFields(obj,"sprite","red"),items); 
  }
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

export {   
                addEllipse,
                addCircle,
                addBezier,
                addRect,
                addAngleSymbol,
                addDot,
                addGrid,
                addPolygon,
                addTri,
                addLines,
                addLine,
                addRay,
                addRepeatDot,
                addRepeatText,
                addPara,
                addText,
                addSprite
 }

 ////////////////////////////////////////////////////////////////

 function gridCommandExists(items) {
  for (const item of items) {
    if (item.extra.command === 'grid') {
    return true;
    }
  }
  return false;
}
