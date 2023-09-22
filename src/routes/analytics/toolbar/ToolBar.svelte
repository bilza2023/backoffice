<script>
//@ts-nocheck

import SummaryBtn from "./SummaryBtn.svelte";
import CombinedBtn from "./CombinedBtn.svelte";
import IndlBtn from "./IndlBtn.svelte";
export let setPageState;
</script>

<div class="flex justify-start   items-center bg-gray-400 px-2  py-2 gap-2  ">
 
  <!-- <SummaryBtn     {setPageState}    /> -->
  <IndlBtn      {setPageState}    />
  <CombinedBtn  {setPageState}    />

</div>

<!-- 📱 -->