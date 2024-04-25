<script>
    //@ts-nocheck
    
    export let item;
    function randNo(length=8){
    const digits = '0123456789';
  let result = '';
  const digitsLength = digits.length;
  for (let i = 0; i < length; i++) {
      result += digits.charAt(Math.floor(Math.random() * digitsLength));
  }
  return result;
  }

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
            <td class="border border-white p-1">Text</td>
            <td class="border border-white p-1">
                <textarea type="text" bind:value={item.text} class="bg-gray-900 text-white p-1" />
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
        <tr>
            <td class="border border-white p-1">lineHeightOffset</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.lineHeightOffset} class="bg-gray-900 text-white p-1" >
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">xOffset</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.xOffset} class="bg-gray-900 text-white p-1" >
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">shadowOffsetX</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.shadowOffsetX} class="bg-gray-900 text-white p-1" placeholder="Y">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">shadowOffsetY</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.shadowOffsetY} class="bg-gray-900 text-white p-1" placeholder="Y">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">shadowBlur</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.shadowBlur} class="bg-gray-900 text-white p-1" placeholder="Y">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">shadowColor</td>
            <td class="border border-white p-1">
                <input type="color" bind:value={item.shadowColor} class="bg-gray-900 text-white p-1" placeholder="Color">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">globalAlpha</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.globalAlpha} class="bg-gray-900 text-white p-1" min="0" max="1" step="0.1">
            </td>
        </tr>
    </table>
</div>



