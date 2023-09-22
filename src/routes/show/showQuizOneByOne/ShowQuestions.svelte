 <script>
//@ts-nocheck
import ShowMcq from "../questionControls/ShowMcq.svelte";

export let questions;
export let cq;
// debugger;

</script>

    {#if questions[cq].questionType == "mcq"}
      <ShowMcq question={questions[cq]} />
    {/if}
    
    