<script>
    //@ts-nocheck
    import addUTFIcon from "./addUTFIcon";
    import UTFDD from "./UTFDD.svelte";
    export let item;
    export let redraw;

    function action(e){
        addUTFIcon(e,item);
        redraw();
    }
    function randNo(length=8){
    const digits = '0123456789';
  let result = '';
  const digitsLength = digits.length;
  for (let i = 0; i < length; i++) {
      result += digits.charAt(Math.floor(Math.random() * digitsLength));
  }
  return result;
  }
    function applyTemplate(event) {
        switch (event.target.value) {

//////////////////////////////
            case 'title':
       item.font = "30px Arial";
       item.color = "yellow";
       item.shadowOffsetX =  6;
       item.shadowOffsetY =  6;
       item.globalAlpha =  1;
       item.shadowColor =  "black";
       item.shadowBlur =  3;
            break;
            case 'taleem':
       item.text = "https://taleem.help";
       item.font = "20px Arial";
       item.translate = true;
       item.x = 12;
       item.y = 12;
       item.color = "yellow";
       item.shadowOffsetX =  4;
       item.shadowOffsetY =  4;
       item.globalAlpha =  1;
       item.shadowColor =  "black";
       item.shadowBlur =  2;
            break;

            case 'jt' :
                item.name = "jt_"+ randNo();
                // item.text= "Ex 8.2 Question 3 Pt 2";
                item.x= 4;
                item.y= 3;
                item.color= "#FAE500";
                item.font= "80px Arial";
                item.shadowOffsetX = 12;
                item.shadowOffsetY = 12;
                item.shadowColor = "#9D850B";
                item.shadowBlur = 12
            break;

            default:
                break;
        }
    }
</script>

<div class="flex flex-col w-full ">
    <table class="border-collapse border-2 border-white">
        <tr>
            <td class="border border-white p-1">Templates</td>
            <td class="border border-white p-1">
                <select on:change={applyTemplate} class="bg-gray-900 text-white p-1">
                    <option value="none">None</option>
                    <option value="taleem">taleem</option>
                    <option value="title">Title</option>
                    <option value="jt">JT</option>
                </select>
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Add Icon</td>
            <td class="border border-white p-1">
<UTFDD {action}/>
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
            <td class="border border-white p-1">Text</td>
            <td class="border border-white p-1">
                <input type="text" bind:value={item.text} class="bg-gray-900 text-white p-1" placeholder="Text">
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



