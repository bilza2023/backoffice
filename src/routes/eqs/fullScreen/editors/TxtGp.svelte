<script>
//@ts-nocheck
//--The incomming data is string and we need string
    import { onMount } from "svelte";
export let fs;

/////////////////////////////////////////////////

onMount(async ()=>{
// parsedData = JSON.parse(fs.code);
// console.log("parsedData" , parsedData);
});
</script>

<div class="w-6/12 mx-auto">
 <textarea name="" id="" cols="60" rows="5"
 class="bg-gray-700 rounded-md p-1 m-1"
 bind:value={fs.code}
 ></textarea>
</div>    

    