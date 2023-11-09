<script>
//@ts-nocheck
import {NavBtn2} from '$lib/cmp';
import {Icons,toast,uuid} from '$lib/util';
// import getNewSlide  from '$lib/Presentation/getNewSlide.js';
import {getNewSlide} from '$lib/Presentation';
export let slides;
export let redraw;


function addSlide(type){
//  debugger;
    const newSlide = getNewSlide(type);
        if (newSlide == null){
            toast.push("failed to add slide");
            return;    
        }
    newSlide.uuid = uuid();
    slides.push(newSlide);
    redraw();
}
</script>

<div class='flex flex-wrap justify-center w-full bg-stone- 900'>

<NavBtn2  icon={Icons.BUS} title='HdgImg' clk={()=>addSlide('HdgImg')} />
<NavBtn2  icon={Icons.EXPLOSION} title='Blink' clk={()=>addSlide('BlinkingMessage')} />
<NavBtn2  icon={Icons.MANAGER } title='ImgCap' clk={()=>addSlide('ImgWCaption')} />
<NavBtn2  icon={Icons.HOT } title='HdgList' clk={()=>addSlide('HdgList')} />
<NavBtn2  icon={Icons.BARCHART } title='TblStr' clk={()=>addSlide('TblStr')} />
<NavBtn2  icon={Icons.CODE } title='Eqs' clk={()=>addSlide('Eqs')} />



</div>