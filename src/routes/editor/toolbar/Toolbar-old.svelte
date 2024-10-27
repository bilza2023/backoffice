<script >
//@ts-nocheck
import {NavBtn2,NavLink,Logo,NavBtn,AreYouSure} from 'sveltetools_bils/src/cmp';
import {Icons, toast} from '$lib/util';
import UploadMp3 from './UploadMp3.svelte';
import UploadImage from './UploadImage.svelte';
	import EditDlg from '../EditDlg.svelte';

export let save;

export let presentationData;
export let delCurSlide;
export let showEditDlg=false;

let showDelete=false;
let showEdit=false;
export let showEditorToolbar=true;
let showSlideTemplateBrowser=false;


function delFirst(){
showDelete=false;
delCurSlide();
}


</script>

<div class='flex justify-between  bg-gray-600 m-0 p-0 items-center gap-1 '>
 
  <div class='flex justify-start items-center'>
    <Logo url='/' /> 
  
    
      
    <NavBtn2 title='Toggle' icon='📱'  clk={()=> showEditorToolbar=!showEditorToolbar} />

    <NavBtn2 title='Save' icon={Icons.BOOK}  clk={save} />
   
    <!-- <NavBtn2 title='Templates' icon={Icons.MAGICWAND}  clk={()=> showSlideTemplateBrowser=!showSlideTemplateBrowser} /> -->

      <NavLink title='Player1' icon={Icons.TV}  url={`/player?tcode=${presentationData.tcode}&filename=${presentationData.filename}&id=${presentationData._id}`} />

    <NavLink title='Player2' icon={Icons.TV}  url={`/player2?tcode=${presentationData.tcode}&filename=${presentationData.filename}&id=${presentationData._id}`} />
    


<!-- <NavBtn2 title='Upload Mp3' icon={Icons.SPEAKER}  clk={uploadMp3} /> -->
<UploadImage  tcode={presentationData.tcode} />
<UploadMp3 {presentationData} tcode={presentationData.tcode}/>

  </div> 

  <div class='flex justify-end m-0 p-1 items-center gap-1 border-2 border-gray-500  rounded-md text-xs mr-1'>

<NavBtn2 title='Edit' icon={Icons.PENCIL}  clk={()=>showEdit = !showEdit} />
<NavBtn2 title='Delete' icon={Icons.PENCIL}  clk={()=>showDelete = !showDelete} />

  </div>  
  


  {#if showDelete}
  <NavBtn2 title='Are You Sure to Delete' icon={Icons.DEL }  clk={delFirst} />
  {/if}


{#if showEdit}

<EditDlg    {presentationData}/>

{/if}
  


</div>








