<script>
  //@ts-nocheck
  import { toast } from '$lib/util';
  
  import {getNewItem} from '$lib/Presentation';
  import CanvasCommand from "./json-ui/commands/CanvasCommand.svelte";  
  import EditorToolbar from './EditorToolbar.svelte';
  import Toolbar from "./json-ui/Toolbar.svelte";
  import CanvasPlayer from '../canvasPlayer/CanvasPlayer.svelte';  
  import SelectItemMenu from './json-ui/SelectItemMenu.svelte';  
  import CommandUi from './json-ui/CommandUi.svelte';  
  import UiEntry from "./json-ui/UiEntry.svelte";

  export let items;
  export let extra;
  export let currentTime;
  let itemIndexInRightBar =0;
  let showCanvasInSdieBar =true;
  let ignoreShowAt =true;

  function toggleIgnoreShowAt(){
    ignoreShowAt = !ignoreShowAt;
  }
  // let itemInRightBar = null;
  function toggleShowCanvas(){showCanvasInSdieBar = !showCanvasInSdieBar;}
  
  // $:{itemIndexInRightBar; itemInRightBar = items[itemIndexInRightBar];}

  function addNewItem(data){
    const newItem = getNewItem();
    newItem.extra = data;      
    items.unshift(newItem);      
    items = [...items];
  }

  function moveUp(index) {
    debugger;
    if (index > 0 && index < items.length) {
        const item = items.splice(index, 1)[0];
        items.splice(index - 1, 0, item);
        items = [...items];
    }
}


function moveDown(index) {
    // debugger;
    if (index >= 0 && index < items.length - 1) {
        const item = items[index];
        items.splice(index, 1);
        items.splice(index + 1, 0, item);
        items = [...items];
    }
}


function clone(index) {
    // debugger;
    if (index >= 0 && index < items.length) {
        const clonedItem = JSON.parse(JSON.stringify(items[index]));
        items.unshift(clonedItem);
        items = [...items];
    }
}

 function del(index) {
      items.splice(index, 1);
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
  
  function addEllipse(){
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
          });
  }
  function addCircle(){
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
          });
  }
  function addBezier(){
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
          });
    
  }
  function addRect(){
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
          });
  }
  function addAngleSymbol(){
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
          });
  }
  function addDot(){
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
          });
  }
 
  function gridCommandExists() {
    for (const item of items) {
      if (item.extra.command === 'grid') {
      return true;
      }
    }
    return false;
  }
  
  function addGrid(){ //one grid allowed
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
          });
    
  }
  function addImage(){
    addNewItem({
              "translate": false,
              "name": "image_"+ randNo(),
              "command": "image",
              "image": "https://taleem-media.blr1.cdn.digitaloceanspaces.com/images/matrices/multiplication_step-04.png",
              "x": 100,
              "y": 0,
              "width": 300,
              "height": 300,
              "useShowHide": false,
              "showAt": 0,
              "globalAlpha" : 1
    });
  }
  function addPolygon(){
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
    });
  }
  function addTri(){
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
    });
  }
  function addLines(){
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
    });
  }
  function addLine(){
    addNewItem({
              "translate": true,
              "name": "line_"+ randNo(),
              "command": "line",
              "x1": 2,
              "y1": 2,
              "x2": 8,
              "y2": 8,
              "color": "black",
              "lineWidth": 2,
              "globalAlpha" : 1,
              "useShowHide": false,
          "showAt": 0,
              "dash": 0,
              "gap": 0,
    });
  }
  function addXYCross(){
    addNewItem({
              "translate": true,
              "name": "cross_"+ randNo(),
              "command": "ray",
              "x0": 1,
              "y0": 8,
              "x1": 19,
              "y1": 8,
              "lineColor": "blue",
              "lineWidth": 2,
              "arrowWidth": 8,
              "arrowHeight": 12,
              "startArrow": true,
              "endArrow": true
    });
    addNewItem({
              "translate": true,
              "command": "ray",
              "x0": 10,
              "y0": 1,
              "x1": 10,
              "y1": 14,
              "lineColor": "yellow",
              "lineWidth": 2,
              "arrowWidth": 8,
              "arrowHeight": 12,
              "startArrow": true,
              "endArrow": true
    });
  }
  function addRay(){
    addNewItem({
              "translate": true,
              "name": "ray"+ randNo(),
              "command": "ray",
              "x0": 2,
              "y0": 2,
              "x1": 8,
              "y1": 8,
              "lineColor": "black",
              "lineWidth": 2,
              "arrowWidth": 8,
              "arrowHeight": 12,
              "startArrow": true,
              "endArrow": true,
              "globalAlpha" : 1,
              "useShowHide": false,
          "showAt": 0,
              "dash": 0,
              "gap": 0,
    });
  }
  function addRepeatDot(){
    addNewItem({
      "translate": false,
      "name": "repeatDot_"+ randNo(),
      "command": "repeatDot",
      "numberOfDots": 5,
      "initialX": 25,
      "initialY": 25,
      "xFactor": 25,
      "yFactor": 0,
      "width": 5,
      "useShowHide": false,
          "showAt": 0,
      "color": "yellow",
    });
  }
  function addRepeatText(){
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
    });
  }
  
  function addPara(){
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
  });
  }
  function addText(){
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
  });
  }
  function redraw(){items = [...items];}
</script>

{#if items}
<!-- the editor top level div -->
<div class='p-2 bg-stone-900 '>

<EditorToolbar
{addRay}
{addText}
{addGrid}
{addRect}
{addLine}
{addCircle}
{addEllipse}
{addDot}
{addRepeatText}
{addRepeatDot}
{addImage}
{addXYCross}
{addTri}
{addPolygon}
{addAngleSymbol}
{addBezier}
{addLines}
{addPara}
{toggleShowCanvas}
{toggleIgnoreShowAt}
{ignoreShowAt}
/>
   
<!-- ////////////////////////////////////////////////////////  -->
<div class='flex justify-between gap-2'>

<div class='w-75'>
  <CanvasPlayer {items} {extra} pulse = {currentTime} {ignoreShowAt}/>
</div> 

<!-- div for json-ui -->
<div class='w-25 max-w-[25%] min-w-[25%]  bg-stone-600 rounded-md p-2'>
          
  
          {#if showCanvasInSdieBar}
              <SelectItemMenu {items} bind:itemIndexInRightBar={itemIndexInRightBar}/>
              <CommandUi  bind:item={items[itemIndexInRightBar]}  {redraw}/>
              <Toolbar  index={itemIndexInRightBar}  {moveUp} {moveDown} {del}  {clone}/>
          {:else}
              <CanvasCommand  bind:extra={extra}   />
          {/if}
          
</div>
</div>

</div><!--the editor top level div-->
{/if}
