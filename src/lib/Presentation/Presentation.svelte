<script>
//@ts-nocheck
import { afterUpdate } from 'svelte';
import TblStr from "./slides/TblStr.svelte";
import TblStrEd from "./slides/TblStrEd.svelte";
import EqPlayer from "./slides/eqs/EqPlayer/EqPlayer.svelte";
import EqsEditor from "./slides/eqs/EqsEditor/EqsEditor.svelte";
import CanvasEditor from "./slides/canvas/canvasEditor/CanvasEditor.svelte";
import CanvasPlayer from "./slides/canvas/canvasPlayer/CanvasPlayer.svelte";
import GridPlayer from "./slides/grid/gridPlayer/GridPlayer.svelte";
import GridEditor from "./slides/grid/gridEditor/GridEditor.svelte";


export let currentSlide;
let forceUpdate = 0;
export let currentTime;
export let tcode='fbise9math';
export let setPulse=()=>{};
export let displayMode = true;

afterUpdate(() => {
    forceUpdate += 1;
  });
</script>


<!-- TblStr -->
{#if currentSlide.type == 'TblStr' }
    {#if  displayMode}
        <TblStr pulse={currentTime} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} slideExtra={currentSlide.slideExtra} />
    {:else}
        <TblStrEd bind:items={currentSlide.items} bind:slideExtra={currentSlide.slideExtra} />
    {/if}
{/if}

<!-- Eqs -->
{#if currentSlide.type == 'Eqs' }
    {#if  displayMode}
        <EqPlayer pulse={currentTime} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} slideExtra={currentSlide.slideExtra}  {setPulse}/>
    {:else}
        <EqsEditor bind:items={currentSlide.items} bind:slideExtra={currentSlide.slideExtra}  {currentTime} startTime={currentSlide.startTime}/>
    {/if}
{/if}

<!-- grid -->
{#if currentSlide.type == 'grid' }
    {#if  displayMode}
        <GridPlayer pulse={currentTime} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} slideExtra={currentSlide.slideExtra}  {setPulse}/>
    {:else}
        <GridEditor bind:items={currentSlide.items} bind:slideExtra={currentSlide.slideExtra}  {currentTime}/>
    {/if}
{/if}

<!-- CanvasEditor -->
{#if currentSlide.type == 'canvas' }
    {#if  displayMode}
        <CanvasPlayer pulse={currentTime}  items={currentSlide.items} extra={currentSlide.extra}    />
    {:else}

        <CanvasEditor bind:items={currentSlide.items}  bind:extra={currentSlide.extra}  {tcode} {currentTime}/>
    {/if}
{/if}


