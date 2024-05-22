<script>
    //@ts-nocheck
    import addUTFIcon from "./addUTFIcon";
    import UTFDD from "./UTFDD.svelte";
    import SheetItemsDd from "../../../sprite/SheetItemsDD.svelte";
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
            <td class="border border-white p-1">Sheet</td>
            <td class="border  border-white p-1">
                <select  class="bg-gray-900 text-white p-1" bind:value={item.sheet}>
                    <option value="students">Students</option>
                    <option value="alphabets">Alphabets</option>
                    <option value="figs">Figs</option>
                </select>
            </td>
        </tr>

        <tr>
        <td class="border border-white p-1">S-Items</td>
        <td class="border  border-white p-1">
            <select  class="bg-gray-900 text-white p-1" bind:value={item.sheetItem}>    
                        <SheetItemsDd   sheet={item.sheet} sheetItem={item.sheetItem}  />
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
            <td class="border border-white p-1">DX</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.dx} class="bg-gray-900 text-white p-1" placeholder="X">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">DY</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.dy} class="bg-gray-900 text-white p-1">
            </td>
        </tr>
                <tr>
            <td class="border border-white p-1">W-Factor</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.wFactor} class="bg-gray-900 text-white p-1"  min=0 max=10 step="0.1">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">H-Factor</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.hFactor} class="bg-gray-900 text-white p-1"  min=0 max=10 step="0.1">
            </td>
        </tr>
       
        <tr>
            <td class="border border-white p-1">globalAlpha</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.globalAlpha} class="bg-gray-900 text-white p-1" min="0" max="1" step="0.1">
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



