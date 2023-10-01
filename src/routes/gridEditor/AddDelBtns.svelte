<script>
//@ts-nocheck
// export let addRow;
import getNewCol from "./getNewCol.js";
export let rows;
export let redraw;


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

}
const delCol = () => {

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

</div>
