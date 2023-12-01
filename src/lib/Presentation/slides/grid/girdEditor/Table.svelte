
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
              {item.content}
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

