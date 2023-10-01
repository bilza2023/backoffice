<script>
//@ts-nocheck
import AddDelBtns from "./AddDelBtns.svelte"
    import ControlPanel from "./ControlPanel.svelte";
let rows = [
            [
            {startTime:0, endTime: 100, content:"A",bl:true,bt:true,br:true,bb:false}
            ]
        ];


function redraw(){rows = [...rows]}
let selectedTd = null;

function handleBorder(event,border){
// debugger;
const inputValue = event.target.value;
if (selectedTd !== null) {
    const [rowIndex, colIndex] = selectedTd.split('-');
    rows[rowIndex][colIndex][border] = !rows[rowIndex][colIndex][border];
    console.log(rows[rowIndex][colIndex]);
}
    redraw();
}

function handleClick(event) {
selectedTd = event.target.id;
const [rowIndex, colIndex] = selectedTd.split('-');
const content = rows[rowIndex][colIndex].content;
    
      document.getElementById("tdInput").value = content;
      document.getElementById("tdStartTimeInput").value = rows[rowIndex][colIndex].startTime;
      document.getElementById("tdEndTimeInput").value = rows[rowIndex][colIndex].endTime;

console.log(selectedTd);
}

function handleInput(event) {
const inputContent = event.target.value;
if (selectedTd !== null) {
    const [rowIndex, colIndex] = selectedTd.split('-');
    rows[rowIndex][colIndex].content = inputContent;
    redraw();
}
}
function handleStartTimeInput(event) {
const inputContent = event.target.value;
if (selectedTd !== null) {
    const [rowIndex, colIndex] = selectedTd.split('-');
    rows[rowIndex][colIndex].startTime = inputContent;
    redraw();
    console.log(rows[rowIndex][colIndex]);
}
}
function handleEndTimeInput(event) {
const inputContent = event.target.value;
if (selectedTd !== null) {
    const [rowIndex, colIndex] = selectedTd.split('-');
    rows[rowIndex][colIndex].endTime = inputContent;
    redraw();
    console.log(rows[rowIndex][colIndex]);
}
}
///////////////////////////////////////        
</script>


<AddDelBtns bind:rows={rows} {redraw}/>
<div class="flex w-full">
<div class="flex justify-center w-8/12">
<table class="bg-gray-800 p-1 m-1" >
{#each rows as row, rowIndex}
    <tr>
    {#each row as col, colIndex}
        <td
        id={`${rowIndex}-${colIndex}`}
          class={`p-4 pt-4 pl-4 mt-8 ml-8 hover:cursor-pointer bg-gray-700  border-2
          ${col.bl ? "border-l-red-500" : "border-l-green-800"}
          ${col.bt ? "border-t-red-500" : "border-t-green-800"}
          ${col.br ? "border-r-red-500" : "border-r-green-800"}
          ${col.bb ? "border-b-red-500" : "border-b-green-800"}
          `}
           
          on:click={handleClick}
          >
         {col.content}
        </td>

    {/each}
    </tr>
{/each}
</table>
</div>


<div class="flex flex-col p-1 m-1 bg-stone-700 w-3/12 justify-start ">


<ControlPanel bind:rows={rows}  bind:selectedTd = {selectedTd} {handleInput} {handleStartTimeInput} {handleEndTimeInput} {handleBorder}/>



</div>
</div>
