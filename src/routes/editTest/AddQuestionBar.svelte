<script>
// @ts-nocheck
import { BtnIconRound } from '$lib/cmp';
export let quiz;
</script>


<div class='flex justify-center  w-full'>
<!-- <BtnIconRound  icon='🔱' clk={()=>console.log(quiz)}   /> -->
<BtnIconRound  icon='🔱' clk={()=>quiz.questions.addMCQ()}   />
<!-- <BtnIconRound  icon='&#x1F4E7;' />
<BtnIconRound  icon='❶' />
<BtnIconRound  icon='&#x1F4C3;' />
<BtnIconRound  icon='&#x1F512;' />
<BtnIconRound  icon='&#x270F;' />
<BtnIconRound  icon='&#x1F310;' /> -->
</div>