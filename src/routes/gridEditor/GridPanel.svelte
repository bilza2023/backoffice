<script>
//@ts-nocheck
import AddDelBtns from "./AddDelBtns.svelte";
import Grid from "./Grid.svelte";
import getNewCol from "./getNewCol.js";
import ControlPanel from "./ControlPanel.svelte";
import { onMount } from "svelte";
import {toast} from "$lib/util";
import {runningTime,isPlaying} from "./store";
import {get} from "$lib/util";
$:isPlay = $isPlaying;
let grid = {bgColor: "#1F2937", fontSize: 2, padding: 4,margin:1,cellBorderColor:"#e52222" ,cellFontColor : "white",showGrid : true,gridColor: "#384556" }
let selectedTd = null; 
let equationMode = false;

function toggleEquationMode(){
   equationMode = !equationMode;
   redraw();
} 
let rows = [[]]; //[[]]
rows[0].push(getNewCol());

$:rTime = $runningTime;

$:{
 rTime;
   for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      for (let j = 0; j < row.length; j++) {
         const col = row[j];
         col.blc = borderColor(col.bl);
         col.btc = borderColor(col.bt);
         col.brc = borderColor(col.br);
         col.bbc = borderColor(col.bb);
         //--
         col.color = getColor(col.startTime,col.content);
      }
   }
   rows = [...rows];
}
////////////////////////////////           

function getColor(startTime,content) {
   if (!isPlay ){
         return grid.cellFontColor;
   }else {
          if (startTime <=  rTime) {
               return grid.cellFontColor;
         }else {
            return grid.bgColor; 
         }
   }
}

function borderColor(tf){
 // debugger;
    if (tf==true){
        return grid.cellBorderColor;
    }else{
        if (grid.showGrid == true){
         return grid.gridColor;
        }else {
         return grid.bgColor;
        } 
    }
}
function redraw(){rows = [...rows]}

function handleBorder(event,border){
 // debugger;
 const inputValue = event.target.value;
 if (selectedTd !== null) {
    const [rowIndex, colIndex] = selectedTd.split('-');
    rows[rowIndex][colIndex][border] = !rows[rowIndex][colIndex][border];
   //  console.log(rows[rowIndex][colIndex]);
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


<AddDelBtns bind:rows={rows} {redraw} {toggleEquationMode}/>
<div class="flex w-full">
    <div class="flex justify-center items-center p-4 w-8/12" 
    style="background-color : {grid.bgColor}"
    >
    <Grid {rows} {grid} {handleClick} {equationMode}/>
    </div>

    <div class="flex flex-col p-1 m-1 bg-stone-700 w-3/12 justify-start ">
    <ControlPanel bind:rows={rows}  bind:selectedTd = {selectedTd} {handleInput} {handleStartTimeInput} {handleEndTimeInput} {handleBorder}/>
    </div>
</div>
