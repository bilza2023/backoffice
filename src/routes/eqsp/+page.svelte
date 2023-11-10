<script>
//@ts-nocheck
import EqEditorPre from "$lib/Presentation/slides/eqs/EqsEditorPre/EqsEditorPre.svelte";
let currentSlide = {
  startTime : 0,    //This is slide start and end time
  endTime : 50,    
  type : 'Eqs',    
  slideExtra : [],    
  /////////////////
  items :[
      {name: '' , content : '' , extra : {
            type : 'hdg',
            step : 1,
            code : 'This is a heading',
            startTime : 0,//This is item start and end time
            endTime : 10,
            sp:[ 
                  {code : 'Baat Ya hai', type: 'text', },
                  {code : 'Kill Bill', type: 'text', },
                  ],
            fs:[]
      }},
      {name: '' , content : '' , extra : {
            type : 'text',
            step : 2,
            code : 'This is normal text',
            startTime : 10,
            endTime : 20,
            sp:[ 
                  {code : 'Peronal Gains', type: 'text', },
                  {code : 'Thullay', type: 'text', },
                  ],
            fs:[]
      }},
      {name: '' , content : '' , extra : {
            type : 'code',
            step : 3,
            code : '4^2',
            startTime : 20,
            endTime : 30,
            sp:[ 
                  {code : 'November Aim', type: 'text', },
                  {code : 'December', type: 'text', },
                  ],
            fs:[]
      }},
  ]

};

</script>

<div class="bg-gray-800 w-full  text-white min-h-screen p-0 m-0">

<!-- <EqEditorPre bind:slide={slide} /> -->
 <EqEditorPre pulse=0 startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} slideExtra={currentSlide.slideExtra} theme={{}}/>
<br>
<br>
<br>
<br>


</div>
