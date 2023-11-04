<script>
//@ts-nocheck
/**
 * 
 */

export let pulse;
export let startTime;
export let endTime;
export let items=[]; //code and template st
export let compExtra =[]; //code and template st
export let theme={};
// export let globals={}; // no its a bad bas idea... if you get unlimited input it means this app is open for CHANE which should not be the case it should only be open for EXTENTION.

</script>
<div class="flex justify-center m-2 p-4 bg-red-900 text-white rounded-md">
{#each items as item}
    <!-- //--implement showAt here  -->
    <h1>{item.content}</h1>
{/each}
</div>