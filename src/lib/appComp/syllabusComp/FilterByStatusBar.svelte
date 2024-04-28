<script>
    //@ts-nocheck
    export let setStatus; 
    export let statusToFilterFor;
</script>

<style>
    .button {
        padding: 0.5rem 1rem;
        margin: 0.25rem;
        background-color: #333;
        color: white;
        font-size: 0.75rem;
        border-radius: 0.25rem;
    }

    .highlighted {
        background-color: #3182ce;
    }
</style>

<div class="flex bg-stone-400 rounded-md m-1" >
    <div class="flex items-center p-1 m-1 bg-stone-400 text-red-900   text-xs rounded-md">Status</div>
   
    <button class="button {statusToFilterFor === 'all' ? 'highlighted' : ''}" on:click={()=>setStatus('all')}>All</button>
    <button class="button {statusToFilterFor === 'empty' ? 'highlighted' : ''}" on:click={()=>setStatus('empty')}>Empty</button>
    <button class="button {statusToFilterFor === 'filled' ? 'highlighted' : ''}" on:click={()=>setStatus('filled')}>Filled</button>
    <button class="button {statusToFilterFor === 'locked' ? 'highlighted' : ''}" on:click={()=>setStatus('locked')}>Locked</button>
    <button class="button {statusToFilterFor === 'final' ? 'highlighted' : ''}" on:click={()=>setStatus('final')}>Final</button>
</div>
