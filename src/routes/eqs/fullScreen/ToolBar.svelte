<script>
//@ts-nocheck
import {NavBtn2} from '$lib/cmp';
export let fs;
export let redraw;

function get_hdg_img(){
// debugger;
fs.type = 'hdg_img';
fs.code = JSON.stringify({
    "hdgContent" : "New Item",
    "imgSrc" : "male"
});
redraw();
}
function get_string(typ,val){
// debugger;
fs.type = typ;
fs.code = val;
redraw();
}
function get_hdg2_img2(){
// debugger;
fs.type = 'hdg2_img2';
fs.code = JSON.stringify({
    "hdgContent" : "New Item",
    "hdgContent2" : "New Item",
    "imgSrc" : "male",
    "imgSrc2" : "male"
});
redraw();
}
</script>


<div class='flex flex-wrap justify-start'>
<NavBtn2 title='hdg_img' clk={get_hdg_img}/>
<NavBtn2 title='hdg2_img2' clk={get_hdg2_img2}/>
<!-- These buttons use raw text -->
<NavBtn2 title='hdg_gp' clk={()=>get_string('hdg_gp','')}/>
<NavBtn2 title='txt_gp' clk={()=>get_string('txt_gp','')}/>

</div>