 <script>
//@ts-nocheck
import Table from './Table.svelte';
import {HdgWithIcon} from '$lib/cmp'
import {Icons, browser,onMount,BASE_URL, toast} from '$lib/util';
let presentations=[];
let newPresentationName='';

async function del(id){
//  debugger;
  const resp = await fetch( `${BASE_URL}/pre/delete`, {
    method: 'POST',
      headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${token}`,
  },
  body: JSON.stringify( {id} )
  });

  if(resp.ok){
   toast.push("Deleted");
   readAll();
  }
}

async function create(name){
if (newPresentationName == '' || !newPresentationName){
toast.push("A name is required fornew presentation")
return false;
}
// debugger;
  const presentation = {slides:[] , name};
  const resp = await fetch( `${BASE_URL}/pre/create`, {
    method: 'POST',
      headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${token}`,
  },
  body: JSON.stringify( {presentation} )
  });

  if(resp.ok){
   toast.push("Presentation Created");
   newPresentationName = '';
   readAll();
  }
  
}
async function readAll(){
const resp = await fetch( `${BASE_URL}/pre/readAll`, {
    method: 'POST',
      headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${token}`,
  },
  });

  if(resp.ok){
   const data = await resp.json();
   presentations = data.items; 
  //  console.log(presentations)
  //  toast.push(" loaded");
  }
  
}
onMount(async ()=>{
  readAll();

});
</script>

<div class="bg-gray-800 text-white w-full min-h-screen"><!--page wrapper-->
{#if presentations}
<div class='flex justify-center w-full'>
<HdgWithIcon icon={Icons.BOOKS}>Presentations</HdgWithIcon>
</div>
<!-- create new form -->
<div class="bg-stone-600 p-2 m-2 rounded-md roder-2 border-white">
  <button class='bg-green-500 m-0 p-1 rounded-md mx-2 text-white' on:click={()=>create(newPresentationName)}>Create</button>
  <input type="text" class='bg-gray-900 m-0 p-2 rounded-md mx-2 outline-none text-white' bind:value={newPresentationName} placeholder="Presentation Name">
</div>

<Table  {presentations} {del} />

{:else}
<h1>loading....</h1>
{/if}
</div><!--page wrapper-->