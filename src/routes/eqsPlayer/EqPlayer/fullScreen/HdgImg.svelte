<script>
//@ts-nocheck
import {Icons,onMount} from '$lib/util';
import {HdgWithIcon} from '$lib/cmp';
const temp = {
 "hdgContent" : "Some Content",
 "imgSrc" : "graph"
}
export let fs;
// export let typeData;
$: data = JSON.parse(fs.code);
// $: console.log(JSON.parse(fs.code),fs);

</script>
<HdgWithIcon>{data.hdgContent}</HdgWithIcon>

<div id='fsElm' class='flex justify-center w-full m-1 p-2 pb-4'>
    <img class="w-6/12" src= {`mathImages/${data.imgSrc}.png`} alt="" >
</div>