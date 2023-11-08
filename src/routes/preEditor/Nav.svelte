<script>
//@ts-nocheck
import { NavBtn2} from '$lib/cmp';
import { Icons,goto} from '$lib/util';
import { ThemeDD} from '$lib/Presentation';
export let showAddNew;
export let saveLocal;
export let applyTheme;

</script>

<div class='flex justify-between   w-full p-1 m-0 bg-gray-700'>
  <div class='flex justify-start'>
        <NavBtn2  icon={Icons.HOUSE} title='Home' clk={()=>goto('/presentations')}     />
        <NavBtn2  icon={Icons.BULB} title='New' clk={()=>showAddNew = !showAddNew}     />
        <NavBtn2  icon={Icons.SAVE} title='Save' clk={saveLocal}     />
  </div>
  <div class='flex justify-end items-end '>
        <div class="p-2 m-0  rounded-md bg-gray-900 text-yellow-500    text-xs">Themes:</div> 
        <ThemeDD  callback={applyTheme}/>
  </div>      
</div>

