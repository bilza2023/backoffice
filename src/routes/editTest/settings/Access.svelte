<script>
//@ts-nocheck
import {BtnWIconXs,FormRow} from '$lib/cmp';
import {Icons} from '$lib/util';
import ClassesDd from "$lib/appComp/ClassesDD.svelte";
export let quiz;

function setAccess(access){
        quiz.private = access;
}

// debugger;
let btnColorPrivate;
let btnColorPublic;

$: btnColorPublic = quiz.private ? 'bg-blue-800' : 'bg-red-800';
$: btnColorPrivate = quiz.private ? 'bg-red-800' : 'bg-blue-800';
</script>

<div>

    <div class={`flex justify-center w-full bg-gray-700 m-1 p-1 rounded-md    
    `}>
        <BtnWIconXs icon={Icons.TEAM}
        bgColor = {btnColorPublic}
        clk={()=>setAccess(false)}
        >
        Public</BtnWIconXs>
        
        <BtnWIconXs icon={Icons.KEY}
        bgColor = {btnColorPrivate}
        clk={()=>setAccess(true)} >
        Private</BtnWIconXs>
    </div>
    {#if quiz.private}
        <FormRow title='Class'>
            <ClassesDd item={quiz}/>
        </FormRow>
    {/if}
</div>       