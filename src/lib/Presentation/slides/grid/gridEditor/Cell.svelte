<script>
//@ts-nocheck

export let item;


function toggleBorder(bdr){
    item[bdr] = !item[bdr]; 
    // console.log(item[bdr]);
}
</script>


<td class='border-2 border-white p-2 flex-grow'>

<div class='flex justify-center'>
content: 
<input class='bg-gray-700 mb-2 rounded-md ml-1 text-center'
type="text" bind:value={item.content}>
</div>

<div class='flex justify-center'>
showAt:  
<input class='bg-gray-700 mb-2 rounded-md ml-1'
type="number" bind:value={item.showAt}>

</div>


    <div class='text-center'>
        <button class="{item.bl ? "btnGreen":"btn"}" on:click={()=>toggleBorder('bl')}>bl</button>
        <button class="{item.bt ? "btnGreen":"btn"}" on:click={()=>toggleBorder('bt')}>bt</button>
        <button class="{item.br ? "btnGreen":"btn"}" on:click={()=>toggleBorder('br')}>br</button>
        <button class="{item.bb ? "btnGreen":"btn"}" on:click={()=>toggleBorder('bb')}>bb</button>
    </div>

</td>


<style>
.btn {
    padding : 1px;
    border-radius: 10px;
    border : 1px solid silver;
    color:black;
    background-color: bisque;
}
.btnGreen {
    padding : 1px;
    border-radius: 10px;
    border : 1px solid silver;
    color:black;
    background-color: green;
}

</style>