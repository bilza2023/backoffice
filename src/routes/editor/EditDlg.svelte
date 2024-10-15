<script>
        //@ts-nocheck
        import { toast } from "$lib/util";
        
        export let item;
        // export let save;

        
        </script>
        
        
        <div class='flex flex-col justify-center   mx-auto w-8/12 border-2 border-white text-white rounded-md bg-green-950 m-2 p-2'>
        
        <h1 class='mx-auto'>Edit Question</h1>
        
        <!-- <TcodeDd bind:tcode={tcode}/> -->
        <!--ID-->
        <div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
            <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>ID</div>
            <div type='number' class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-8/12 bg-gray-800 text-white'>{item._id}</div>
            
        </div>
        <!--Chapter-->
        <div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
            <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Chapter</div>
            <input type='number' class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-8/12 bg-gray-800 text-white' bind:value={item.chapter} min=1 max=500/>
            
        </div>
        
        
        <!--Exercise-->
        <div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
            <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Exercise</div>
            <input class='text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12' type='text' bind:value={item.exercise}/>
        </div>
        
        <!--Question No-->
        <div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
            <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Question No</div>
            <input class='text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12' type='number' bind:value={item.questionNo}  min=0 max=500/>
        </div>
        
        <!--Part No-->
        <div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
            <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Part No</div>
            <input class='text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12' type='number' bind:value={item.part}  min=0 max=500/>
        </div>
        
        <!--Sort order-->
        <div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
            <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Sort Order</div>
            <input class='text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12' type='number' min="0" max="500" bind:value={item.sortOrder}/>
        </div>

        <!--Name-->
        <div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
            <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Name</div>
            <input class='text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12' type='text' bind:value={item.name}/>
        </div>
        
        <!--Status-->
        <div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
            <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Status</div>
            <select class="text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12" id="" bind:value={item.status}> 
                <option value="empty">Empty</option>
                <option value="filled">Filled</option>
                <option value="locked">Locked</option>
                <option value="final">Final</option>
              </select>
        </div>
        
        <!--Type-->
        <div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
            <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Type</div>
            <select class="text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12" id="" bind:value={item.type}> 
                <option value="paid">Paid</option>
                <option value="login">Login</option>
                <option value="free">Free</option>
              </select>
        </div>
        
        <br>
        
        
        
        </div><!--wrapper-->
        
       