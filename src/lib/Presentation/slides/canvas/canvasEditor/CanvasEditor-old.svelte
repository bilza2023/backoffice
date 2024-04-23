<script>
    //@ts-nocheck
    import { onMount,toast } from '$lib/util';
    
    import { onDestroy } from 'svelte';
    import {getNewItem} from '$lib/Presentation';
    import DrawLibInterpretor from '../drawLib/drawLibInterpretor';
    import EditorToolbar from './EditorToolbar.svelte';
    import CanvasCommand from "./json-ui/commands/CanvasCommand.svelte";   
    import UiEntry from "./json-ui/UiEntry.svelte";
    export let items;
    export let slideExtra = [];
    export let currentTime;
  
    let canvasWidth = 1000;
    let canvasHeight = 360;
    let canvas;
    let ctx;
    let json;
    let intervalId;

    onMount(() => {
      
      // debugger;
      // if (!items[0] || !items[0].content) {
      //   throw new Error("Canvas data not found");      
      // }else {
      //   json = JSON.parse(items[0].content);
      //   // debugger;
      // }
      // if(!json.xFactor){
      //   json.xFactor = 0;
      // }
      intervalId = setInterval(() => gameloop(), 1000);
    });
  
    onDestroy(() => {
      // Stop the interval when the component is unloaded
      clearInterval(intervalId);
    });

    function addNewItem(data){
      debugger;
      const newItem = getNewItem();
      newItem.extra = data;      
      items.push(newItem);      
      items = [...items];
    }
    function moveUp(index) {
        // if (index > 0) {
        //     const item = json.commands.splice(index, 1)[0];
        //     json.commands.splice(index - 1, 0, item);
        //     json.commands = [...json.commands];
        //     json = {...json};
        // }
    }

    function moveDown(index) {
        // debugger;
        // if (index < json.commands.length - 1) {
        //     const item = json.commands.splice(index, 1)[0];
        //     json.commands.splice(index + 1, 0, item);
        //     json.commands = [...json.commands];
        //     json = {...json};
        // }
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
    
    
    function del(index) {
        // json.commands.splice(index, 1);
        // json.commands = [...json.commands];
        // json = {...json};
    }

    function addEllipse(){
      let n  = {
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
                "dash": 0,
                "globalAlpha" : 1,
                "gap": 0,
            };
            addNewItem(data);
    }
    function addCircle(){
      let n  = {
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
                "lineWidth": 1,
                "dash": 0,
                "gap": 0,
            };
      json.commands.push(n);
      json = {...json};
    }
    function addBezier(){
      // debugger;
      let ray  = {
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
            "showHandle" : false,
            "dash": 0,
            "gap": 0,
            };
      json.commands.push(ray);
      json = {...json};
      
    }
    function addRect(){
      let ray  = {
            "translate" : true,
            "name": "rect_"+ randNo(),
            "command": "rect",
            "x": 5,
            "y": 5,
            "width": 100,
            "height": 100,
            "color": "red",
            "filled": true,
                "lineWidth": 1,
                "globalAlpha" : 1,
                "dash": 0,
                "gap": 0,
            };
      json.commands.push(ray);
      json = {...json};
      
    }
    function addPerpendSymbol(){
      // , ,  = 0, ,  = 'black'
      let n  = {
            "command": "perpendSymbol",
            "name": "perpendSymbol_" + randNo(),
            "x": 100,
            "y": 100,
            "x1": 50,
            "y1": 100,
            "x2": 100,
            "y2": 50,
            "lineWidth" : 1,
            "color" : 'black'
            };
      json.commands.push(n);
      json = {...json};
      
    }
    function addAngleSymbol(){
      // , ,  = 0, ,  = 'black'
      let n  = {
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
            "showOrigin" : false,
            "color" : 'black'
            };
      json.commands.push(n);
      json = {...json};
      
    }
    function addDot(){
      let n  = {
            "translate" : true,
            "name": "dot_"+ randNo(),
            "command": "dot",
            "x": 5,
            "y": 5,
            "label": "label",
            "dot_width": 10,
            "dot_color": "red",
            "text_color": "yellow",
            "text_size": 24,
            "fill": true,
            };
      json.commands.push(n);
      json = {...json};
      
    }
   
    function gridCommandExists(commands) {
      for (const item of commands) {
        if (item.command === 'grid') {
        return true;
        }
      }
      return false;
    }
    
    function addGrid(){ //one grid allowed
      if(gridCommandExists(json.commands)){
      toast.push("Grid already exists");
      return;
      }
      let ray  = {
                "translate" : true,
                "name": "grid_"+ randNo(),
                "command": "grid",
                "cellWidth": 50,
                "cellHeight": 50,
                "lineWidth": 1,
                "lineColor": "green"
            };
      json.commands.push(ray);
      json = {...json};
      
    }
    function addImage(){
      let n  = {
                "translate": false,
                "name": "image_"+ randNo(),
                "command": "image",
                "image": "https://taleem-media.blr1.cdn.digitaloceanspaces.com/images/matrices/multiplication_step-04.png",
                "x": 100,
                "y": 0,
                "width": 300,
                "height": 300,
                "globalAlpha" : 1
      };
      json.commands.push(n);
      json = {...json};
      
    }
    function addPolygon(){
      let n  = {
        "points": [100,100,150,200,10,100],
                "translate": true,
                "name": "polygon_"+ randNo(),
                "command": "polygon",
                "color": "red",
                "filled": false,
                "lineWidth": 1,
                "globalAlpha" : 1,
                "dash": 0,
                "gap": 0
      };
      json.commands.push(n);
      json = {...json};
      
    }
    function addTri(){
      let n  = {
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
                "dash": 0,
                "gap": 0,
      };
      json.commands.push(n);
      json = {...json};
      
    }
    function addLines(){
      let n  = {
                "translate": true,
                "name": "lines_"+ randNo(),
                "command": "lines",
                "x": 3,
                "y": 3,
                "arr": "2,0,0,-1,3,2,-3,2,0,-1,-2,0,0,-2",
                "color": "black",
                "lineWidth": 1,
                "globalAlpha" : 1,
                "dash": 0,
                "gap": 0,
      };
      json.commands.push(n);
      json = {...json};
      
    }
    function addLine(){
      let n  = {
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
                "dash": 0,
                "gap": 0,
      };
      json.commands.push(n);
      json = {...json};
      
    }
    function addXYCross(){
      let r1  = {
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
      };
      let r2  = {
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
      };
      json.commands.push(r1);
      json.commands.push(r2);
      json = {...json};
      
    }
    function addRay(){
      let ray  = {
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
                "dash": 0,
                "gap": 0,
      };
      json.commands.push(ray);
      json = {...json};
      
    }
    function addRepeatDot(){
      let n = {
        "translate": false,
        "name": "repeatDot_"+ randNo(),
        "command": "repeatDot",
        "numberOfDots": 5,
        "initialX": 25,
        "initialY": 25,
        "xFactor": 25,
        "yFactor": 0,
        "width": 5,
        "color": "yellow",
    };
      json.commands.push(n);
      json = {...json};
      
    }
    function addRepeatText(){
      let n = {
        "translate": true,
        "name": "repeatText_"+ randNo(),
        "command": "repeatText",
        "textArray": "1,2,3,4",
        "initialX": 4,
        "initialY": 4,
        "xFactor": 4,
        "yFactor": 0,
        "color": "black",
        "font": "20px Arial"
    };
      json.commands.push(n);
      json = {...json};
      
    }
    
    function addText(){
      let n = {
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
       "globalAlpha" : 1,
       "shadowBlur" : 0
    };
      json.commands.push(n);
      json = {...json};
      
    }
    // Main game loop function
    function gameloop() {
      // debugger;
      if(!canvas){return;}
      ctx = canvas.getContext('2d');
      let drawLibInterpretor = new DrawLibInterpretor(canvas, ctx,'green' );
      //===xFactor added from json
      // drawLibInterpretor.xFactor = json.xFactor;
      drawLibInterpretor.xFactor = 0;
      try {
        if (items){
          drawLibInterpretor.interpret(items);
        } else {
          drawLibInterpretor.jsonError('Invalid JSON or missing payload field');
        }
      } catch (error) {
        drawLibInterpretor.jsonError();
      }
    }
    
    function calculateIndex(length, reverseIndex) {
    return length - reverseIndex - 1;
    }
    function clone(index) {
    //   debugger;
    // if (index >= 0 && index < json.commands.length) {
    //     const itemToClone = JSON.stringify(json.commands[index]);
    //     const clonedItem = JSON.parse(itemToClone);
    //     json.commands.push(clonedItem);
    //     json = {...json};
    // }
   }

</script>
  
{#if json}
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
  {addPerpendSymbol}
  {addBezier}
  {addLines}
  />
    
 <!-- ////////////////////////////////////////////////////////  -->
 <div class='flex justify-between'>

  <div class='w-70 '>
    <canvas bind:this={canvas} width={canvasWidth} height={canvasHeight}></canvas>
  </div>

  <!-- div for json-ui -->
  <div class='w-30'>
            <div class='flex flex-col'>
                {#each items.slice().reverse()  as item,index}
                    <div class="flex justify-center bg-stone-700 p-1 m-1 rounded-md border-2 border-white ">                       
                        <div class="flex flex-col w-full">                           
                          <UiEntry bind:item={item} {moveUp} {moveDown} {del} index={calculateIndex(json.commands.length , index)}
                          {clone}
                        />
                        </div> 
                    </div>
                {/each}
            </div>

            <!-- <CanvasCommand  bind:json={json}   /> -->
  </div>
 </div>
  
</div><!--the editor top level div-->
{/if}
  