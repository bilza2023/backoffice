Now the JFX window has been drawn but it is a blank screen nothing is drawn on it

here is my JSX.svelte
<head:svelte>
<link href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js" type="text/javascript" charset="UTF-8"></script>
    <!-- The next line is optional: MathJax -->
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" id="MathJax-script" async></script>

</head:svelte>
<script>
//@ts-nocheck
  import { onMount } from "svelte";
    
  onMount(() => {
    // Access JSXGraph from the window object
    const JSXGraph = window.JXG;

    // Initialize your JSXGraph board
    const board = JSXGraph.initBoard('jxgbox', {
      boundingbox: [-7, 7, 7, -7],
      axis: true,
      grid: true,
    });

    let pointA = board.create('point', [-2, 1]);
    let pointB = board.create('point', [3, 0]);
    let line1 = board.create("line", [pointA, pointB]);

    // You can interact with JSXGraph elements here.
  });
</script>

<div id="jxgbox" class="jxgbox" style="width: 500px; height: 500px;"></div>

<style>
  /* You can add custom CSS styles here */
</style>

and here is +page.svelte where i use it
<script>
//@ts-nocheck
import {Anchor,PageWrapper,HdgWithIcon,Centre,Card} from '$lib/cmp';
import {Icons,onMount,toast,ajaxGet} from '$lib/util';
import ThreeRowCard from '$lib/appComp/ThreeRowCard.svelte';
import { BASE_URL } from '$lib/cmn/config';
import JSX from './JSX.svelte';
let items;
onMount(async ()=>{
    try {

    } catch (e) {
            toast.push('failed to load');
        // toast.push( e.message);
    }   
});

import MainNav from '$lib/appComp/MainNav.svelte';
</script>

<MainNav/>
<PageWrapper>
<br/>
<JSX />
    
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</PageWrapper>
