
<script>
//@ts-nocheck

export let fs; 

</script> 


<div id={`eqPart`} class= {`w-full bg-stone-900 text-center rounded-md justify-center p-2`} >

    
    {#if (fs.type !== 'Null' )}
   
    <h1>Not Null</h1>
    <h1>{fs.type}</h1>
    <h1>{fs.code}</h1>
    {/if}
    
 
</div>       