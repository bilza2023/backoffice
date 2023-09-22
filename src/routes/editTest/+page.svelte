<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,Loading,SectionHeadIcon} from '$lib/cmp';
import {onMount,toast,fade,Agent} from '$lib/util';

import Questions from './questions/Questions.svelte'
import SettingMain from './settings/SettingsMain.svelte';
import Toolbar from './Toolbar.svelte';   
import AddQuestionBar from './AddQuestionBar.svelte';
import HiddenDivs from './HiddenDivs.svelte';
import PublishErrors from './PublishErrors.svelte';
import PageSeparator from './PageSeparator.svelte';
import QuizObj from "../../lib/quizLib/quiz";
import {showQuestionsStore} from './store'
///////////////////////////////////////////////////
import MegaQuiz from '$lib/megaQuiz/megaQuiz';
///////////////////////////////////////////////////

$: showQuestions = $showQuestionsStore;
let quiz;
onMount(async ()=>{
  try{
  // debugger;
    const quizId = new URLSearchParams(location.search).get("quizId");
    const resp = await Agent.readone('test' , {id: quizId });
    if (resp.ok){
      const data = await resp.json();
      // quiz = new QuizObj(data.item);
      quiz = new MegaQuiz(data.item);
      // console.log( 'MegaQuiz'  ,quiz);
    }else {
        toast.push('failed to load');
    }
  } catch (e) {
       toast.push('failed to load');
  }      
});

//=====================================>>>>>>>>>>>
function printQuiz(){console.log('quiz' , quiz);}
function redraw(){quiz = quiz;}

//===I will have to remove it later and replace it with redraw but it is interesting that I have used the game loop technique
setInterval(function(){ quiz = quiz;},200);


import MainNav from '$lib/appComp/MainNav.svelte';
/////////////////////////////////////////////////////////////////
</script>
  <!-- ****************************************** -->
<MainNav/>
<PageWrapper>
{#if quiz}
<!-- ************** -->
<Toolbar  {quiz}/>

        <!-- ************** -->
        <!-- THE MAIN CODE ENDS -->
        <Centre>
        <HdgWithIcon icon='📜'>{quiz.title}</HdgWithIcon>
        </Centre>

        <PageSeparator />
        <!-- <PublishErrors /> -->
        <!-- ********** The Hidden Dialogue box **************** -->
            <HiddenDivs {quiz}/>
        <!-- ********** Main Settings  *********** -->
        <div class='px-8'>
          <br/>          
            {#if  showQuestions}
            <Questions {quiz} />

             <br/>
            <AddQuestionBar {quiz}/>
            <br/>
            {:else}
            <SettingMain {quiz}/>
            {/if}
        </div>

{:else}
<Loading />
{/if}

<br>
<br>
<br>
<br>
<br>
<br>
</PageWrapper>
