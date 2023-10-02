<script>
//@ts-nocheck
import AddDelBtns from "./AddDelBtns.svelte";
import Grid from "./Grid.svelte";
import getNewCol from "./getNewCol.js";
import ControlPanel from "./ControlPanel.svelte";
import { onMount } from "svelte";
import {toast} from "$lib/util";

let rows = [[]]; //[[]]
let grid = {bgColor: "#1F2937", fontSize: 2, padding: 2,margin:0,cellBorderColor:"#e52222" }
rows[0].push(getNewCol());
            
let selectedTd = null;

function redraw(){rows = [...rows]}

function handleBorder(event,border){
 // debugger;
 const inputValue = event.target.value;
 if (selectedTd !== null) {
    const [rowIndex, colIndex] = selectedTd.split('-');
    rows[rowIndex][colIndex][border] = !rows[rowIndex][colIndex][border];
    console.log(rows[rowIndex][colIndex]);
 }else {
    toast.push("No item selected");
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


<AddDelBtns bind:rows={rows} {redraw} />
<div class="flex w-full">
    <div class="flex justify-center w-8/12" 
    style="background-color : {grid.bgColor}"
    >
    <Grid {rows} {grid} {handleClick} />
    </div>

    <div class="flex flex-col p-1 m-1 bg-stone-700 w-3/12 justify-start ">
    <ControlPanel bind:rows={rows}  bind:selectedTd = {selectedTd} {handleInput} {handleStartTimeInput} {handleEndTimeInput} {handleBorder}/>
    </div>
</div>
