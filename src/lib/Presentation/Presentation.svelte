<script>
//@ts-nocheck
// import TestComp from "./slides/TestComp.svelte";
import { afterUpdate } from 'svelte';
import {onMount} from "$lib/util";
import BlinkingMessage from "./slides/BlinkingMessage/BlinkingMessage.svelte";
import BlinkingMessageEd from "./slides/BlinkingMessage/BlinkingMessageEd.svelte";
import ImgWCaption from "./slides/ImgWCaption.svelte";
import ImgWCaptionEd from "./slides/ImgWCaptionEd.svelte";
import HdgList from "./slides/HdgList/HdgList.svelte";
import HdgListEd from "./slides/HdgList/HdgListEd.svelte";
import TblStr from "./slides/TblStr.svelte";
import TblStrEd from "./slides/TblStrEd.svelte";
import EqPlayer from "./slides/eqs/EqPlayer/EqPlayer.svelte";
import EqsEditor from "./slides/eqs/EqsEditor/EqsEditor.svelte";

import HdgPara from "./slides/HdgPara/HdgPara.svelte";
import HdgParaEd from "./slides/HdgPara/HdgParaEd.svelte";

import CanvasEditor from "./slides/canvas/canvasEditor/CanvasEditor.svelte";
import CanvasPlayer from "./slides/canvas/canvasPlayer/CanvasPlayer.svelte";

import GridPlayer from "./slides/grid/gridPlayer/GridPlayer.svelte";
import GridEditor from "./slides/grid/gridEditor/GridEditor.svelte";

import HdgImg from './slides/HdgImg/HdgImg.svelte';
import HdgImgEd from './slides/HdgImg/HdgImgEd.svelte';

import Img from './slides/img/Img.svelte';
import ImgEd from './slides/img/ImgEd.svelte';

export let currentSlide;

onMount(()=>{
    //   debugger;
    });


let forceUpdate = 0;
afterUpdate(() => {
    // Trigger re-rendering whenever currentSlide changes
    forceUpdate += 1;
  });
export let currentTime;
//--since every tcode has its own database thus we need to give Presentation its own tcode so that it can access that data (png/mp3) files.

export let tcode='fbise9math';

export let pulse;
export let theme={
  description     : '',
    primaryColor    : '#BC6C25',
    secondaryColor  : '#DDA15E',
    backgroundColor : '#FEFAE0',
    textColor       : '#283618',
    highlightColor  : '#606C38'
}; 
export let setPulse=()=>{};
export let displayMode = true;
</script>



<!-- BlinkingJumbotron -->
{#if currentSlide.type == 'BlinkingMessage' }
    {#if  displayMode}
        <BlinkingMessage {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} slideExtra={currentSlide.slideExtra} {theme}/>
    {:else}
        <BlinkingMessageEd bind:items={currentSlide.items} bind:slideExtra={currentSlide.slideExtra} {theme}/>
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
        <EqsEditor bind:items={currentSlide.items} bind:slideExtra={currentSlide.slideExtra} {theme} {currentTime} startTime={currentSlide.startTime}/>
    {/if}
{/if}

<!-- grid -->
{#if currentSlide.type == 'grid' }
    {#if  displayMode}
        <GridPlayer {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} slideExtra={currentSlide.slideExtra} {theme} {setPulse}/>
    {:else}
        <GridEditor bind:items={currentSlide.items} bind:slideExtra={currentSlide.slideExtra} {theme} {currentTime}/>
    {/if}
{/if}

<!-- CanvasEditor -->
{#if currentSlide.type == 'canvas' }
    {#if  displayMode}
        <CanvasPlayer {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} extra={currentSlide.extra} {theme} {setPulse} {tcode}/>
    {:else}
    <!-- bind:slideExtra={currentSlide.slideExtra} -->
        <CanvasEditor bind:items={currentSlide.items}  bind:extra={currentSlide.extra} {theme} {tcode}/>
    {/if}
{/if}


