<script>
//@ts-nocheck
import { PageWrapper,HdgWithIcon,BtnWIconSm,Card} from  '$lib/cmp';
import { BASE_URL,chqLogin, onMount,toast,Icons,goto} from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';
import Instructions from '$lib/appComp/Instructions.svelte';
import { isLoginStore, isAdminStore } from '../lib/util/appStore.js';
  // Use the store values directly with the $ prefix
  $: isLogin = $isLoginStore;
  $: isAdmin = $isAdminStore;

let showInstructions = true;  
let showSyllabus = true;  
let showNotes = true;  

function closeInstructions(){showInstructions = !showInstructions}  
function closeSyllabus(){showSyllabus = !showSyllabus}  
function closeNotes(){showNotes = !showNotes}  
let questions;
onMount(async () => {
  try{
      if (!chqLogin()){
      goto('/login');
      }
 
  } catch (e) {
       toast.push('failed to load');
  }      
});

////////////////////////////////////////////////////////
</script>
<Nav />
<PageWrapper>

<div class='flex justify-center  p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>Teachers Hub</HdgWithIcon>
</div>

<BtnWIconSm clk ={closeInstructions}>Toggle Instructions</BtnWIconSm>
{#if showInstructions}
<br>
<Instructions />
{/if}

<br>

<BtnWIconSm clk ={closeSyllabus}>Toggle Syllabus</BtnWIconSm>
{#if showSyllabus}
<div class="flex justify-center p-2 m-2 ">
  <div class="w-3/12">
   <Card  url="/syllabusFBISE9th" title="FBISE 9th Syllbus" icon={Icons.BOOKS}/>
  </div>
</div>
{/if}
<br>

<BtnWIconSm clk ={closeNotes}>Toggle Notes</BtnWIconSm>
{#if showNotes}
<div class="flex justify-center  p-2 m-2 ">
  <div class="w-3/12">
  <Card  url="/notesFBISE9th" title="Notes FBISE 9th"/>
  </div>
</div>
{/if}
<br>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

</PageWrapper>
