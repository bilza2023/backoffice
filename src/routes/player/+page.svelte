<script>
//@ts-nocheck 
import { onMount,toast,SOUND_FILE_PATH } from '$lib/util';
import { fade } from 'svelte/transition';
import {db} from "$lib/db";
import {Player} from "taleempresentation";
// let presentationObj;
let slides;
let id;
let soundFilePath;
  ////////////////////////////////////////////////////////
onMount(async ()=>{
  try {
   id = new URLSearchParams(location.search).get("id");
   const resp = await db.tcode.getOne(id);  
        if (resp.ok){
          const item = await resp.json();
          slides = item.slides;
          soundFilePath =  SOUND_FILE_PATH + item.filename + '.opus'; 
        }else {throw new Error('Failed to load');}
 } catch (error) {console.error(error);}  
});
</script> 
<div class='bg-gray-800 text-white w-full min-h-screen' 
style='position: fixed; top: 0;' >
  {#if slides}
    <div class="flex justify-center w-full   border-white border-2 text-center  rounded-lg  ">
          <Player
            isBlob = {false}
            {slides} 
            audioData= {soundFilePath}    
          />
    </div>
  {/if}
</div><!--page wrapper-->


