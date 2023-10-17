<script>
//@ts-nocheck
import H1 from "./H1.svelte";
import Table from "./Table.svelte"
import Img from "./Img.svelte"
export let data;
</script>


<div class="bg-stone-700 m-1 p-2 rounded-sm">
{#each data as datum}

{#if datum.type=="h1"}
<H1 code={datum.code} />
{/if}

{#if datum.type=="image" || datum.type=="img"}
<!-- svelte-ignore a11y-img-redundant-alt -->
<Img code={datum.code} />
{/if}

{#if datum.type=="table" || datum.type=="tbl"}
<Table code={datum.code} />
{/if}

{/each}
</div>