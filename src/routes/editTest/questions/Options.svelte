<script>
// @ts-nocheck
import Option from "./Option.svelte";
import { v4 as uuid } from 'uuid';
import {BtnWIconXs} from '$lib/cmp';
export let question;

const deleteOption = (option_id )=>{
question.options = question.options.filter(option => option.id !== option_id);
}; 
 

const addOption = () => {
 question.options = [... question.options , {id : uuid() , content : ""}];
};

const mark_correct = (option_id) => {

      if (question.multiSelect == false) {
          question.correctOptions = [option_id];
      } 
      else {
        let index = question.correctOptions.indexOf(option_id);
        if (index > -1) {
          //--remove the option if already exists
          question.correctOptions.splice(index, 1);
        } else {
          question.correctOptions.push(option_id);
        }
     }
} 


</script>
<BtnWIconXs icon='+' clk={()=>addOption(question.id)}>Option</BtnWIconXs>
<br/>
<br/>

    <div class="text-center">
    {#if question.options && question.options.length > 0}
    {#each question.options as option}
      <Option {option} {question} {deleteOption} {mark_correct}/>
    {/each}
    <br/>
    <br/>
    {/if}
    </div>
