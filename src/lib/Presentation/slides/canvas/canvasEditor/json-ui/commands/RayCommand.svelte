<script>
    //@ts-nocheck
    
    export let item;
</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
        <tr>
            <td class="border border-white p-1">Name</td>
            <td class="border border-white p-1">
                <input type="text" bind:value={item.name} class="bg-gray-900 text-white p-1" placeholder="Line Width">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Translate</td>
            <td class="border border-white p-1">
                <input type="checkbox" bind:checked={item.translate} class="bg-gray-900 text-white p-1">
            </td>
        </tr>
        
        <tr>
            <td class="border border-white p-1">X0</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.x0} class="bg-gray-900 text-white p-1" placeholder="X0">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Y0</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.y0} class="bg-gray-900 text-white p-1" placeholder="Y0">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">X1</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.x1} class="bg-gray-900 text-white p-1" placeholder="X1">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Y1</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.y1} class="bg-gray-900 text-white p-1" placeholder="Y1">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Line Color</td>
            <td class="border border-white p-1">
                <input type="color" bind:value={item.lineColor} class="bg-gray-900 text-white p-1" placeholder="Line Color">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Line Width</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.lineWidth} class="bg-gray-900 text-white p-1" placeholder="Line Width">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Arrow Width</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.arrowWidth} class="bg-gray-900 text-white p-1" placeholder="Arrow Width">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Arrow Height</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.arrowHeight} class="bg-gray-900 text-white p-1" placeholder="Arrow Height">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Start Arrow</td>
            <td class="border border-white p-1">
                <input type="checkbox" bind:checked={item.startArrow} class="bg-gray-900 text-white p-1">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">End Arrow</td>
            <td class="border border-white p-1">
                <input type="checkbox" bind:checked={item.endArrow} class="bg-gray-900 text-white p-1">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Dash</td>
            <td class="border border-white p-1">
                <input type="text" bind:value={item.dash} class="bg-gray-900 text-white p-1" >
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Gap</td>
            <td class="border border-white p-1">
                <input type="text" bind:value={item.gap} class="bg-gray-900 text-white p-1" >
            </td>
        </tr>
<!-- show at and hide at -->
<tr>
    <td class="border border-white p-1">Show/Hide</td>
    <td class="border border-white p-1">
        <input type="checkbox" bind:checked={item.useShowHide} class="bg-gray-900 text-white p-1">
    </td>
</tr>
<tr>
    <td class="border border-white p-1">Show At</td>
    <td class="border border-white p-1">
        <input type="number" bind:value={item.showAt} class="bg-gray-900 text-white p-1" >
    </td>
</tr>

<!-- show at and hide at -->

    </table>
</div>
