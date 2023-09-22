<script>
//@ts-nocheck
import {FormRow} from '$lib/cmp';
import {Icons,toast} from '$lib/util';
import ToolbarUpDownDel from '../ToolbarUpDownDel.svelte';
import StdEditorControls from '../StdEditorControls.svelte';
import InputGrid from './InputGrid.svelte'; 
import Btns from './Btns.svelte'; 

export let contentItem; 
export let moveUp;
export let moveDown;
export let deleteItem;
export let redraw;
let show = false;


function addCol(){
         const c = contentItem.payload;
         for (let i = 0; i < c.length; i++) {
            c[i].push("");            
         }       
            redraw();
            return questions;
}

function delCol() {
    const c = contentItem.payload;
        for (let i = 0; i < c.length; i++) {
            if ( c[i][c[i].length -1] !== ''  ) {
                // Abort the process if any last column has content
                toast.push('The last column in any row has content')
                return;
            }
        }
 //////////////////////
         for (let i = 0; i < c.length; i++) {
            c[i].pop();            
         }       
            return questions;
}

function addRow() {
        const content = contentItem.payload;
        const newRow = Array(content[0].length).fill(""); // Create a new row with the same number of columns
        content.push(newRow);
        return;
}

function delRow(rowIndex) {
    const c = contentItem.payload;
    const cc = c[c.length - 1];
    // console.log(cc);

    for (let i = 0; i < cc.length; i++) {

         if ( cc[i] !== ''  ) {
                // Abort the process if any last column has content
                toast.push('The last row  has content')
                return;
        }          
    }
    ///////////////////////////
           c.pop();
        return;
}

</script>

<!-- top bar -->
 <div class='flex justify-center items-center    mx-auto w-6/12  rounded-lg m-1  border-2 border-gray-600'>

    <button  class='p-1 m-1 text-xs hover:bg-stone-700 rounded-lg'
        on:click={()=>show = !show}>{Icons.EYE}
    </button>


<ToolbarUpDownDel {contentItem} {moveUp} {moveDown} {deleteItem}  />



 </div>



{#if show}
 <!-- Edit Control -->
<div class='bg-gray-800 p-2 m-5 mt-0 mb-2  rounded-md border-2 border-gray-600' style="max-height: 400px; overflow-y: auto;">

<!-- this is not each just an if -->
  {#if  contentItem.payload.length > 0}

<Btns {addCol} {delCol} {addRow} {delRow}/>

<InputGrid  {contentItem} />

    <!-- <FormRow title="Content">
    <textarea class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={$questionsStore[questionIndex].content[contentIndex].content} 
    />
    </FormRow> -->
   <StdEditorControls  {contentItem}/>


 {/if}  
</div>

{/if}