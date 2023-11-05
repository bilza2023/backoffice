<script>
//@ts-nocheck
import {HdgWithIcon} from '$lib/cmp'
import {Icons, browser,onMount,BASE_URL, toast} from '$lib/util';
let presentations=[];
let newPresentationName='';

async function del(id){
 debugger;
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

async function create(){
// debugger;
  const presentation = {slides:[]};
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
   toast.push(" loaded");
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

<button class='bg-green-800 m-0 p-1 rounded-md mx-8' on:click={()=>create(newPresentationName)}>Create</button>

{#each presentations as presentation,i}

  <div class='flex justify-center w-full p-1 m-1 rounded-md'>
    <a class=" bg-green-800 m-0 p-1 rounded-md mx-8"  href= {`/preplayer?id=${presentation._id}`} target='_blank'>{presentation._id}</a>
    <a class=" bg-stone-700 m-0 p-1 rounded-md mx-8"  href= {`/preEditor?id=${presentation._id}`} target='_blank'>Edit</a>
    <button 
    class=" bg-red-800 m-0 p-0 rounded-md  text-xs"
    on:click={()=>del(presentation._id)}
     >Delete</button>
  </div>
{/each}
{/if}
</div><!--page wrapper-->