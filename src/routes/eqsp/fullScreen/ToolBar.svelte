<script>
//@ts-nocheck
import {AreYouSure} from '$lib/cmp';
import {toast} from '$lib/util';
import {NavBtn2} from '$lib/cmp';
export let fs;
export let redraw;

function isNewFsOk(){
    if(!fs){return true;}
    if(typeof fs !== 'object') { return true;}
    if(typeof fs.type == 'undefined') { return true;}

    if(fs == null ) { return true;}
    if(fs.type == null ) { return true;}
    if( fs.type == '') { return true;}
    if(fs.type == "Null") { return true;}
    //simply check _id
return false;    
}
function deleteFn(){toast.push('FullScreen deleted');fs =  {code : '' , type: ''};}
////////////////////////////////
function get_string(typ,val){
    const isok = isNewFsOk();
        if(!isok){
        toast.push('Please Delete Previous data first');
        return;}
    // debugger;
    fs.type = typ;
    fs.code = val;
    redraw();
}

</script>

<div class='flex justify-around'>
<div class='flex flex-wrap justify-start'>

<NavBtn2 title='hdg_img' clk={()=>get_string('hdg_img',
JSON.stringify({
    "hdgContent" : "New Item",
    "imgSrc" : ""
})
)}/>

<NavBtn2 title='hdg2_img2' clk={()=>get_string('hdg2_img2',
JSON.stringify({
    "hdgContent" : "New Item",
    "hdgContent2" : "New Item",
    "imgSrc" : "",
    "imgSrc2" : ""
})
)}/>

<NavBtn2 title='hdg_gp' clk={()=>get_string('hdg_gp','')}/>
<NavBtn2 title='txt_gp' clk={()=>get_string('txt_gp','')}/>

</div>


<div class='flex flex-wrap justify-start'>
<AreYouSure  {deleteFn}/>
</div>

</div>