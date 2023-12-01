great it worked now write a function 'addRow' which add a new row but keep in mind the number of columns in each row are equal

<script>
//@ts-nocheck

import {browser,onMount,toast,BASE_URL} from '$lib/util'
// import GridPlayer from './GridPlayer.svelte';
import Presentation from '$lib/Presentation/Presentation.svelte';
import demoData from '$lib/Presentation/slides/grid/demoData';
let pulse = 0;
function gameLoop(){pulse+=1;console.log(pulse);currentSlide=currentSlide;}

let currentSlide = {
        startTime : 0,
        endTime : 100,
        slideExtra : [ {key: 'colCount' , value: 2} ],
        type : 'grid',

       items: [
    {
        name: "",
        content: [
            { "content": "aaa", "showAt": 3, "bl": true, "bt": false, "br": false, "bb": false },
            { "content": "bbb", "showAt": 3, "bl": true, "bt": false, "br": false, "bb": false }
        ],
        showAt: 0,
        extra: {}
    },
    {
        name: "",
        content: [
            { "content": "ccc", "showAt": 3, "bl": true, "bt": false, "br": false, "bb": false },
            { "content": "ddd", "showAt": 3, "bl": true, "bt": false, "br": false, "bb": false }
        ],
        showAt: 0,
        extra: {}
    }
]

}
onMount(async ()=>{
    for (let i = 0; i < currentSlide.items.length; i++) {
        const item = currentSlide.items[i].content;
        console.log(item);
    }
// currentSlide = demoData();
    // setInterval(gameLoop,1000);
});

function addCol() {
  // Add an empty cell to each row
  currentSlide.items.forEach((item) => {
    item.content.push({
      "content": "", // Empty content
      "showAt": 3,
      "bl": true,
      "bt": false,
      "br": false,
      "bb": false
    });
  });
  currentSlide = currentSlide;
}
</script> 

<div class='bg-gray-800 text-white w-full min-h-screen'>
<br>
<button on:click={addCol}>Add Col</button>
<br>

<div class='flex justify-center   w-full'>

{#if currentSlide}
  <table>
    {#each currentSlide.items as item, itemIndex}
      <tr>
        {#each item.content as cell, cellIndex}
          <!-- {#if cell.showAt <= pulse} -->
            <td class='border-2 border-white p-2'>
              {cell.content}
            </td>
          <!-- {/if} -->
        {/each}
      </tr>
    {/each}
  </table>
{/if}


</div>
</div><!--page wrapper-->

