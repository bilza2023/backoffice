<script>
//@ts-nocheck
//-- item = 1 row
import { BASE_URL,onMount,toast } from '$lib/util';
import PageHeading from './PageHeading.svelte';
// import Table from './Table.svelte';
import Cell from './Cell.svelte';
import AddDelBtns from './AddDelBtns.svelte';
export let items;
export let slideExtra = [];
export let theme;
export let pulse;


const addRow = () => {
 //  debugger;
 // Row must have atleast 1 item or the Array.fill will not work
 const newRow = Array(rows[0].length).fill(getNewCol());
    rows.push(newRow);
    redraw();
    // console.log("rows" , rows);
}
// const addCol = () => {
//   for (let i = 0; i < rows.length; i++) {
//     const row = rows[i];
//     row.push(getNewCol());
//   }
//   // console.log("rows", rows);
//   redraw();
// }
// const delRow = () => {
//     if (rows.length > 0) {
//         rows.pop(); // Remove the last row
//         redraw();
//         // console.log("rows", rows);
//     }
// }

// const delCol = () => {
//     if (rows.length > 0 && rows[0].length > 0) {
//         for (let i = 0; i < rows.length; i++) {
//             rows[i].pop(); // Remove the last element from each row
//         }
//         redraw();
//         // console.log("rows", rows);
//     }
// }


</script>


<PageHeading />
<AddDelBtns   />


<div class='flex justify-center w-full'>

<table>
    {#each items as item, i (item)}
        {#if i % slideExtra[0].value === 0}
            <tr>
        {/if}
            <Cell {item} itemIndex={i} {pulse}/>

        {#if (i + 1) % slideExtra[0].value === 0 || (i + 1) === items.length}
            {#if (i + 1) % slideExtra[0].value !== 0}
                {#each Array(slideExtra[0].value - (i + 1) % slideExtra[0].value) as _}
                    <td class="border-2 border-white"></td>
                {/each}
            {/if}
            {@html `</tr>`}
        {/if}
    {/each}
</table>

</div>

