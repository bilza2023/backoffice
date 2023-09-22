<script>
// @ts-nocheck
import { InputForm } from '$lib/cmp';
import RunDiv from './RunDiv.svelte';
  
export let quiz;
import del from './fn/del.js';
import clone from './fn/clone.js';
import PublishErrors from './PublishErrors.svelte';

import {visibleDialogStore} from './store';
$: visibleDialog = $visibleDialogStore;

function fnForClone(incommingTitle){
//  debugger;
  clone(quiz, incommingTitle);
}

function fnForDel(incommingTitle){
//  debugger;
  del(quiz, incommingTitle);
}

</script>

  <!-- ********** The Hidden Dialogue box **************** -->

{#if quiz}

{#if visibleDialog=='cloneDlg' }
<InputForm clk={ fnForClone  } title='Clone Test' btnTitle='Clone' btnColor='bg-green-800'/>
{/if}

{#if visibleDialog=='errors' }
<PublishErrors />
{/if}

{#if visibleDialog=='runDlg' }
<RunDiv {quiz}/>
{/if}


{#if visibleDialog=='deleteDlg' }
<InputForm clk={ fnForDel } title='Delete Test' btnTitle='Delete' comment='Type in the title' btnColor='bg-red-800'/>
{/if}

<!-- ********** The Hidden Dialogue Box Ends *********** -->
{/if}