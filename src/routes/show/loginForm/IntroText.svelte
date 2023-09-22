<script>
export let introText;

</script>



    
        {#if introText !== "" }
        <div class="flex justify-center">
        <p class="  bg-gray-600 text-center  m-3 p-3 rounded-lg w-10/12 ">
            {introText}
        </p>
        </div>
        {/if}

