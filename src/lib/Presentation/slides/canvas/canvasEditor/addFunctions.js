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
//////////////////////////////////
////////======Add Functions 
//////////////////////////////////

 function addEllipse(items){
    addNewItem({ 
          "translate" : true,
          "command": "ellipse",
          "name": "ellipse_" + randNo(),
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
          "useShowHide": false,
          "showAt": 0,
              "dash": 0,
              "globalAlpha" : 1,
              "gap": 0,
          },items);
  }
  function addCircle(items){
    addNewItem({
          "translate" : true,
          "name": "circle_"+ randNo(),
          "command": "circle",
          "x": 5,
          "y": 5,
          "radius": 100,
          "startAngle": 0 ,
          "endAngle": 360 ,
          "color": "red",
          "fill": false,
          "globalAlpha" : 1,
          "useShowHide": false,
          "showAt": 0,
              "lineWidth": 1,
              "dash": 0,
              "gap": 0,
          },items);
  }
  function addBezier(items){
    // debugger;
    addNewItem({
          "translate" : true,
          "name": "bezier_"+ randNo(),
          "command": "bezier",
          "x":  3,
          "y":  1,
          "x1": 29,
          "y1": 5,
          "x2": 3,
          "y2": 10,
          "color": "red",
          "lineWidth": 1,
          "globalAlpha" : 1,
          "useShowHide": false,
          "showAt": 0,
          "showHandle" : false,
          "dash": 0,
          "gap": 0,
          },items);
    
  }
  function addRect(items){
    addNewItem({
          "translate" : true,
          "name": "rect_"+ randNo(),
          "command": "rect",
          "x": 5,
          "y": 5,
          "width": 100,
          "height": 100,
          "color": "red",
          "filled": true,
          "useShowHide": false,
          "showAt": 0,
          "lineWidth": 1,
          "globalAlpha" : 1,
          "dash": 0,
          "gap": 0,
          },items);
  }
  function addAngleSymbol(items){
    addNewItem({
          "translate" : true,
          "name": "angleSymbol_" + randNo(),
          "command": "angleSymbol",
          "x": 20,
          "y": 9,
          "radius": 25,
          "ticks": 3,
          "startAngle": -90,
          "endAngle" : 0,
          "lineWidth" : 1,
          "useShowHide": false,
          "showAt": 0,
          "showOrigin" : false,
          "color" : 'black'
          },items);
  }
  function addDot(items){
    addNewItem({
          "translate" : true,
          "name": "dot_"+ randNo(),
          "command": "dot",
          "x": 5,
          "y": 5,
          "label": "label",
          "dot_width": 10,
          "dot_color": "red",
          "useShowHide": false,
          "showAt": 0,
          "text_color": "yellow",
          "text_size": 24,
          "fill": true,
          },items);
  }
 
  function gridCommandExists(items) {
    for (const item of items) {
      if (item.extra.command === 'grid') {
      return true;
      }
    }
    return false;
  }
  
  function addGrid(items){ //one grid allowed
    if(gridCommandExists()){
    toast.push("Grid already exists");
    return;
    }
    addNewItem({
              "translate" : true,
              "name": "grid_"+ randNo(),
              "command": "grid",
              "cellWidth": 50,
              "cellHeight": 50,
              "lineWidth": 1,
              "useShowHide": false,
              "showAt": 0,
              "lineColor": "green"
          },items);
    
  }
  
  function addPolygon(items){
    addNewItem({
      "points": [100,100,150,200,10,100],
              "translate": true,
              "name": "polygon_"+ randNo(),
              "command": "polygon",
              "color": "red",
              "filled": false,
              "lineWidth": 1,
              "globalAlpha" : 1,
              "useShowHide": false,
          "showAt": 0,
              "dash": 0,
              "gap": 0
    },items);
  }
  function addTri(items){
    addNewItem({
              "translate": true,
              "command": "triangle",
              "name": "triangle_"+ randNo(),
              "x1": 2,
              "y1": 2,
              "x2": 2,
              "y2": 8,
              "x3": 10,
              "y3": 10,
              "color": "red",
              "lineWidth": 2,
              "filled": false,
              "globalAlpha" : 1,
              "useShowHide": false,
          "showAt": 0,
              "dash": 0,
              "gap": 0,
    },items);
  }
  function addLines(items){
    addNewItem({
              "translate": true,
              "name": "lines_"+ randNo(),
              "command": "lines",
              "x": 3,
              "y": 3,
              "arr": "2,0,0,-1,3,2,-3,2,0,-1,-2,0,0,-2",
              "color": "black",
              "lineWidth": 1,
              "globalAlpha" : 1,
              "useShowHide": false,
          "showAt": 0,
              "dash": 0,
              "gap": 0,
    },items);
  }
  function addLine(items){
    addNewItem({
              "translate": true,
              "name": "line_"+ randNo(),
              "command": "line",
              "x1": 2,
              "y1": 2,
              "x2": 8,
              "y2": 8,
              "color": "red",
              "lineWidth": 2,
              "globalAlpha" : 1,
              "useShowHide": false,
          "showAt": 0,
              "dash": 0,
              "gap": 0,
    },items);
  }
  
  function addRay(items){
    addNewItem({
              "translate": true,
              "name": "ray"+ randNo(),
              "command": "ray",
              "x0": 2,
              "y0": 2,
              "x1": 8,
              "y1": 8,
              "lineColor": "yellow",
              "lineWidth": 2,
              "arrowWidth": 8,
              "arrowHeight": 12,
              "startArrow": true,
              "endArrow": true,
              "globalAlpha" : 1,
              "showAt": 0,
              "dash": 0,
              "gap": 0,
    },items);
  }
  function addRepeatDot(items){
    addNewItem({
      "translate": true,
      "name": "repeatDot_"+ randNo(),
      "command": "repeatDot",
      "numberOfDots": 5,
      "initialX": 1,
      "initialY": 1,
      "xFactor": 1,
      "yFactor": 0,
      "width": 5,
      "showAt": 0,
      "color": "yellow",
    },items);
  }
  function addRepeatText(items){
    addNewItem({
      "translate": true,
      "name": "repeatText_"+ randNo(),
      "command": "repeatText",
      "textArray": "1,2,3,4",
      "initialX": 4,
      "initialY": 4,
      "xFactor": 4,
      "yFactor": 0,
      "color": "black",
      "useShowHide": false,
          "showAt": 0,
      "font": "20px Arial"
    },items);
  }
  
  function addPara(items){
    addNewItem({
      "translate": true,
      "name": "para_"+ randNo(),
      "command": "para",
      "text": "Hello",
      "x": 4,
      "y": 4,
      "color": "black",
      "font": "20px Arial",
     "shadowOffsetX" : 0,
     "shadowOffsetY" : 0,
     "lineHeightOffset" : 0,
     "xOffset"        : 0,
     "shadowColor" : "gray",
     "globalAlpha" : 1,
     "useShowHide": false,
          "showAt": 0,
     "shadowBlur" : 0
  },items);
  }
  function addText(items){
    addNewItem({
      "translate": true,
      "name": "text_"+ randNo(),
      "command": "text",
      "text": "Hello",
      "x": 4,
      "y": 4,
      "color": "black",
      "font": "20px Arial",
     "shadowOffsetX" : 0,
     "shadowOffsetY" : 0,
     "shadowColor" : "gray",
     "useShowHide": false,
          "showAt": 0,
     "globalAlpha" : 1,
     "shadowBlur" : 0
  },items);
  }
  function addSprite(items){
    // debugger;
    addNewItem({
      "translate": true,
      "name": "sprite_"+ randNo(),
      "command": "sprite",
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
     "useShowHide": false,
          "showAt": 0,
     "globalAlpha" : 1,
     "shadowBlur" : 0
  },items);
  }

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