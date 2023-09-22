<script>
//@ts-nocheck
import {BtnWIconXs} from '$lib/cmp';
import {Icons} from '$lib/util';
export let addCol;
export let delCol;
export let addRow;
export let delRow;
</script>


<div class='flex gap-1 justify-center w-full bg-gray-900 m-1 p-1'>

<div class='flex gap-1 justify-center'>
<BtnWIconXs icon={Icons.ADD} clk={addRow}>Row</BtnWIconXs>
<BtnWIconXs icon={Icons.SUBTRACT} clk={delRow}>Row</BtnWIconXs>
</div>

<div class='flex gap-1 justify-center'>
<BtnWIconXs icon={Icons.ADD} clk={addCol}>Col</BtnWIconXs>
<BtnWIconXs icon={Icons.SUBTRACT} clk={delCol}>Col</BtnWIconXs>
</div>

</div>