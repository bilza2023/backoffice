<script>
//@ts-nocheck
export let pulse;
// export let startTime;
// export let endTime;
export let items=[]; 
// export let compExtra =[];
export let theme;
// primaryColor,secondaryColor,backgroundColor,textColor,highlightColor
</script>

<div class="flex flex-col justify-start min-h-screen   "
 style = {`
 background-color : ${theme.backgroundColor};
 `}
>

    <div class="flex  justify-center m-2 p-4 rounded-md"
   style = {`
        background-color : ${theme.primaryColor};
        color : ${theme.textColor};
        `} 
    >
        <h1 class={`text-white text-3xl`}
        style={`color : ${theme.textColor}`}
        >{items[0].content}</h1>
    </div>

    <div class='flex justify-center w-full  p-2 pb-4 h-full '>
        <img style="height: 70%;" class="w-10/12" src= {`mathImages/${items[1].content}.png`} alt="" >
    </div>

<div class='flex justify-end w-full pr-10'>
    <div style={`color :${theme.highlightColor}`}>taleem.help</div>
</div>

</div>