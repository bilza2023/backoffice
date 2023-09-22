<!-- Component.svelte -->
<script>
  // @ts-nocheck
import {SectionHead } from '$lib/cmp';
import {Icons} from '$lib/util';
import SettingDiv from './SettingDiv.svelte';  
import PublishTimings from './PublishTimings.svelte';  
import UnPublishTimings from './UnPublishTimings.svelte';  

export let quiz;
</script>

<br/>
<SettingDiv visible={true} {quiz}/>
<br/>
 
 
<!-- <PublishTimings {item} /> -->
<!-- <br/> -->
<!-- <UnPublishTimings {item} /> -->
<br/>