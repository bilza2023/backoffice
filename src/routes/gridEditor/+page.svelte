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
import saveFn from "./save";

let global = {bgColor: "#293544", fontSize: 1, padding: 4,margin:1,cellBorderColor:"#e52222" ,cellFontColor : "white",showGrid : true,gridColor: "#384556" }
let showPanel = "gridPanel"
let data = {};
let question;
let questionDetails;
let rows;

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

function save(){
saveFn(question,global,rows,[],[]);
}


onMount(async () => {
  try {
    // debugger;
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
        question  = data.question //===> important
        // console.log("question" ,  question);
        if (!question.grid.rows || question.grid.rows.length <= 0) {
           rows = [[]]; //[[]]
           rows[0].push(getNewCol());
        }else {
          rows = question.grid.rows
        }
        if (question.grid.global) {
           global = question.grid.global;
        }
        questionDetails = question.filename;
      // return;
    } else {
        const data = await resp.json();
        toast.push(data.message);
    }
  } catch (error) {
    // toast.push('Unknown Error');
    console.log(error);
  }
});
</script>

<PageWrapper>
<Nav />
<PageHeading />

<ThreeButtons bind:showPanel={showPanel} />

<div>
{#if showPanel == "globalPanel"}
<GlobalPanel bind:global={global} />
{/if}
{#if showPanel == "SBPanel"}
<SPPanel />
{/if}

<GridPanel  {global} {save} bind:rows={rows} {addRow} {addCol} {delRow} {delCol}/>

</div>



<br>
<br>
<br>
<br>
<br>
</PageWrapper>