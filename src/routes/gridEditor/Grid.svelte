<script>
//@ts-nocheck
export let handleClick;
export let rows;
export let grid;
import {runningTime} from "./store";

$:rTime = $runningTime;
function getColor(startTime,endTime){
    if (startTime < rTime ){
        return "red";
    }else {
        return grid.bgColor;
    }
    
}

function borderColor(tf){
// debugger;
    if (tf==true){
        return grid.cellBorderColor;
    }else{
        return grid.bgColor;
    }
}
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
        class=  "p-2 m-0 hover:cursor-pointer   border-2"
        style= {`
            border-left-color : ${borderColor(col.bl)};
            border-top-color : ${borderColor(col.bt)};
            border-right-color : ${borderColor(col.br)};
            border-bottom-color : ${borderColor(col.bb)};
            font-size : ${grid.fontSize}em;
            margin : ${grid.margin}px;
            padding : ${grid.padding}px;
            color : ${getColor(col.startTime,col.endTime)};
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
