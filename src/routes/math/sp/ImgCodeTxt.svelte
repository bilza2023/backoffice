<script>
//@ts-nocheck
import Katex from 'svelte-katex'
import Table from './Table.svelte';
export let eq;

</script>

<div class='flex justify-center '>

    {#if eq.type == undefined || eq.type == 'txt' || eq.type == 'text'}
        <p>{eq.code}</p>
    {/if}

    {#if eq.type == 'code'}
        <Katex>{eq.code}</Katex>
    {/if}

    {#if eq.type == 'img' || eq.type == 'image'}
        <img src= "/mathImages/{eq.code}.png" alt="Not found">
    {/if}
    
    {#if eq.type == 'table' || eq.type == 'tbl'}
        <!-- <img src={eq.code} alt="Not found"> -->
        <Table code={eq.code}/>
    {/if}
   
    {#if eq.type == 'html'}
        <div>
        {@html eq.code }
        </div>
    {/if}

</div>