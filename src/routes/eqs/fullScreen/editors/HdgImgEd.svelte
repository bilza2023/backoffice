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
{title : "Heading Content" , type: 'text' , bindTo:"hdgContent"},
{title : "Image Name" , type: 'text' ,bindTo:"imgSrc"}
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

    