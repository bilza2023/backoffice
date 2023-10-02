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
let grid = {bgColor: "#1F2937", fontSize: 2, padding: 4,margin:1,cellBorderColor:"#e52222" ,cellFontColor : "white",showGrid : true,gridColor: "#384556" }
let showPanel = "gridPanel"
let data = {};
let rows = [];

</script>

<PageWrapper>
<Nav />
<PageHeading />

<ThreeButtons bind:showPanel={showPanel} />

<div>
{#if showPanel == "globalPanel"}
<GlobalPanel bind:grid={grid} />
{/if}
{#if showPanel == "SBPanel"}
<SPPanel />
{/if}

<GridPanel  {grid}/>

</div>



<br>
<br>
<br>
<br>
<br>
</PageWrapper>