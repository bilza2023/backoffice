<script>
//@ts-nocheck
export let  question;

const isSelected = (option_id) => {
  return question.selectedOptions.includes(option_id);
}
//yahan correctOptions ka koi kaam nahi
const mark_selected = (option_id) => {
        //singleselect
      if (question.multiSelect == false) {
        question.selectedOptions= [];
        question.selectedOptions[0] = option_id;
      } 
      else {
        // Multi select
        let index = question.selectedOptions.indexOf(option_id);
        if (index > -1) {
          //--remove the option if already exists
          question.selectedOptions.splice(index, 1);
        } else {
          question.selectedOptions.push(option_id);
        }
    }
} 


</script>
<div class=" flex justify-center flex-col text-center ">
  {#each question.options as option }
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div 
      on:click={()=>mark_selected( option.id )}
      class="p-2 m-2  hover:rounded-2xl  hover:cursor-pointer  text-black  rounded-sm border-gray-900
        {isSelected(option.id) ? 'bg-blue-700' : 'bg-gray-300'}
        "
      >
      {option.content}
    </div> 
  {/each}
  </div> 