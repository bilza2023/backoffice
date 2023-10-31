<script>
//@ts-nocheck
    import { onMount } from "svelte";
export let fs;
import EditorForm from "../EditorForm.svelte";

let parsedData;


function updateJSON() {
  fs.code = JSON.stringify(parsedData);
}

/////////////////////////////////////////////////
const formData = [
{title : "Hdg - 1 Content" , type: 'text' , bindTo:"hdgContent"},
{title : "Image-1 Name" , type: 'text' ,bindTo:"imgSrc"},
{title : "Hdg - 2 Content" , type: 'text' , bindTo:"hdgContent2"},
{title : "Image-2 Name" , type: 'text' ,bindTo:"imgSrc2"},
];

onMount(async ()=>{
parsedData = JSON.parse(fs.code);
// console.log("parsedData" , parsedData);
});
</script>

<div class="w-6/12 mx-auto">
  {#if parsedData}
  <EditorForm bind:parsedData={parsedData} {formData}  {updateJSON} />
  {/if}
</div>    

    