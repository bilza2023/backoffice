<script>
// @ts-nocheck

import {PageWrapper,HdgWithIcon,Centre,Range,Card,BtnIconOval} from '$lib/cmp';
import {onMount,toast,Icons , Agent} from '$lib/util';
import ThreeRowCard  from './ThreeRowCard.svelte';

let loaded  =false;
// let students;
// let classes;
// let results;
// let tests;
// let runs;

onMount(async ()=>{
  try {
  loaded = false;
      // await getData('student',students);
      // await getData('class',classes);
      // await getData('result',results);
      // await getData('run',runs);
      // await getData('test',tests);
  loaded = true;

  } catch (e) {
  
  }   
});
import MainNav from '$lib/appComp/MainNav.svelte';
</script>

<MainNav/>
<!-- ************** -->
<PageWrapper>
<br/>
    <Centre>
    <HdgWithIcon icon={Icons.COMPUTER} bgColor='bg-stone-600'>Dashboard</HdgWithIcon>
    </Centre>
    
    <Centre>
<div class='flex  justify-center gap-1 w-full bg-gray-700 rounded-md p-2 m-2'>

<ThreeRowCard  icon={Icons.TEST} title='Tests' slug='test'/>
<ThreeRowCard  icon={Icons.RUN} title='Running' slug='run'/>
<ThreeRowCard  icon={Icons.TEMPLATE} title='Results' slug='result'/>

<ThreeRowCard  icon={Icons.TEAM} title='Classes' slug='class'/>
<ThreeRowCard  icon={Icons.STUDENT} title='Students' slug='student'/>
            
           
        </div>
        <!-- THE MAIN CODE ENDS -->
        </Centre>

<br/>
<br/>
</PageWrapper>

