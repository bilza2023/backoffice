<script>
    //@ts-nocheck
import {NavBtn2} from '$lib/cmp';
import {Icons} from '$lib/util';
export let addNew;    
</script>


<div class='flex flex-wrap  bg-gray-900 border-2 border-white'>
<NavBtn2 title='HdgImg' icon={Icons.EYES} clk={()=>addNew('HdgImg')} />
    <NavBtn2 title='HdgList' icon={Icons.BULB} clk={()=>addNew('HdgList')} />
    <NavBtn2 title='BlinkMsg' icon={Icons.EXPLOSION } clk={()=>addNew('BlinkingMessage')} />
    
        <NavBtn2 title='ImgWCaption' icon={Icons.MANAGER } clk={()=>addNew('ImgWCaption')} />
        <NavBtn2 title='TblStr' icon={Icons.RULER } clk={()=>addNew('TblStr')} />
        <NavBtn2 title='Eqs' icon={Icons.NOTES }  clk={()=>addNew('Eqs')} />
              
      <NavBtn2 title='Img' icon={Icons.STUDENT }  clk={()=>addNew('img')} />
      <NavBtn2 title='HdgPara' icon={Icons.TEXT }  clk={()=>addNew('HdgPara')} />
                  
                  
      <NavBtn2 title='Grid' icon={Icons.CHARTUP } clk={()=>addNew('grid')} />
      <NavBtn2 title='Canvas' icon={Icons.TV }  clk={()=>addNew('canvas')} />

</div>        