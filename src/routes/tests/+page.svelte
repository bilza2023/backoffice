<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Card,CardBtn,InputFormCancel,ShowIfTrue,Loading} from '$lib/cmp';
import {onMount,toast , Icons,Agent} from '$lib/util';
import create from './fn/create';
import {itemsStore,showNewDialogueStore} from './store';

$: items = $itemsStore;
$: showNewDialogue = $showNewDialogueStore;

//----------
// let  items;
onMount(async ()=>{
    try {
    // debugger;
        const resp = await Agent.read('test');
        if (resp.ok){
            const data = await resp.json();
            itemsStore.set(data.items);
            // console.log("items" , items);
        }else {
            toast.push('failed to load');
        }
    } catch (e) {
        toast.push( e.message);
    }   
});

import MainNav from '$lib/appComp/MainNav.svelte';
</script>

<MainNav/>
<!-- ************** -->
<PageWrapper>
{#if items}
<br/>
    <Centre>
    <HdgWithIcon icon='📜'>Tests</HdgWithIcon>
    </Centre>
        <ShowIfTrue ifTrue={showNewDialogue} >
          <InputFormCancel  clk={ create } clk2={()=>showNewDialogueStore.set(false)}/>
          <!-- <InputForm  clk={()=>{state.showNewDialogue = false} }/> -->
        </ShowIfTrue>
    
        <Centre>
        <!-- THE MAIN CODE -->
        <div class="flex justify-center gap-2 flex-wrap">
         
        <!-- New Template -->
        <!-- <div class='w-3/12'> -->
        <!-- <CardBtn
                title={'New Test'}
                clk={()=>{ showNewDialogueStore.set(true)}}
                icon="💡"
                bgColor = 'bg-gray-500'
                titleCharsCount={15}
        /> -->
        <!-- </div> -->

        {#each items as cardData, index}
        <!-- {#each cardsData as cardData, index} -->
            <!-- <div class='w-3/12'> -->
            <!-- <CardTemplate -->
            <Card
                title={cardData.title}
                url={`/editTest?quizId=${cardData._id}` }
                icon= { Icons.TEST}
                titleCharsCount={20}
            >
                <!-- card slots -->
                <!-- it has no slots if required this is the place -->
            </Card>
            <!-- </div> -->
        {/each}
        </div>
        <!-- THE MAIN CODE ENDS -->
        </Centre>

<br/>
<br/>
{:else}
<Loading />
{/if}
</PageWrapper>

