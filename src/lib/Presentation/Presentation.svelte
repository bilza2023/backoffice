<script>
//@ts-nocheck
// import TestComp from "./slides/TestComp.svelte";
import HdgImg from "./slides/HdgImg.svelte";
import BlinkingMessage from "./slides/BlinkingMessage.svelte";
import BlinkingMessageEd from "./slides/BlinkingMessageEd.svelte";
import ImgWCaption from "./slides/ImgWCaption.svelte";
import ImgWCaptionEd from "./slides/ImgWCaptionEd.svelte";
import HdgList from "./slides/HdgList.svelte";
import HdgListEd from "./slides/HdgListEd.svelte";
import TblStr from "./slides/TblStr.svelte";
import TblStrEd from "./slides/TblStrEd.svelte";
import EqPlayer from "./slides/eqs/EqPlayer/EqPlayer.svelte";
import EqsEditor from "./slides/eqs/EqsEditor/EqsEditor.svelte";
import {HdgImgEd} from '$lib/Presentation/slides';

export let currentSlide;
export let pulse;
export let theme;
export let setPulse=()=>{};
export let displayMode = true;
</script>


<!-- HdgImg -->
{#if currentSlide.type == 'HdgImg' }
    {#if  displayMode}
        <HdgImg {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} slideExtra={currentSlide.slideExtra} {theme}/>
    {:else}
        <HdgImgEd {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} bind:items={currentSlide.items} bind:slideExtra={currentSlide.slideExtra} {theme}/>
    {/if}
{/if}

<!-- BlinkingJumbotron -->
{#if currentSlide.type == 'BlinkingMessage' }
    {#if  displayMode}
        <BlinkingMessage {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} slideExtra={currentSlide.slideExtra} {theme}/>
    {:else}
        <BlinkingMessageEd bind:items={currentSlide.items} bind:slideExtra={currentSlide.slideExtra} {theme}/>
    {/if}
{/if}

<!-- ImgWCaption -->
{#if currentSlide.type == 'ImgWCaption' }
    {#if  displayMode}
        <ImgWCaption {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} slideExtra={currentSlide.slideExtra} {theme}/>
    {:else}
        <ImgWCaptionEd bind:items={currentSlide.items} bind:slideExtra={currentSlide.slideExtra} {theme}/>
    {/if}
{/if}

<!-- ImgWCaption -->
{#if currentSlide.type == 'HdgList' }
    {#if  displayMode}
        <HdgList {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} slideExtra={currentSlide.slideExtra} {theme}/>
    {:else}
        <HdgListEd bind:items={currentSlide.items} bind:slideExtra={currentSlide.slideExtra} {theme}/>
    {/if}
{/if}
<!-- TblStr -->
{#if currentSlide.type == 'TblStr' }
    {#if  displayMode}
        <TblStr {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} slideExtra={currentSlide.slideExtra} {theme}/>
    {:else}
        <TblStrEd bind:items={currentSlide.items} bind:slideExtra={currentSlide.slideExtra} {theme}/>
    {/if}
{/if}
<!-- Eqs -->
{#if currentSlide.type == 'Eqs' }
    {#if  displayMode}
        <EqPlayer {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} slideExtra={currentSlide.slideExtra} {theme} {setPulse}/>
    {:else}
        <EqsEditor bind:items={currentSlide.items} bind:slideExtra={currentSlide.slideExtra} {theme} />
    {/if}
{/if}
