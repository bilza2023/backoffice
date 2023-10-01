<svelt:head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous">
</svelt:head>
<script>
//@ts-nocheck
import {PageWrapper} from "$lib/cmp";
import { BASE_URL,onMount,toast,goto,chqLogin } from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';
import PageHeading from './PageHeading.svelte';
import ThreeButtons from "./ThreeButtons.svelte";
import GridPanel from "./GridPanel.svelte";
import GlobalPanel from "./GlobalPanel.svelte";
import SPPanel from "./SPPanel.svelte";

let showPanel = "gridPanel"
let data = {};
let rows = [];
</script>

<PageWrapper>
<Nav />
<PageHeading />

<ThreeButtons bind:showPanel={showPanel}/>

<div>
{#if showPanel == "gridPanel"}
<GridPanel  />
{/if}

{#if showPanel == "globalPanel"}
<GlobalPanel />
{/if}
{#if showPanel == "SBPanel"}
<SPPanel />
{/if}
</div>



<br>
<br>
<br>
<br>
<br>
</PageWrapper>