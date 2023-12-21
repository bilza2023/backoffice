<script>
import {Icons} from '$lib/util';
let show = false;
export let title='';
</script>


<div class=''>
<button on:click={()=> show = !show}>{Icons.BULB}:{title}</button>

{#if show}
<slot></slot>
{/if}
</div>
