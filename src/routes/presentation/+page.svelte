<script>
//@ts-nocheck
import { PageWrapper,HdgWithIcon } from '$lib/cmp';
import { BASE_URL,onMount,toast,Icons,goto } from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';
import {data} from "./data";
import Slide from './Slide.svelte';
</script>

<PageWrapper>
<Nav />
<div class="">

<div class='flex justify-center'>
<h1 class="bg-stone-500 px-2 m-1 p-1 rounded-md">In the Name of Allah Most Merciful</h1>
</div>

<div class="flex justify-evenly   gap-4 border-2 border-white rounded-md mx-2 p-1">
<Slide {data} />
<Slide {data} />
</div>

</div>
</PageWrapper>