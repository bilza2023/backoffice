<script>
//@ts-nocheck
import {onMount} from '$lib/util';
import RayEditPanel from './RayEditPanel.svelte';
import TriangleEditPanel from './TriangleEditPanel.svelte';
import RectangleEditPanel from './RectangleEditPanel.svelte';
import CircleEditPanel from './CircleEditPanel.svelte';
import EllipseEditPanel from './EllipseEditPanel.svelte';
import PolyEditPanel from './PolyEditPanel.svelte';

import HideDiv from '../HideDiv.svelte';
  export let items;
 
</script>


{#each  items.slice().reverse() as item}

<div class='bg-gray-700  p-2 border-2 border-white mb-2 rounded-md w-6/12 mx-auto pt-2 '>

      <HideDiv title={item.name}>
      {#if item.name == 'drawRay'}
      <RayEditPanel bind:item={item} bind:items={items}/>
      {/if}

      {#if item.name == 'drawLine'}
      <RayEditPanel bind:item={item} bind:items={items}/>
      {/if}

      {#if item.name == 'drawHline'}
      <RayEditPanel bind:item={item} bind:items={items}/>
      {/if}

      {#if item.name == 'drawTriangle'}
      <TriangleEditPanel bind:item={item} bind:items={items}/>
      {/if}

      {#if item.name == 'drawRectangle'}
      <RectangleEditPanel bind:item={item} bind:items={items}/>
      {/if}

      {#if item.name == 'drawCircle'}
      <CircleEditPanel bind:item={item} bind:items={items}/>
      {/if}

      {#if item.name == 'drawEllipse'}
      <EllipseEditPanel bind:item={item} bind:items={items}/>
      {/if}

      {#if item.name == 'drawPoly'}
      <PolyEditPanel bind:item={item} bind:items={items}/>
      {/if}

    </HideDiv>
</div>

{/each}