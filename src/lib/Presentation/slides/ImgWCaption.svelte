<script>
//@ts-nocheck
export let pulse;
export let items=[]; 
export let slideExtra =[];
export let theme;
// primaryColor,secondaryColor,backgroundColor,textColor,highlightColor
</script>

<div class="flex flex-col justify-start min-h-screen  p-8 pt-4 "
 style = {`
 background-color : ${theme.backgroundColor};
 `}
>

<div class= " m-2 p-4 rounded-md text-center"
   style = {`
        background-color : ${theme.primaryColor};
        color : ${theme.textColor};
        `} 
    >
     <img style="height: 40%;" 
     class='rounded-md mx-auto'
      src= {`mathImages/${items[0].content}.png`} alt="" >
   
        <div class="mt-4 border-2 p-4 rounded-md " 
        style={`background-color : ${theme.primaryColor};`} >

        {items[1].content}
        </div>
    </div>


<div class='flex justify-end w-full pr-10'>
    <div style={`color :${theme.highlightColor}`}>taleem.help</div>
</div>

</div>