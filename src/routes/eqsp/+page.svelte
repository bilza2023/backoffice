<script>
//@ts-nocheck
import EqPlayerPre from "./EqPlayerPre.svelte";
let slide = {

  items :[
      {name: '' , content : '' , extra : {
            type : 'hdg',
            code : 'This is a heading',
            startTime : 0,
            endTime : 10,
            sp:[],
            fs:[]
      }},
      {name: '' , content : '' , extra : {
            type : 'text',
            code : 'This is normal text',
            startTime : 10,
            endTime : 20,
            sp:[],
            fs:[]
      }},
      {name: '' , content : '' , extra : {
            type : 'code',
            code : '4^2',
            startTime : 20,
            endTime : 30,
            sp:[],
            fs:[]
      }},
  ]

};

</script>

<div class="bg-gray-800 w-full  text-white min-h-screen p-0 m-0">

<EqPlayerPre bind:slide={slide} />

<br>
<br>
<br>
<br>


</div>
