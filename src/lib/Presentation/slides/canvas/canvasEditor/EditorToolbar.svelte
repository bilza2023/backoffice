<script>
    //@ts-nocheck
export let addRay;
export let addText;
export let addGrid;
export let addRect;
export let addLine;
export let addCircle;
export let addEllipse;
export let addDot;
export let addRepeatDot;
export let addRepeatText;
export let addImage;
export let addXYCross;
export let addTri;
export let addBezier;
export let addLines;
export let addPara;
// export let addPolygon;
export let addAngleSymbol;
// export let refresh;
</script>


<div class="flex">

    <!-- Core methods -->
    <button on:click={addLine} class="bg-stone-500 p-1 rounded-md text-xs m-1">
        Line</button>
    <button on:click={addCircle} class="bg-stone-500 p-1 rounded-md text-xs m-1">
        Circle</button>
    <button on:click={addEllipse} class="bg-stone-500 p-1 rounded-md text-xs m-1">
        Ellipse</button>
    <button on:click={addRect} class="bg-stone-500 p-1 rounded-md text-xs m-1">
        Rect</button>

    <button on:click={addBezier} class="bg-stone-500 p-1 rounded-md text-xs m-1">
        Bezier</button>
    <!-- <button on:click={addPolygon} class="bg-stone-500 p-1 rounded-md text-xs m-1">Poly</button>     -->
    <button on:click={addImage} class="bg-stone-500 p-1 rounded-md text-xs m-1">
        Image</button>
    <button on:click={addText} class="bg-stone-500 p-1 rounded-md text-xs m-1">
        Text</button>
    
        <button on:click={addPara} class="bg-stone-500 p-1 rounded-md text-xs m-1">
        Para</button>
    
    <!-- Extended from Core     -->
    <button on:click={addTri} class="bg-stone-500 p-1 rounded-md text-xs m-1">
        Tri</button>
     
    <button on:click={addRay} class="bg-stone-500 p-1 rounded-md text-xs m-1">
        Ray</button>
    <button on:click={addDot} class="bg-stone-500 p-1 rounded-md text-xs m-1">
        Dot</button>

        
    <button on:click={addGrid} class="bg-stone-500 p-1 rounded-md text-xs m-1">
    Grid</button>
        
    <button on:click={addRepeatDot} class="bg-stone-500 p-1 rounded-md text-xs m-1">R-Dot</button>

    <button on:click={addRepeatText} class="bg-stone-500 p-1 rounded-md text-xs m-1">R-Text</button>

    <button on:click={addLines} class="bg-stone-500 p-1 rounded-md text-xs m-1">Lines</button>   
    
    <button on:click={addXYCross} class="bg-stone-500 p-1 rounded-md text-xs m-1">
        XY Cross</button>
    
    <button on:click={addAngleSymbol} class="bg-stone-500 p-1 rounded-md text-xs m-1">Angle</button>
    
  </div>



  <div class="flex">
    <!-- <button on:click={addJT} class="bg-orange-700   p-1 rounded-md text-xs m-1">JT</button> -->
    

  </div>

  <style>

  </style>