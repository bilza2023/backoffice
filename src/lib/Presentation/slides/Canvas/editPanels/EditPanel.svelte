<script>
//@ts-nocheck
import {onMount} from '$lib/util';
import RayEditPanel from './RayEditPanel.svelte';
import TriangleEditPanel from './TriangleEditPanel.svelte';
import RectangleEditPanel from './RectangleEditPanel.svelte';
import CircleEditPanel from './CircleEditPanel.svelte';
import EllipseEditPanel from './EllipseEditPanel.svelte';
import PolyEditPanel from './PolyEditPanel.svelte';
import {selectedItemStore} from '../store';

$:selectedItem = $selectedItemStore;
  export let items;
 
</script>


<div class='p-2 overflow-y-auto'>

{#if selectedItem && selectedItem.name == 'drawRay'}
<RayEditPanel bind:item={selectedItem} bind:items={items}/>
{/if}

{#if selectedItem && selectedItem.name == 'drawLine'}
<RayEditPanel bind:item={selectedItem} bind:items={items}/>
{/if}

{#if selectedItem && selectedItem.name == 'drawHline'}
<RayEditPanel bind:item={selectedItem} bind:items={items}/>
{/if}

{#if selectedItem && selectedItem.name == 'drawTriangle'}
<TriangleEditPanel bind:item={selectedItem} bind:items={items}/>
{/if}

{#if selectedItem && selectedItem.name == 'drawRectangle'}
<RectangleEditPanel bind:item={selectedItem} bind:items={items}/>
{/if}

{#if selectedItem && selectedItem.name == 'drawCircle'}
<CircleEditPanel bind:item={selectedItem} bind:items={items}/>
{/if}

{#if selectedItem && selectedItem.name == 'drawEllipse'}
<EllipseEditPanel bind:item={selectedItem} bind:items={items}/>
{/if}

{#if selectedItem && selectedItem.name == 'drawPoly'}
<PolyEditPanel bind:item={selectedItem} bind:items={items}/>
{/if}


</div>