<script>
//@ts-nocheck
import {toast} from "$lib/util";

// import AddDelBtns from "./AddDelBtns.svelte";
import Grid from "./Grid.svelte";
// import ControlPanel from "./ControlPanel.svelte";
import {runningTime,isPlaying} from "./store";

////////////////////////////////////////////////////////
// $:isPlay = $isPlaying;
export let save;
export let global;
export let rows;
export let addRow;
export let addCol;
export let delRow;
export let delCol;
let selectedTd = null; 
let equationMode = false;

function toggleEquationMode(){
   equationMode = !equationMode;
   redraw();
} 


$:rTime = $runningTime;

$:{
 rTime;
 if (rows){
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
}
////////////////////////////////           
function getColor(startTime,content) {
   if (!isPlay ){
         return global.cellFontColor;
   }else {
          if (startTime <=  rTime) {
               return global.cellFontColor;
         }else {
            return global.bgColor; 
         }
   }
}

function borderColor(tf){
 // debugger;
    if (tf==true){
        return global.cellBorderColor;
    }else{
        if (global.showGrid == true){
         return global.gridColor;
        }else {
         return global.bgColor;
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
{#if rows}


<!-- <AddDelBtns  {toggleEquationMode} {save} {addRow} {addCol} {delRow} {delCol}/> -->
<div class="flex justify-around w-full p-1 m-1 ">
    <div class="flex justify-center items-center p-1 w-8/12 border-2 border-red-800" 
    style="background-color : {global.bgColor}"
    >
    <Grid {rows} {global} {handleClick} {equationMode}/>
    </div>

</div>
{/if}