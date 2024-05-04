<script>
    //@ts-nocheck

    export let item;
</script>

<div class="flex flex-col w-full">
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
            <td class="border border-white p-1">Number of Dots</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.numberOfDots} class="bg-gray-900 text-white p-1" placeholder="Number of Dots">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Initial X</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.initialX} class="bg-gray-900 text-white p-1" placeholder="Initial X">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Initial Y</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.initialY} class="bg-gray-900 text-white p-1" placeholder="Initial Y">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">X Factor</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.xFactor} class="bg-gray-900 text-white p-1" placeholder="X Factor">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Y Factor</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.yFactor} class="bg-gray-900 text-white p-1" placeholder="Y Factor">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Width</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.width} class="bg-gray-900 text-white p-1" placeholder="Width">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Color</td>
            <td class="border border-white p-1">
                <input type="color" bind:value={item.color} class="bg-gray-900 text-white p-1" placeholder="Color">
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
