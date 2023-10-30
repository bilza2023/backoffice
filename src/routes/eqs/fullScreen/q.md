Here is my svelte component. Please see the code in detail and then i will ask you to make some amendments.
<script>
//@ts-nocheck
export let fs;

$: data = JSON.parse(fs.code);
</script>
<!-- create input element here -->
<div>{data.hdgContent}</div>
<!-- create input element here -->
<div>{data.imgSrc}</div>


/////
i have an object called "fs". the fs has a field called "code". the code is a JSON stringified as string. The purpose of this component is to make changes (Edit) the JSON inside fs.code and save it back as fs.code in string format.

here is fs object

const fs =
{
 "hdgContent" : "Some Content",
 "imgSrc" : "graph"
}