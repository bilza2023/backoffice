<script>
//@ts-nocheck
import Katex from "svelte-katex";
export let handleClick;
export let rows;
export let grid;
export let equationMode;

</script>
<!-- great learning style="background-color : {grid.bgColor}"> no ${}-->
<table class=" p-0 m-0" >
{#each rows as row, rowIndex}
    <tr class="m-0 p-0">
    {#each row as col, colIndex}
        <td class="m-0 p-0  " >
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
        class=  "hover:cursor-pointer   border-2 text-center"
        style= {`
            min-width: 70px;
            min-height: 70px;
            border-left-color : ${col.blc};
            border-top-color : ${col.btc};
            border-right-color : ${col.brc};
            border-bottom-color : ${col.bbc};
            font-size : ${grid.fontSize}em;
            margin : ${grid.margin}px;
            padding : ${grid.padding}px;
            color : ${col.color};
        `}
        
        
        id={`${rowIndex}-${colIndex}`}
          
          on:click={handleClick}
        >
            {#if equationMode}
            <Katex>{col.content}</Katex>
            {:else}
            {col.content}
            {/if}
           </div>
        </td>

    {/each}
    </tr>
{/each}
</table>
