<script>
//@ts-nocheck
import {pointsStore} from './store';
import {toast} from '$lib/util';
export let items;
export let currentX;
export let currentY;
export let toggleShowEditorPanel;

$: points = $pointsStore;
let txt = '';

function undo() {
//   debugger;
  const lastItem = items[items.length - 1];

  if ( lastItem.name !== 'drawGrid') {
    // If the last item is 'drawGrid', pop the item on top
    items.pop();
    // items.splice(items.length - 2, 1);
  } else {
    toast.push('Nothing to Undo')
  }
  items = [...items];
}

function textDraw(){
    // debugger;
    if (points.length < 1) {
    toast.push('Point missing');
    return;
    }
    if (!txt || txt == '') {
    toast.push('Missing text data');
    return;
    }
    items.push({name: 'drawText',showAt :  0 , extra : {x:parseInt(points[0].x), y:parseInt(points[0].y), text:txt, fontSize : 24, textColor : 'white',opacity:1}});
    items = [...items];
    txt = '';
    pointsStore.set([]);
}
function lineDraw(){
    if (points.length < 2) {
    toast.push('points missing');
    return;
    }
    items.push({name: 'drawLine',showAt :  0 , extra : {
    x1:parseInt(points[0].x), y1:parseInt(points[0].y), x2:parseInt(points[1].x), y2:parseInt(points[1].y),opacity:1}});
    items = [...items];
    pointsStore.set([]);
}
function polyDraw(){
    // debugger;
    if (points.length < 3) {
    toast.push('points missing');
    return;
    }
    items.push({name: 'drawPoly',showAt :  0 , extra : {
    points : points.map(point => ({...point})),fillColor : 'white',opacity:1,filled:true}});
    // debugger;
    items = [...items];
    pointsStore.set([]);
}
function rectangleDraw(){
    if (points.length < 2) {
    toast.push('points missing');
    return;
    }
    items.push({name: 'drawRectangle',showAt :  0 , extra : {
    x1:parseInt(points[0].x), y1:parseInt(points[0].y), x2:parseInt(points[1].x), y2:parseInt(points[1].y),fillColor : 'white',opacity:1,filled:true}});
    items = [...items];
    pointsStore.set([]);
}
function triangleDraw(){
    if (points.length < 3) {
    toast.push('points missing');
    return;
    }
    items.push({name: 'drawTriangle',showAt :  0 , extra : {
    x1:parseInt(points[0].x), y1:parseInt(points[0].y), x2:parseInt(points[1].x), y2:parseInt(points[1].y),x3 :parseInt(points[2].x), y3:parseInt(points[2].y),fillColor : 'white',opacity:1,filled:true}});
    items = [...items];
    pointsStore.set([]);
}
function hlineDraw(){
    if (points.length < 2) {
    toast.push('points missing');
    return;
    }
    items.push({name: 'drawHline',showAt :  0 , extra : {
    x1:parseInt(points[0].x), y1:parseInt(points[0].y), x2:parseInt(points[1].x), y2:parseInt(points[1].y), lineWidth : 2, lineColor : 'white',opacity:1}});
    items = [...items];
    pointsStore.set([]);
}
function rayDraw(){
    if (points.length < 2) {
    toast.push('points missing');
    return;
    }
    items.push({name: 'drawRay',showAt :  0 , extra : {
    x1:parseInt(points[0].x), y1:parseInt(points[0].y), x2:parseInt(points[1].x), y2:parseInt(points[1].y), lineWidth : 2, lineColor : 'white',opacity:1}});
    items = [...items];
    pointsStore.set([]);
}
function circleDraw(){
    if (points.length < 1) {
    toast.push('points missing');
    return;
    }
    // debugger;
    const radius = 20;
    items.push({name: 'drawCircle',showAt :  0 , extra : {
    x1:parseInt(points[0].x), y1:parseInt(points[0].y),radius:radius, lineWidth : 2, fillColor : 'white',filled:false,opacity:1}});
    items = [...items];
    pointsStore.set([]);
}
function pointDraw(){
    if (points.length < 1) {
    toast.push('points missing');
    return;
    }
    items.push({name: 'drawPoint',showAt :  0 , extra : {
    points:points.map(point => ({...point})),width : 10, color : 'white'}});
    items = [...items];
    pointsStore.set([]);
}
function pointWTextDraw(){
    if (points.length < 1) {
    toast.push('points missing');
    return;
    }
    if (!txt || txt == '') {
    toast.push('Missing text data');
    return;
    }
    items.push({name: 'drawPointWText',showAt :  0 , extra : {
    x1:parseInt(points[0].x), y1:parseInt(points[0].y),text:txt,width : 10, color : 'yellow',colorText: 'white'}});
    items = [...items];
    pointsStore.set([]);
}

function ellipseDraw(){
    if (points.length < 1) {
    toast.push('points missing');
    return;
    }
    items.push({name: 'drawEllipse',showAt :  0 , extra : {
    x1:parseInt(points[0].x), y1:parseInt(points[0].y), radius1:40, radius2:20, borderWidth : 2, color : 'white',filled:false,opacity:1}});
    items = [...items];
    pointsStore.set([]);
}
function gridDraw(){
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.name === 'drawGrid') {
        items.splice(i, 1);
        items = [...items];
        return;    
    }
}
    items = [{name: 'drawGrid',showAt :  0 , extra : {}}, ...items];
}


</script>

<div class='flex justify-start border-2 border-gray-500 text-sm'>

<button class="bg-blue-500 hover:bg-blue-900 text-white font-bold py-0 px-1 rounded m-1" on:click={toggleShowEditorPanel}>
  🙈
</button>


<button 
class="bg-blue-500 hover:bg-blue-900 text-white font-bold py-0 px-1 rounded m-1" on:click={undo}>
<span class="">↪</span>
</button>

<button 
class="bg-green-500 hover:bg-green-800 text-white font-bold py-0 px-1 rounded m-1" on:click={()=>pointsStore.set([])}>
  Pts {`${points.length}`}
</button>

<button
class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-1 rounded m-1" on:click={pointWTextDraw}>
•T
</button>


<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-1 rounded m-1" on:click={textDraw} >✏️</button>

<input class="bg-gray-500 hover:bg-gray-700 w-32 text-white font-bold py-0 px-1 rounded m-1" type="text" name="" id="" bind:value={txt}>


<button
class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-1 rounded m-1" on:click={gridDraw}>
├┼┤
</button>

<button
class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-1 rounded m-1" on:click={lineDraw}>
──
</button>


<button
class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-1 rounded m-1" on:click={hlineDraw}>
→
</button>

<button
class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-1 rounded m-1" on:click={rayDraw}>
↔
</button>

<button
class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-1 rounded m-1" on:click={triangleDraw}>
▲
</button>
<button
class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-1 rounded m-1" on:click={rectangleDraw}>
▭
</button>

<button
class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-1 rounded m-1" on:click={polyDraw}>
⬠
</button>

<button
class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-1 rounded m-1" on:click={circleDraw}>
◯
</button>

<button
class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-1 rounded m-1" on:click={ellipseDraw}>
⭕
</button>

<button
class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-1 rounded m-1" on:click={pointDraw}>
•
</button>


<div class='flex items-center px-1 p-0 m-0 border-2 border-gray-700  rounded-md bg-gray-900'>
X:
{currentX},
Y:
{currentY}
</div>
<!-- <button
class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-1 rounded m-1" on:click={polyDraw}>
╱╲
</button> -->






</div>
