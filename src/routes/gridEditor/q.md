here is svelte code that draw a table data (td)

<table class="bg-gray-800 p-1 m-1">
{#each rows as row, rowIndex}
    <tr>
    {#each row as col, colIndex}

        <td
        id = {`${rowIndex}-${colIndex}`} 
        class="bg-gray-700 p-1 m-1 border-2 border-white hover:cursor-pointer"
        on:click={handleClick}
        >
         {col.content}
        </td>

    {/each}
    </tr>
{/each}
</table>

the col is an object as following
{startTime:0, endTime: 100, content:"new",bl:false,bt:false,br:false,bb:false}

where bl = border left
bt = border top
br = border right
bb = border bottom

at the moment td has border-2 border-white 
 1 : i want it to have all 4 borders decided upon (individually) if the bt,br,bl,bb are true or not . if false the td should have no border on that side.