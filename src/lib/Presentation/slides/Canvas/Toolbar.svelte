<script>
//@ts-nocheck
import {pointsStore} from './store';
import {toast} from '$lib/util';
export let items;

$: points = $pointsStore;
let txt = '';

function textDraw(){
    // debugger;
    if (points.length < 1) {
    toast.push('points missing');
    return;
    }
    items.push({name: 'drawText',showAt :  0 , itemExtra : {x:points[0].x, y:points[0].y, text:txt, fontSize : 24, textColor : 'white'}});
    items = [...items];
    txt = '';
    pointsStore.set([]);
}
function rayDraw(){
    // debugger;
    if (points.length < 2) {
    toast.push('points missing');
    return;
    }
    items.push({name: 'drawRay',showAt :  0 , itemExtra : {x1:points[0].x, y1:points[0].y, x2:points[1].x, y2:points[1].y, lineWidth : 2, lineColor : 'white'}});
    items = [...items];
    pointsStore.set([]);
}

</script>

<div class='flex justify-start border-2 border-gray-500'>
<button 
class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-1 rounded m-1" on:click={()=>pointsStore.set([])}>
  Pts {`${points.length}`}
</button>

<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-1 rounded m-1" on:click={textDraw} >Text</button>

<input class="bg-gray-500 hover:bg-gray-700 w-32 text-white font-bold py-0 px-1 rounded m-1"
type="text" name="" id="" bind:value={txt}>



<button
class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-1 rounded m-1" on:click={rayDraw}>
Ray
</button>





</div>
