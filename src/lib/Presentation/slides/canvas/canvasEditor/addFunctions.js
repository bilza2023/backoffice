//@ts-nocheck

// getProp creates prop for any type number , boolean , string , we do not need seperate property class for int , string etc
import getProp from '../getProp';
/**
 *31-may-2024 
* addNewItem is different from getNewItem. In Presentation lib every slide basically has its content placed in "items". we use "getNewItem" to get a generic Presentation item for a slide and then using  addNewItem(data) assign the data to the newly created item.extra.

* We can write any number of consumer functions  (like addEllipse,addCircle etc)for addNewItem(data) and it will create a blank item and assign item.extra to data. 
*
*/

function randNo(length=8){
    const digits = '0123456789';
  let result = '';
  const digitsLength = digits.length;
  for (let i = 0; i < length; i++) {
      result += digits.charAt(Math.floor(Math.random() * digitsLength));
  }
  return result;
}
function addReqExtraFields(obj,command,color="black"){
  obj.translate = true;
  obj.command = command;
  obj.name = command + "_" +randNo();
  
  obj.color = getProp(color),
  obj.showAt = 0;
  obj.globalAlpha = getProp(1);

  obj.gap= getProp(0);
  obj.dash= getProp(0);

  obj.shadowOffsetX = 0;
  obj.shadowOffsetY = 0;
  obj.shadowColor = "gray";
  obj.shadowBlur = 0;
  // === TOTAL 14 attrib 3Xsystem (name,command,translate) 1xcolor 4xvisibiity etc 2xdash-gap 4x shadow 
  return obj;
}
//////////////////////////////////
////////======Add Functions 
//////////////////////////////////

function addLine(items){
  const obj ={
            "x1": getProp(20),
            "y1": getProp(10),
            "x2": getProp(500),
            "y2": getProp(200),
            "lineWidth": getProp(2),              
  };
  return  addReqExtraFields(obj,"line","red"); 
}

function addLines(items){
  const obj ={
            "x": 3,
            "y": 3,
            "arr": "2,0,0,-1,3,2,-3,2,0,-1,-2,0,0,-2",
            "lineWidth": getProp(1),
  };
  return  addReqExtraFields(obj,"lines","yellow") 
}

function addRect(items){
    const obj = {
          "x": getProp(100),
          "y": getProp(100),
          "width": getProp(100),
          "height": getProp(100),
          "filled": getProp(false),
          "lineWidth": getProp(1),
          };
          return  addReqExtraFields(obj,"rect","red") 
  }
function addText(items){
  const obj ={
    "text": getProp("Hello"),
    "x": getProp(100),
    "y": getProp(100),
    "fontSize": getProp(20),
    "font": "20px Arial",
  };
return  addReqExtraFields(obj,"text","black") 
}
 function addEllipse(items){
  const obj = { 
    "x":          getProp(200),
    "y":          getProp(200),
    "radiusX":    getProp(50),
    "radiusY":    getProp(100),
    "rotation":   getProp(0),
    "startAngle": getProp(0),
    "endAngle":   getProp(360),
    "lineWidth":  getProp(1),
    "fill":       getProp(false),
       
    };

    return  addReqExtraFields(obj,"ellipse","red")
  }
  function addCircle(items){
    const obj = {
      "x": getProp(100),
      "y": getProp(150),
      "radius": getProp(100),
      "startAngle": getProp(0) ,
      "endAngle": getProp(360) ,
      "fill": getProp(false),
      "lineWidth": getProp(1),
      };
    return  addReqExtraFields(obj,"circle","red")
  }
  //-----not implemented
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
          };
    return  addReqExtraFields(obj,"bezier","red")      
    
  }
  //-----not implemented
  function addAngleSymbol(items){
    const obj = {
          "x": 100,
          "y": 100,
          "radius": 25,
          "ticks": 3,
          "startAngle": -90,
          "endAngle" : 0,
          "lineWidth" : 1,
          "showOrigin" : true,
          };
          return  addReqExtraFields(obj,"angleSymbol","red") 
  }
  
  function addDot(items){
    const obj = {
          "x": getProp(100),
          "y": getProp(100),
          "label": getProp("label"),
          "dot_width": getProp(10),
          "text_color": getProp("yellowbezier"),
          "text_size": getProp(24),
          "fill": getProp(true),
          };
          return  addReqExtraFields(obj,"dot","red") 
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
          return  addReqExtraFields(obj,"grid","red") 
  }
  
  function addPolygon(items){
    const obj ={
      "points": [100,100,150,200,10,100],
              "filled": false,
              "lineWidth": 1,
    };
    return  addReqExtraFields(obj,"polygon","red") 
  }

  function addTri(items){
    const obj ={
              "x1": getProp(100),
              "y1": getProp(100),
              "x2": getProp(50),
              "y2": getProp(200),
              "x3": getProp(200),
              "y3": getProp(200),
              "lineWidth": getProp(2),
              "filled": getProp(false),
    };
    return  addReqExtraFields(obj,"triangle","red") 
  }
 

  function addRay(items){
    const obj ={
              "x0":           getProp(100),
              "y0":           getProp(100),
              "x1":           getProp(800),
              "y1":           getProp(300),
              "lineWidth":    getProp(2),
              "arrowWidth":   getProp(8),
              "arrowHeight":  getProp(12),
              "startArrow": true,
              "endArrow": true,
    };
    return  addReqExtraFields(obj,"ray","yellow") 
  }

  function addRepeatDot(items){
    const obj ={
      "numberOfDots": 5,
      "initialX": 100,
      "initialY": 100,
      "xFactor": 30,
      "yFactor": 0,
      "width": 5,
    };
    return  addReqExtraFields(obj,"repeatDot","yellow") 
  }
  function addRepeatText(items){
    const obj ={
      "textArray":  "1,2,3,4",
      "initialX":   getProp(100),
      "initialY":   getProp(100),
      "xFactor":    getProp(30),
      "yFactor":    getProp(0),
      "font":       "20px Arial"
    };
    return  addReqExtraFields(obj,"repeatText","red"); 
  }
  
  function addPara(items){
    const obj ={
      "text": "Hello \n Hello \n Hello",
      "x": getProp(100),
      "y": getProp(100),
      "font": "20px Arial",
      "fontSize": getProp(20),
      "lineHeightOffset" : 10,
      "xOffset"        : 10,
  };
  return  addReqExtraFields(obj,"para","red"); 
  }
  
  function addSysImage(items){
    const obj ={
      "src": "system_images/gen/wood.jpg",
      "x": getProp(1),
      "y": getProp(1),
      "width":  getProp(5),
      "height": getProp(4),
    };
  return  addReqExtraFields(obj,"sysImage") ;
  }
  
 function addImage(){
// const img = new Image();
// img.src = 'https://taleem-media.blr1.cdn.digitaloceanspaces.com/bucket/wood.jpg';

// img.onload = () => {
            const obj ={
              "src": 'wood',
              "image": null,
              "x": 50,
              "y": 50,
              "ext": 'jpg',
              "width": 200,
              "height": 200,
            };
  return  addReqExtraFields(obj,"image");
      // };
    
  }
  function addSprite(items){
    // debugger;
    const obj ={
      "spriteId": "000",
      "sheet": "students",
      "sheetItem": "student_w_tablet",
      "dx": getProp(100),
      "dy": getProp(100),
      "wFactor" : 0.5,
      "hFactor" : 0.5,
    };
  return  addReqExtraFields(obj,"sprite","red"); 
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
                addSprite,
                addSysImage,
                addImage
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
