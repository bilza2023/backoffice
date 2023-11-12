<script>
//@ts-nocheck
export let question; 
export let savelocal; 
</script>


<div class="flex justify-items-stretch   ">
    <div class="flex justify-center">
<h1 class="bg-gray-700 px-8 p-2 m-1 text-lg rounded-md">Equation Editor</h1>
    </div>

    <div class="flex justify-center">
<button class="bg-green-900 px-8 p-2 m-1 text-lg rounded-md"
    on:click={savelocal}
    >Save</button>
    </div>

    <div class="flex justify-center items-center bg-gray-800 text-blue-600">
<a class=" px-4 p-1 m-1 text-sm rounded-md" href={`/player?tcode=fbise9math&id=${question._id}`} target='_blank' >{question.filename}</a>
    </div>
</div>