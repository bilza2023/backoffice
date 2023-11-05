<script>
//@ts-nocheck
export let pulse;
// export let startTime;
// export let endTime;
export let items=[]; 
// export let compExtra =[];
// export let theme={};
$: show = pulse % 2 === 0 ? 'red' : 'green';



</script>
<div class="flex justify-center m-2 p-4 bg-red-900 text-white rounded-md">
    <h1 class={`text-${show}-500`}>{items[0].content}</h1>
</div>