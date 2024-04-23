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
            <td class="border border-white p-1">X</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.x} class="bg-gray-900 text-white p-1" placeholder="X">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Y</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.y} class="bg-gray-900 text-white p-1" placeholder="Y">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Radius X</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.radiusX} class="bg-gray-900 text-white p-1" placeholder="Radius X">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Radius Y</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.radiusY} class="bg-gray-900 text-white p-1" placeholder="Radius Y">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Rotation</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.rotation} class="bg-gray-900 text-white p-1" >
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Start Angle</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.startAngle} class="bg-gray-900 text-white p-1" >
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">End Angle</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.endAngle} class="bg-gray-900 text-white p-1" >
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Color</td>
            <td class="border border-white p-1">
                <input type="color" bind:value={item.color} class="bg-gray-900 text-white p-1" placeholder="Color">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Fill</td>
            <td class="border border-white p-1">
                <input type="checkbox" bind:checked={item.fill} class="bg-gray-900 text-white p-1">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Line Width</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.lineWidth} class="bg-gray-900 text-white p-1" >
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Dash</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.dash} class="bg-gray-900 text-white p-1" >
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Gap</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.gap} class="bg-gray-900 text-white p-1" >
            </td>
        </tr>
    </table>
</div>
