<script>
    //@ts-nocheck
    
    export let item;
    
</script>

<div class="flex flex-col ">
    
    <table class="border-collapse border-2 border-white">
        <tr>
            <td class="border border-white p-1">Name</td>
            <td class="border border-white p-1">
                <input type="text" bind:value={item.name} class="bg-gray-900 text-white p-1" >
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Translate</td>
            <td class="border border-white p-1">
                <input type="checkbox" bind:checked={item.translate} class="bg-gray-900 text-white p-1">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Cell Width</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.cellWidth} class="bg-gray-900 text-white p-1" placeholder="Cell Width">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Cell Height</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.cellHeight} class="bg-gray-900 text-white p-1" placeholder="Cell Height">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Line Width</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.lineWidth} class="bg-gray-900 text-white p-1" placeholder="Line Width">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Line Color</td>
            <td class="border border-white p-1">
                <input type="color" bind:value={item.lineColor} class="bg-gray-900 text-white p-1" placeholder="Line Color">
            </td>
        </tr>
    </table>
</div>
