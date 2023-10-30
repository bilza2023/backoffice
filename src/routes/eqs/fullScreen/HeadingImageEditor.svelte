<script>
//@ts-nocheck
export let fs;

let parsedData = JSON.parse(fs.code);
import EditorForm from "./EditorForm.svelte";

function updateJSON() {
  fs.code = JSON.stringify(parsedData);
}
const formData = [
{title : "Heading Content" , type: 'text' , bindTo:"hdgContent"},
{title : "Image Name" , type: 'text' ,bindTo:"imgSrc"}
];
</script>

<div class="w-6/12 mx-auto">
<EditorForm bind:parsedData={parsedData} {formData} {updateJSON}/>

</div>    

    