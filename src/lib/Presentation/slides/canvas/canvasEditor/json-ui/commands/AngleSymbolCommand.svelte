<script>
    //@ts-nocheck
    export let item;

    function applyTemplate(event) {
        switch (event.target.value) {
             
            case 'left':
            item.translate = true;
            item.radius = 25;
            item.ticks = 1;
            item.startAngle = -182 ;
            item.endAngle = -136;
            break;

            case 'right':
            item.translate = true;
            item.radius = 25;
            item.ticks = 3;
            item.startAngle = -54 ;
            item.endAngle = 4;    
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
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
            </td>
        </tr>
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
            <td class="border border-white p-1">Radius</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.radius} class="bg-gray-900 text-white p-1" >
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Ticks</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.ticks} class="bg-gray-900 text-white p-1" >
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Start Angle</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.startAngle} class="bg-gray-900 text-white p-1" placeholder="Start Angle" >
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">End Angle</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.endAngle} class="bg-gray-900 text-white p-1" placeholder="End Angle" >
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Color</td>
            <td class="border border-white p-1">
                <input type="color" bind:value={item.color} class="bg-gray-900 text-white p-1" placeholder="Color" >
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Line Width</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.lineWidth} class="bg-gray-900 text-white p-1" >
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Show Origin</td>
            <td class="border border-white p-1">
                <input type="checkbox" bind:checked={item.showOrigin} class="bg-gray-900 text-white p-1">
            </td>
        </tr>
     
    </table>
</div>
