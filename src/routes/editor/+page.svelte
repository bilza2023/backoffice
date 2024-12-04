<script>
  import { Editor } from "taleempresentation";
  import audioData from "./audioData.js";
  import saveFinal from './fn/saveFinal';
  
  
import {SOUND_FILE_PATH,onMount} from "$lib/util";
import Toolbar from "./toolbar/Toolbar.svelte";
  import {db} from "$lib/db";
  let item =null;
  let showEditorToolbar=true;
  let slides;
  let id;
  let soundFilePath;
/////////////////////////////
  onMount(async ()=>{
  try {
   id = new URLSearchParams(location.search).get("id");
   const resp = await db.tcode.getOne(id);
   
 if (resp.ok){
   item = await resp.json();
   slides = item.slides;
   soundFilePath =  SOUND_FILE_PATH + item.filename + '.opus'; 

 }else {throw new Error('Failed to load');}
   
 } catch (error) {
      console.error(error);
 }
    
});

function convertToUrlFriendlyName(name) {
            const urlFriendlyName = name.replace(/\s+/g, '_');
            const sanitizedUrlFriendlyName = urlFriendlyName.replace(/[^\w\d_]/g, '');
            return sanitizedUrlFriendlyName;
}
async function save(){
  if (item.name && item.name !== ''){
    item.name = convertToUrlFriendlyName(item.name);
  }   
  // debugger;
  // item.tcode = tcode;
 saveFinal(slides,item.tcode,item._id,item);
} 
</script>

<div class="w-full ">

{#if slides}
<Toolbar  bind:showEditorToolbar={showEditorToolbar} {save} />
  <Editor
    isBlob={false}
    showToolbar={showEditorToolbar}
    {slides}
    audioData={"https://taleem-media.blr1.cdn.digitaloceanspaces.com/sound/fbise9math2024_ch_1_ex_1.1_q_3_pt_4.opus"}
   
  />
{/if}

</div>


<style>
  :global(textarea) {
    background-color: #71767c;
    color: white;
  }
</style>