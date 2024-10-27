<script >
//@ts-nocheck
import {NavBtn2,NavLink,Logo,NavBtn,AreYouSure} from 'sveltetools_bils/src/cmp';
import {Icons, toast} from '$lib/util';

export let save;
export let showEditorToolbar=true;

</script>

<div class='flex justify-between  bg-gray-600 m-0 p-0 items-center gap-1 '>
 
<div class='flex justify-start items-center'>
    <Logo url='/' /> 
  
    
      
    <NavBtn2 title='Toggle' icon='📱'  clk={()=> showEditorToolbar=!showEditorToolbar} />

    <NavBtn2 title='Save' icon={Icons.BOOK}  clk={save} />
   
    <!-- <NavBtn2 title='Templates' icon={Icons.MAGICWAND}  clk={()=> showSlideTemplateBrowser=!showSlideTemplateBrowser} /> -->

      <!-- <NavLink title='Player1' icon={Icons.TV}  url={`/player?tcode=${presentationData.tcode}&filename=${presentationData.filename}&id=${presentationData._id}`} />

    <NavLink title='Player2' icon={Icons.TV}  url={`/player2?tcode=${presentationData.tcode}&filename=${presentationData.filename}&id=${presentationData._id}`} /> -->
    


<!-- <NavBtn2 title='Upload Mp3' icon={Icons.SPEAKER}  clk={uploadMp3} /> -->
<!-- <UploadImage  tcode={presentationData.tcode} /> -->
<!-- <UploadMp3 {presentationData} tcode={presentationData.tcode}/> -->

  </div> 

  


  <!-- {#if showDelete}
  <NavBtn2 title='Are You Sure to Delete' icon={Icons.DEL }  clk={delFirst} />
  {/if} -->


<!-- {#if showEdit}

<EditDlg    {presentationData}/>

{/if} -->
  


</div>








