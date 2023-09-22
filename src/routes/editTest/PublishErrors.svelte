<script>
//@ts-nocheck
//14-Aug-2023 : A good example of using store variable to communicate and also when there is no data in the array it does not show.
//To make it disappear clk={()=>errorsArrayStore.set([]) -->waoo

import {BtnWIconSm} from '$lib/cmp';
import {Icons} from '$lib/util';
import {errorsArrayStore} from './store';

$: errorsArray = $errorsArrayStore;

</script>


{#if errorsArray.length > 0 }
<div class='w-8/12 mx-auto border-2 border-white rounded-md p-1 m-1 '>
    <div class='flex justify-center'>
    <h1 class="p-2 m-2 rounded-lg bg-gray-700 w-2/12 text-center ">Errors</h1>
    </div>
    <ol class="">
    {#each errorsArray as err }

    <li class="bg-orange-900 p-2 m-2 rounded-lg border-red-900">{err}</li>
    {/each}
    </ol>
    
    <div class='flex justify-center'>
    <BtnWIconSm   icon={Icons.HIDE} clk={()=>errorsArrayStore.set([])} />
    </div>
</div>
{/if}