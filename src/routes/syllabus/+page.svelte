<script>  
  //@ts-nocheck
  import { PageWrapper,HdgWithIcon } from '$lib/cmp';
  import { BASE_URL,onMount,toast,Icons,goto,checkToken,checkAdminToken,ajaxPost } from '$lib/util';
  import Nav from '$lib/appComp/Nav.svelte';
  import Dd from "./Dd.svelte";
  import ExerciseQs from "./ExerciseQs.svelte";
  import Questions from "./Questions.svelte";
  import Exercises from "./Exercises.svelte";
  import Summary from '$lib/appComp/Summary.svelte';
  import chapter_map from "./fn/chapter_map";
  // import getSyllabus from '$lib/appComp/getSyllabus';
  let tcode;
  /////////////////////////////////
  let questions;
  let selectedEx ="1.1";
  let selectedChapter = 1;
  let chapterTotalQuestions = 0;
  let chapter_map_array=[];
  let exercise_bucket=[];
  
  $:  {
    if (questions){
      chapterTotalQuestions = questions.filter(question => question.chapter == selectedChapter).length;
    }
  }
  function setEx(ex){
    selectedEx = ex;
  }
  
  let isLogin = false;
  let isAdmin = false;
  
  function setChapter(newChapter){
  selectedChapter = newChapter;
  setExBucket(selectedChapter);
  }
  
  function setExBucket(selectedChapter){
    for (let i = 0; i < chapter_map_array.length; i++) {
      const chapterObj = chapter_map_array[i];
          if(chapterObj.chapter == selectedChapter){
              exercise_bucket = chapterObj.exercises;
              setEx(exercise_bucket[0]);
              continue; 
          }
    } 
  }
  
onMount(async () => {
try{
    
    tcode = new URLSearchParams(location.search).get("tcode");
    ///---it came to this

    const resp = await ajaxPost( `${BASE_URL}/command` , { command : "getSyllabus" ,tcode,	arg_array :{} } );

/////////////////////    
    if (resp){
      const data = await resp.json();
      questions = data.questions;
      chapter_map_array = await chapter_map(questions);
      // console.log("map",chapter_map_array);
      setChapter(chapter_map_array[0].chapter);
      isLogin = checkToken();
      isAdmin = checkAdminToken();
    }else {
     const data = await resp.json();
     chapter_map_array = await chapter_map(questions);
      toast.push(data.message);
    }

  } catch (e) {
       toast.push('System error');
  }      
});

  ////////////////////////////////////////////////////////
  </script>
  <Nav {isAdmin} {isLogin}/>
  <PageWrapper>
  
  <div class='flex justify-center   p-2 '>
   <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>{tcode}</HdgWithIcon>
  </div>
  {#if questions}
  
  <Summary {questions} />
  <div class="p-4 m-1 border-2 border-white rounded-lg">
  <Dd {chapter_map_array} {setChapter} {selectedChapter}/>
    <br/>
  <Exercises  {exercise_bucket}  {selectedEx} {setEx} />
  </div>
  <!-- <HdgWithIcon>{`Chapter Total: ${chapterTotalQuestions}`}</HdgWithIcon> -->
  <div class='flex justify-start text-xs p-1 m-1 '>
  {`Total Chapter Questions: ${chapterTotalQuestions}`}
  </div>
  
  <Questions {questions} {selectedEx} {isAdmin} {tcode}/>
  
  <br/>
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
  
  </PageWrapper>
  