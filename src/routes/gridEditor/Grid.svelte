<script>
//@ts-nocheck
export let handleClick;
export let rows;
export let grid;
</script>
<!-- great learning style="background-color : {grid.bgColor}"> no ${}-->
<table class=" p-0 m-0 border-collapse">
{#each rows as row, rowIndex}
    <tr class="m-0 p-0">
    {#each row as col, colIndex}
        <td class="m-0 p-0 " >
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
        style="background-color : {grid.bgColor}"
        id={`${rowIndex}-${colIndex}`}
          class={`p-2 m-0 hover:cursor-pointer   border-2
          ${col.bl ? "border-l-red-500" : "{grid.bgColor}"}
          ${col.bt ? "border-t-red-500" : "{grid.bgColor}"}
          ${col.br ? "border-r-red-500" : "{grid.bgColor}"}
          ${col.bb ? "border-b-red-500" : "{grid.bgColor}"}
          `}
          on:click={handleClick}
        >
            {col.content}
           </div>
        </td>

    {/each}
    </tr>
{/each}
</table>
