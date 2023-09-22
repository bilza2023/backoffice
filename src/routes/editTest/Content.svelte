<script>
//@ts-nocheck
export let questions;
export let questionIndex=0;

import {BtnWIconSm } from '$lib/cmp';
import {divData,listData,tableData,preData,youtubeData,imageData,Display,Editor} from '$lib/SkillEditor';
import {Icons,fade,toast} from '$lib/util';
import { questionsStore } from './store';

import { onMount } from "$lib/util";
onMount(()=>{
// debugger;
// console.log(contentData);
});

function addDiv(){
    // debugger;
    const data =  divData(); 
    //  if ( content.length < MaxNumberOfItems) {
        questionsStore.update(questions => {
            questions[questionIndex].content.divs = [...questions[questionIndex].content.divs, data];

            questions[questionIndex].content.sortOrder = [...questions[questionIndex].content.sortOrder , data.id];
            
            console.log('questions' ,  questions);
            return questions;
        });
}
</script>
 <button 
        class='rounded-md bg-stone-400 p-1 m-1 text-xs'
        on:click={addDiv}>
        {Icons.NOTES}
    </button>
{#if questions.length > 0}
{#if questions[questionIndex].content.divs.length > 0}
{questions[questionIndex].content.divs[0].content}
{/if}
{/if}