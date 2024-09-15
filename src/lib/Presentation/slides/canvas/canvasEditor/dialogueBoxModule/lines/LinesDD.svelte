<script>
    //@ts-nocheck
    export let extra;

    function handleSheetChange(event) {

    let val = event.target.value;


    switch (val) {
        case 'arrowLeft':
        extra.lines = [ 
        {x: 100, y: 35},  
        {x: 30, y: 35},   
        {x: 30, y: 20},   
        {x: 0, y: 50},    
        {x: 30, y: 80},   
        {x: 30, y: 65},   
        {x: 100, y: 65},  
        {x: 100, y: 35}   
    ];
            break;

        case 'arrowRight':
        extra.lines = [ 
        {x: 0, y: 35},  
        {x: 70, y: 35}, 
        {x: 70, y: 20}, 
        {x: 100, y: 50},
        {x: 70, y: 80}, 
        {x: 70, y: 65}, 
        {x: 0, y: 65},  
        {x: 0, y: 35}   
        ];
            break;
    
        default:
            break;
    }
 
  }
</script>

<div class="flex flex-col w-full ">
    <table class="border-collapse border-2 border-white">
        
        <tr>
            <td class="border border-white p-1">Shapes</td>
            <td class="border  border-white p-1">
                <select  class="bg-gray-900 text-white p-1" on:change={handleSheetChange} value={10}>
                    <option value="arrowLeft">Arrow Left</option>
                    <option value="arrowRight">Arrow Right</option>
                </select>
            </td>
        </tr>





</table>
</div>