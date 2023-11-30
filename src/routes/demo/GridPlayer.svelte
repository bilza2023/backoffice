<svelte:head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<script>
//@ts-nocheck

// import Katex from "svelte-katex";
import Cell from './Cell.svelte';
export let items;
export let pulse;
export let slideExtra;
// export let rowsCount;
</script> 


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

