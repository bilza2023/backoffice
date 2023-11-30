<svelte:head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<script>
//@ts-nocheck

// import Katex from "svelte-katex";
import Cell from './Cell.svelte';
export let currentSlide;
export let pulse;
export let rowsCount;
</script> 


    <table>
        {#each currentSlide[0].items as item, i (item)}
            {#if i % rowsCount === 0}
                <tr>
            {/if}
              <Cell {item} itemIndex={i} {pulse}/>
              
            {#if (i + 1) % rowsCount === 0 || (i + 1) === currentSlide[0].items.length}
                {#if (i + 1) % rowsCount !== 0}
                    {#each Array(rowsCount - (i + 1) % rowsCount) as _}
                        <td class="border-2 border-white"></td>
                    {/each}
                {/if}
                {@html `</tr>`}
            {/if}
        {/each}
    </table>

