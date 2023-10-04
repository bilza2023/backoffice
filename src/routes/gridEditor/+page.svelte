<svelt:head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous">
</svelt:head>
<script>
//@ts-nocheck
import {PageWrapper} from "$lib/cmp";
import { BASE_URL,onMount,toast,goto,chqLogin } from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';
import PageHeading from './PageHeading.svelte';
import ThreeButtons from "./ThreeButtons.svelte";
import GridPanel from "./GridPanel.svelte";
import GlobalPanel from "./GlobalPanel.svelte";
import SPPanel from "./SPPanel.svelte";
import getNewCol from "./getNewCol.js";

let grid;
// let grid = {bgColor: "#293544", fontSize: 1, padding: 4,margin:1,cellBorderColor:"#e52222" ,cellFontColor : "white",showGrid : true,gridColor: "#384556" }
let showPanel = "gridPanel"
let data = {};
let rows ;
// let rows = [[]]; //[[]]
// rows[0].push(getNewCol());
function redraw(){rows = [...rows]}

const addRow = () => {
 //  debugger;
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


async function save(){
  try{
    //    debugger; 
       const question =  {_id :'650b94b4d750929738a4526c' ,board:"FBISE" , class:9 ,chapter:1, exercise: "1.2", questionNo : 1,part:"i",finalized : false,filename : "fbise_cl_9_ch_1_ex_1.2_q_1_pt_1" , eqs : []};
       question.questionType = "grid";
       question.grid = {};
       question.grid.sp = [];
       question.grid.fs = [];
       question.grid.global = grid;
       question.grid.rows = rows;
       /////////////////////////////////////// 
       const token = localStorage.getItem("token");
       const response = await fetch(`${BASE_URL}/upload_math`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token,question})
        });
        if (response.ok) {
            toast.push('Data uploaded successfully');
        }else {
              toast.push('Response not ok');
        } 
      }catch (e) {
              toast.push('Unknown Error');
      }
}
onMount(async () => {
  try {
 //    debugger;
       if (!chqLogin()){
      goto('/login');
      return;
      }
   //http://localhost/math?id=6508bff7c970727df5e0ac85
      let  id = new URLSearchParams(location.search).get("id"); 
      const resp = await fetch( `${BASE_URL}/get_question?id=${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer 000`,
        }
      });
  
    if (resp.ok) {
        // debugger;
        const data = await resp.json();
        const mathQuestion  = data.mathQuestion //===> important
        grid = mathQuestion.grid.global;
        rows = mathQuestion.grid.rows;
        // questionDetails = question.filename;

    } else {
        const data = await resp.json();
        toast.push(data.message);
    }
  } catch (error) {
    toast.push('Unknown Error');
  }
});
</script>

<PageWrapper>
<Nav />
<PageHeading />

<ThreeButtons bind:showPanel={showPanel} />

<div>
{#if showPanel == "globalPanel"}
<GlobalPanel bind:grid={grid} />
{/if}
{#if showPanel == "SBPanel"}
<SPPanel />
{/if}

<GridPanel  {grid} {save} bind:rows={rows} {addRow} {addCol} {delRow} {delCol}/>

</div>



<br>
<br>
<br>
<br>
<br>
</PageWrapper>