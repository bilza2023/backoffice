<script>
    //@ts-nocheck
    import {Icons} from '$lib/util';
    export let extra;
    let displayBody=false;
</script>

<div class="flex w-full text-white rounded-md justify-center bg-stone-700 p-1 m-1 border-2 border-white">

    <div class="flex justify-end gap-1">
        <button on:click={()=>displayBody = !displayBody} class="p-1 m-1 text-xs rounded-md hover:bg-slate-700">Canvas</button>
    </div>
</div>

{#if displayBody}
<div class="flex flex-col w-full">
    
    <table class="border-collapse border-2 border-white">
        <tr>
            <td class="border border-white p-1">Bg Color</td>
            <td class="border border-white p-1">
                <input type="color" bind:value={extra.backgroundColor} class="bg-gray-900 text-white p-1">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Cell Width</td>
            <td class="border border-white p-1">
                <input type="number" min="1" max="1000" bind:value={extra.cellWidth} class="bg-gray-900 text-white p-1">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Cell Height</td>
            <td class="border border-white p-1">
                <input type="number" min="1" max="1000" bind:value={extra.cellHeight} class="bg-gray-900 text-white p-1">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">X-Factor</td>
            <td class="border border-white p-1">
                <input type="number" min="0" max="100" bind:value={extra.xFactor} class="bg-gray-900 text-white p-1">
            </td>
        </tr>
    </table>
</div>
{/if}
