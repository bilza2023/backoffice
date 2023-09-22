<script>
//@ts-nocheck
import {onMount} from '$lib/util';
import getTotalCount from './getTotalCount';

export let icon;
export let title;
export let slug;

let count=0;

onMount(async ()=>{
  try {
      count = await getTotalCount(slug);
  } catch (e) {
  
  }   
});

</script>

<!-- {#if count} -->
  <div class='flex flex-col bg-stone-600 text-white rounded-md p-1 m-1'>
            <div>
              <div class='flex justify-center items-center  text-5xl p-1'>
                {icon}
              </div>
            </div>
            
            <div>
              <div class='flex justify-center items-center bg-stone-800 text-sm p-1 rounded-md m-1 '>
                {title}
              </div>
            </div>
            
            <div>
              <div class='flex justify-center items-center bg-stone-800 text-2xl p-1 rounded-md'>
                {count}
              </div>
            </div>
</div>
<!-- {/if} -->