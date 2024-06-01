<script>
    //@ts-nocheck
import {NavBtn2} from '$lib/cmp';
import {Icons} from '$lib/util';
export let addTemplate;    
</script>


<div class='flex flex-wrap  bg-gray-900 border-2 border-white'>

    <NavBtn2 title='test' icon={Icons.TEMPLATE }  clk={()=>addTemplate('test')} />            
    <NavBtn2 title='jt1' icon={Icons.TEMPLATE }  clk={()=>addTemplate('jt1')} />            
    <NavBtn2 title='rnl' icon={Icons.TEMPLATE }  clk={()=>addTemplate('rnl')} />            
    <NavBtn2 title='imgW4lbl' icon={Icons.TEMPLATE }  clk={()=>addTemplate('imgW4lbl')} />            
    <NavBtn2 title='imgW2lbl' icon={Icons.TEMPLATE }  clk={()=>addTemplate('imgW2lbl')} />            
 
</div>        