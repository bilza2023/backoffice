<script>
//@ts-nocheck
import {Anchor,PageWrapper,HdgWithIcon,Centre,Card} from '$lib/cmp';
import {Icons,onMount,toast,ajaxGet} from '$lib/util';
import ThreeRowCard from '$lib/appComp/ThreeRowCard.svelte';
import { BASE_URL } from '$lib/cmn/config';
let items;
onMount(async ()=>{
    try {

    } catch (e) {
            toast.push('failed to load');
        // toast.push( e.message);
    }   
});

import MainNav from '$lib/appComp/MainNav.svelte';
</script>

<MainNav/>
<PageWrapper>
<!-- <a href="/graph/index.html">Graph</a> -->

<br/>
    <Centre>
        <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>Skillza.com</HdgWithIcon>
    </Centre>

    <Centre>
<div class='flex  justify-center gap-1 w-full bg-gray-700 rounded-md p-2 m-2'>
<ThreeRowCard  icon={Icons.TEMPLATE} title='Math Questions' count=01/>
<ThreeRowCard  icon={Icons.STUDENT} title='English Lessons' count=2/>
<ThreeRowCard  icon={Icons.TEST} title='Tests' count=6/>

<!-- <ThreeRowCard  icon={Icons.RUN} title='Running' count=5/> -->

<!-- <ThreeRowCard  icon={Icons.TEAM} title='Registered' count=45/> -->
            

</div>
</Centre>

<br/>
<div class='flex justify-start m-2 p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>Math Example Questions</HdgWithIcon>
</div>

<div class='flex justify-center flex-wrap gap-2 bg-gray-900 p-8 m-8 mt-1 rounded-md border-2 border-white'>

        <div class='w-3/12'>
        <Card
        title = '9th Ex 4.4 Q 1 a'
        icon={Icons.TEST}
        url = '/eq?id=math_ptbb_9th_ex_4_4_q_1_a'
        > 
        </Card>
        </div>
        <div class='w-3/12'>
        <Card
        title = '9th Ex 4.4 Q 1 b'
        icon={Icons.TEST}
        url = '/eq?id=math_ptbb_9th_ex_4_4_q_1_b'
        > 
        </Card>
        </div>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</PageWrapper>
