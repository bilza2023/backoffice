<script>
    //@ts-nocheck

    export let item ;
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
            <td class="border border-white p-1">Label</td>
            <td class="border border-white p-1">
                <input type="text" bind:value={item.label} class="bg-gray-900 text-white p-1" placeholder="Label">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Dot Width</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.dot_width} class="bg-gray-900 text-white p-1" placeholder="Dot Width">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Dot Color</td>
            <td class="border border-white p-1">
                <input type="color" bind:value={item.dot_color} class="bg-gray-900 text-white p-1" placeholder="Dot Color">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Text Color</td>
            <td class="border border-white p-1">
                <input type="color" bind:value={item.text_color} class="bg-gray-900 text-white p-1" placeholder="Text Color">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Text Size</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.text_size} class="bg-gray-900 text-white p-1" placeholder="Text Size">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Fill</td>
            <td class="border border-white p-1">
                <input type="checkbox" bind:checked={item.fill} class="bg-gray-900 text-white p-1">
            </td>
        </tr>
    </table>
</div>
