<script>
//@ts-nocheck
import Katex from 'svelte-katex';
export let eq;

</script>

<div class='flex justify-center '>

    {#if eq.type == undefined || eq.type == 'code' || eq.type == ''}
        <Katex>{eq.code}</Katex>
    {/if}

    {#if eq.type == 'txt' || eq.type == 'text'}
        <p>{eq.code}</p>
    {/if}
    {#if eq.type == 'hdg' || eq.type == 'heading'}
        <h1>{eq.code}</h1>
    {/if}

    {#if eq.type == 'html'}
        <div>
        {@html eq.code }
        </div>
    {/if}

</div>