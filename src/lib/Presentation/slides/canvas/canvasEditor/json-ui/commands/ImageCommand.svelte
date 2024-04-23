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
            <td class="border border-white p-1">Image</td>
            <td class="border border-white p-1">
                <input type="text" bind:value={item.image} class="bg-gray-900 text-white p-1" placeholder="Image URL">
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
            <td class="border border-white p-1">Width</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.width} class="bg-gray-900 text-white p-1" placeholder="Width">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Height</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.height} class="bg-gray-900 text-white p-1" placeholder="Height">
            </td>
        </tr>
    </table>
</div>
