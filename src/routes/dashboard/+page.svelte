<script>
    //@ts-nocheck
import Toolbar from "./Toolbar.svelte";
import { API_URL,toast,Icons,ajaxPost } from '$lib/util';
import Summary from "./Summary.svelte";

let selectedTcode = 'fbise9math';

async function download(){
    try{

      const resp = await ajaxPost( `${API_URL}/tcode/where` , { "query":{} , "tcode":selectedTcode } );
  
  /////////////////////    
      if (resp){
        const questions = await resp.json();
        localStorage.setItem(`${selectedTcode}_questions`, JSON.stringify(questions));
        const currentTimestamp = new Date().getTime();
        localStorage.setItem(`${selectedTcode}_download_time`, currentTimestamp.toString());

        toast.push('download completed');
        // console.log("questions" , questions);
      }else {
       const data = await resp.json();
        toast.push(data.message);
      }
  
    } catch (e) {
         toast.push('System error');
    }      
}

  
</script>

<div class="w-full min-h-screen   bg-gray-800 text-white text-lg ">

    <Toolbar {download} bind:selectedTcode={selectedTcode}/>

    
<h1>{selectedTcode}</h1>

<Summary {selectedTcode}/>


</div> 