<script>
//@ts-nocheck
export let setChapter;
export let selectedChapter;
</script>

<div class="flex justify-center">
    <div class="bg-gray-600 text-white w-8/12 text-center rounded-md">
        Select Chapter
    </div>
</div>

<div class="flex justify-center w-full flex-wrap ">
<button on:click={()=>setChapter(1)}  class={`p-1 m-1 rounded-lg  px-2 ${selectedChapter== 1? 'bg-gray-400':'bg-gray-600' }`}>1</button>
<button on:click={()=>setChapter(2)}  class={`p-1 m-1 rounded-lg  px-2 ${selectedChapter== 2? 'bg-gray-400':'bg-gray-600' }`}>2</button>
<button on:click={()=>setChapter(3)}  class={`p-1 m-1 rounded-lg  px-2 ${selectedChapter== 3? 'bg-gray-400':'bg-gray-600' }`}>3</button>
<button on:click={()=>setChapter(4)}  class={`p-1 m-1 rounded-lg  px-2 ${selectedChapter== 4? 'bg-gray-400':'bg-gray-600' }`}>4</button>
<button on:click={()=>setChapter(5)}  class={`p-1 m-1 rounded-lg  px-2 ${selectedChapter== 5? 'bg-gray-400':'bg-gray-600' }`}>5</button>
<button on:click={()=>setChapter(6)}  class={`p-1 m-1 rounded-lg  px-2 ${selectedChapter== 6? 'bg-gray-400':'bg-gray-600' }`}>6</button>
<button on:click={()=>setChapter(7)}  class={`p-1 m-1 rounded-lg  px-2 ${selectedChapter== 7? 'bg-gray-400':'bg-gray-600' }`}>7</button>
<button on:click={()=>setChapter(8)}  class={`p-1 m-1 rounded-lg  px-2 ${selectedChapter== 8? 'bg-gray-400':'bg-gray-600' }`}>8</button>
<button on:click={()=>setChapter(9)}  class={`p-1 m-1 rounded-lg  px-2 ${selectedChapter== 9? 'bg-gray-400':'bg-gray-600' }`}>9</button>
<button on:click={()=>setChapter(10)}  class={`p-1 m-1 rounded-lg  px-2 ${selectedChapter== 10? 'bg-gray-400':'bg-gray-600' }`}>10</button>
<button on:click={()=>setChapter(11)}  class={`p-1 m-1 rounded-lg  px-2 ${selectedChapter== 11? 'bg-gray-400':'bg-gray-600' }`}>11</button>
<button on:click={()=>setChapter(12)}  class={`p-1 m-1 rounded-lg  px-2 ${selectedChapter== 12? 'bg-gray-400':'bg-gray-600' }`}>12</button>
<button on:click={()=>setChapter(13)}  class={`p-1 m-1 rounded-lg  px-2 ${selectedChapter== 13? 'bg-gray-400':'bg-gray-600' }`}>13</button>
<button on:click={()=>setChapter(14)}  class={`p-1 m-1 rounded-lg  px-2 ${selectedChapter== 14? 'bg-gray-400':'bg-gray-600' }`}>14</button>
<button on:click={()=>setChapter(15)}  class={`p-1 m-1 rounded-lg  px-2 ${selectedChapter== 15? 'bg-gray-400':'bg-gray-600' }`}>15</button>
<button on:click={()=>setChapter(16)}  class={`p-1 m-1 rounded-lg  px-2 ${selectedChapter== 16? 'bg-gray-400':'bg-gray-600' }`}>16</button>
</div>

<!-- </div> -->
