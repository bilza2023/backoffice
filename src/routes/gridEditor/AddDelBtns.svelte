<script>
//@ts-nocheck
// export let addRow;
import getNewCol from "./getNewCol.js";
export let rows;
export let toggleEquationMode;
export let redraw;
import {runningTime} from "./store";
import {start,stop} from "./main.js";

$: rTime = $runningTime;
const addRow = () => {
// Row must have atleast 1 item or the Array.fill will not work
const newRow = Array(rows[0].length).fill(getNewCol());
    rows.push(newRow);
    redraw();
    console.log("rows" , rows);
}
const addCol = () => {
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    row.push(getNewCol());
  }
  console.log("rows", rows);
  redraw();
}
const delRow = () => {
    if (rows.length > 0) {
        rows.pop(); // Remove the last row
        redraw();
        console.log("rows", rows);
    }
}

const delCol = () => {
    if (rows.length > 0 && rows[0].length > 0) {
        for (let i = 0; i < rows.length; i++) {
            rows[i].pop(); // Remove the last element from each row
        }
        redraw();
        console.log("rows", rows);
    }
}


</script>

<div class="flex justify-center w-full m-0 p-1 bg-gray-900 gap-1">
    <button class="bg-green-800 p-1 m-1 rounded-md text-xs"
    on:click={addRow}>Add Row</button>
    
    <button class="bg-green-800 p-1 m-1 rounded-md text-xs"
    on:click={addCol}>Add Col</button>
    
    <button class="bg-red-800 p-1 m-1 rounded-md text-xs"
    on:click={delRow}>Del Row</button>
    
    <button class="bg-red-800 p-1 m-1 rounded-md text-xs"
    on:click={delCol}>Del Col</button>
    
    <button class="bg-green-500 p-1 m-1 rounded-md text-xs"
    on:click={start}>Start</button>
    
    <button class="bg-stone-400 p-1 m-1 rounded-md text-xs"
    on:click={stop}>Stop</button>

    <span class="p-1 m-1 text-yellow-50 text-center bg-stone-800">{rTime}</span>
    
    <button class="bg-green-400 p-1 m-1 rounded-md text-xs"
    on:click={toggleEquationMode}>Toggle Equation Mode</button>
</div>
