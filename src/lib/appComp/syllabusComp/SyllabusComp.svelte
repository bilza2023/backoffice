<script>
    //@ts-nocheck
    import {onMount} from "svelte";
    import Questions from "./Questions.svelte";
    import SideBar from './SideBar.svelte';
    import chapter_map from "./chapter_map.js";
    import FilterByStatusBar from ".//FilterByStatusBar.svelte";

    export let questions;
    export let tcode;
    export let uiMode = true ; // false = backoffice mode but keep true here
  //--we can alter filterByStatus and  statusToFilterFor from outside as well thats why they are export but for now am using them internally
    let statusToFilterFor = 'all'; // false = backoffice mode

    let selectedQuestions=[];
    let selectedEx ="1.1";
    let selectedChapter = 1;
    let chapter_map_array=[];
  
function setStatus(status_value){
  statusToFilterFor = status_value;
  setSelectedQuestions();
  sortBySortOrder();
}
function sortBySortOrder( ){
  selectedQuestions.sort((a, b) => a.sortOrder - b.sortOrder);
}
function setSelectedQuestions(){
  selectedQuestions=[];
// debugger;
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
        if (question.chapter === selectedChapter && question.exercise === selectedEx){
            //---incase of taleem-ui add status.final is used here
            if(uiMode){
                    if(question.status == 'final'){
                    selectedQuestions.push(question);
                    }  
            }else {
            //--this is if backoffice and has status filer on 
                if(statusToFilterFor == 'all' || statusToFilterFor == '' ){
                  selectedQuestions.push(question);

                } else {
                  if (statusToFilterFor !== 'empty' && statusToFilterFor !== 'filled' && statusToFilterFor !== 'locked' && statusToFilterFor !== 'final') {
                        throw new Error('Invalid status value. Status must be one of: empty, filled, locked, final.');
                      }
                    if(question.status == statusToFilterFor){
                      selectedQuestions.push(question);          
                    }
                }  
            }
        }
  }
}

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
    setSelectedQuestions();
    sortBySortOrder();
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
        <FilterByStatusBar   {setStatus} {statusToFilterFor}/>
        <Questions {selectedQuestions} {tcode} {uiMode}/>
        
    </div>

</div>

  