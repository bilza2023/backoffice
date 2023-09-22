
export default {

questionDetails : 'PTBB, Class 9th, Exercise 4.4 Q # 1',
//-in file name math_ptbb_9th_ex_4_4_q_1.js
eqs : 
 [{"step":1,"code":"\\frac{6}{  \\sqrt{8} \\sqrt{27}   }","time":0},
 {"step":2,"code":"\\frac{6}{  \\sqrt{8} \\sqrt{27}} \\times \\frac{\\sqrt{8}\\sqrt{27}}{\\sqrt{8}\\sqrt{27}}","time":2},
 {"step":3,"code":"\\frac {6 (\\sqrt{4 \\times 2} ) (\\sqrt { 9 \\times 3})}  \n{ 8 \\times 27}","time":4},
 {"step":4,"code":"\\frac {  6 \\times 2 \\sqrt{2} \\times 3 \\sqrt{3}        }\n{ 216}","time":6},
 {"step":5,"code":"\\frac { 6 \\times 3 \\times 2 (\\sqrt{2 \\times 3})}\n{  216}","time":8},
 {"step":6,"code":"\\frac { \\cancel{36} \\sqrt{6}}\n{ \\cancel {216} ^6}","time":10},
 {"step":7,"code":"\\frac { \\sqrt{6}}\n{ 6 }","time":12}
],


spContent : [
    {startTime : 3 , endTime : 30, 
    code : `
<table class="table-auto border-collapse border border-green-800">
  <thead>
    <tr>
      <th class="border border-green-600 px-4 py-2 text-green-700">Number</th>
      <th class="border border-green-600 px-4 py-2 text-green-700">Prime Factor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-green-600 px-4 py-2">98</td>
      <td class="border border-green-600 px-4 py-2">2</td>
    </tr>
    <tr>
      <td class="border border-green-600 px-4 py-2">49</td>
      <td class="border border-green-600 px-4 py-2">7</td>
    </tr>
    <tr>
      <td class="border border-green-600 px-4 py-2">7</td>
      <td class="border border-green-600 px-4 py-2">7</td>
    </tr>
  </tbody>
</table>


`
    
    ,hideMP :false , type :'html'},
    // {startTime : 15 , endTime : 20, code : "This is Second line of SP Content",hideMP :true},
    // {startTime : 25 , endTime : null, code : "PERMANENT SP Content",hideMP :false},
    // {startTime : 30 , endTime : 35, code : "Added after PERMANENT",hideMP :false},
    // {startTime : 40 , endTime : 45, code : "HIDE after PERMANENT",hideMP :true},
],

permContent : [
//  {startTime : 0 ,  code : "Rought work!!!",hideMP :false},
//  {startTime : 0 ,  code : "\\frac{3}{4 \\sqrt{3}}",hideMP :false,type:'code'},
//  {startTime : 0 ,  code : "/images/math_9thPTBB.png",hideMP :false,type:'img'},
]


}