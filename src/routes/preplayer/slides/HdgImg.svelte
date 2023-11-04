<script>
//@ts-nocheck
export let pulse;
// export let startTime;
// export let endTime;
export let items=[]; 
// export let compExtra =[];
// export let theme={};

</script>


<div class="flex flex-col justify-center ">

    <div class="flex  justify-center m-2 p-4 bg-red-900 text-white rounded-md">
        <h1 class={`text-white`}>{items[0].content}</h1>
    </div>

    <div class='flex justify-center w-full  p-2 pb-4 h-full '>
        <img style="height: 50%;" class="w-6/12" src= {`mathImages/${items[1].content}.png`} alt="" >
    </div>

</div>