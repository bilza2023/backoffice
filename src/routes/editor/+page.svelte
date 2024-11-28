<script>
  import { Editor } from "taleempresentation";
  import audioData from "./audioData.js";
  
  import {upgrade} from "$lib/upgrade/upgrade.js";

import {SOUND_FILE_PATH,onMount} from "$lib/util";
import Toolbar from "./toolbar/Toolbar.svelte";
  import {db} from "$lib/db";
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
   const item = await resp.json();
   slides = item.slides;
   soundFilePath =  SOUND_FILE_PATH + item.filename + '.opus'; 
   slides = await upgrade(slides);
   
 }else {throw new Error('Failed to load');}
   
 } catch (error) {
      console.error(error);
 }
    
});

</script>

<div class="w-full bg-gray-800">

{#if slides}
<Toolbar  bind:showEditorToolbar={showEditorToolbar}/>

  <Editor
    isBlob={false}
    showToolbar={showEditorToolbar}
    {slides}
    audioData={soundFilePath}
   
  />

{/if}

</div>