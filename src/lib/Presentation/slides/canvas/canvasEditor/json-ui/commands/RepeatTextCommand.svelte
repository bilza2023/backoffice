<script>
//@ts-nocheck
export let item;

function applyTemplate(event) {
        // Your logic here to handle template changes
        console.log("Template changed:", event.target.value);
        switch (event.target.value) {
            
            case 'h-ruler':
            item.translate = true;
            item.textArray = "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40";
            item.initialX = 0;
            item.initialY = 0;
            item.xFactor = 1;
            item.yFactor = 0;
            item.color = "black";
            item.font = "16px Arial";
            break;
            
            case 'v-ruler':
            item.translate = true;
            item.textArray = "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14";
            item.initialX = 0;
            item.initialY = 0;
            item.xFactor = 0;
            item.yFactor = 1;
            item.color = "black";
            item.font = "16px Arial";
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
                    <option value="h-ruler">H-Ruler</option>
                    <option value="v-ruler">V-Ruler</option>
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
            <td class="border border-white p-1">Text Array</td>
            <td class="border border-white p-1">
                <input type="text" bind:value={item.textArray} class="bg-gray-900 text-white p-1" placeholder="Text Array">
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
            <td class="border border-white p-1">Color</td>
            <td class="border border-white p-1">
                <input type="color" bind:value={item.color} class="bg-gray-900 text-white p-1" placeholder="Color">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Font</td>
            <td class="border border-white p-1">
                <input type="text" bind:value={item.font} class="bg-gray-900 text-white p-1" placeholder="Font">
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
