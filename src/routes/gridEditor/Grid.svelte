<script>
//@ts-nocheck
export let handleClick;
export let rows;
export let grid;

</script>
<!-- great learning style="background-color : {grid.bgColor}"> no ${}-->
<table class=" p-0 m-0 border-collapse" >
{#each rows as row, rowIndex}
    <tr class="m-0 p-0">
    {#each row as col, colIndex}
        <td class="m-0 p-0 " >
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
        class=  "p-2 m-0 hover:cursor-pointer   border-2"
        style= {`
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
            {col.content}
           </div>
        </td>

    {/each}
    </tr>
{/each}
</table>
