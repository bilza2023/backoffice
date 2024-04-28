<script>
    //@ts-nocheck
    import {onMount} from "svelte";
    import Questions from "./Questions.svelte";
    import SideBar from './SideBar.svelte';
    import chapter_map from "./chapter_map.js";

    export let questions;
    export let tcode;
    export let uiMode = true ; // false = backoffice mode

    let selectedQuestions=[];
    let selectedEx ="1.1";
    let selectedChapter = 1;
    let chapter_map_array=[];
  


function setChapter(newChapter){
  selectedChapter = newChapter;
    for (let i = 0; i < chapter_map_array.length; i++) {
      const chapterObj = chapter_map_array[i];
          if(chapterObj.chapter == selectedChapter){
            if(chapterObj.exercises.length > 0){
              selectedEx = chapterObj.exercises[0]; 
              setEx(selectedEx); //important
              return;
            }
          }
    } 
  }

function setEx(ex){
    selectedEx = ex;
    selectedQuestions=[];

    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
            if (question.chapter === selectedChapter && question.exercise === selectedEx){
                //---incase of taleem-ui add status.final is used here
                if(uiMode){
                        if(question.status == 'final'){
                        selectedQuestions.push(question);
                        }  
                }else {
                    selectedQuestions.push(question);          
                }
            }
    }
}

onMount(async ()=>{
      chapter_map_array = await chapter_map(questions);
      setChapter(chapter_map_array[0].chapter);

});
 
</script>

<div class="flex">
    <div class="w-2/12">
      
        <SideBar 
        
        {chapter_map_array}
        {setChapter}
        {selectedChapter}
        {selectedEx}
        {setEx}
        />

    </div>

    <div class="w-10/12">
        
        <Questions {selectedQuestions} {tcode} {uiMode}/>
        
    </div>

</div>

  