<script>
    //@ts-nocheck

    export let item;

    function applyTemplate(event) {
        switch (event.target.value) {
             
            case 'diamond':
            item.arr = '5,-5,5,5,-5,5,-5,-5';
            break;
            case 'leftArrow':
            item.arr = '0,0,-2,0,0,-1,-3,2,3,2,0,-1,2,0,0,-2';
            break;
            case 'rightArrow':
            item.arr = '2,0,0,-1,3,2,-3,2,0,-1,-2,0,0,-2';
            break;

            default:
                break;
        }
    }
</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
        <tr>
            <td class="border border-white p-1">Templates</td>
            <td class="border border-white p-1">
                <select on:change={applyTemplate} class="bg-gray-900 text-white p-1">
                    <option value="none">None</option>
                    <option value="diamond">diamond</option>
                    <option value="leftArrow">leftArrow</option>
                    <option value="rightArrow">rightArrow</option>
                </select>
            </td>
        </tr>
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
            <td class="border border-white p-1">XY Array</td>
            <td class="border border-white p-1">
                <textarea type="text" bind:value={item.arr} class="bg-gray-900 text-white p-1" />
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">X</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.x} class="bg-gray-900 text-white p-1" placeholder="X0">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Y</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.y} class="bg-gray-900 text-white p-1" placeholder="Y0">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Line Color</td>
            <td class="border border-white p-1">
                <input type="color" bind:value={item.color} class="bg-gray-900 text-white p-1" placeholder="Line Color">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Line Width</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.lineWidth} class="bg-gray-900 text-white p-1" placeholder="Line Width">
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
    </table>
</div>
