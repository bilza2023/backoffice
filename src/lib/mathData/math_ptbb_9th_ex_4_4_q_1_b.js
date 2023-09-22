/** frac  sqrt times cancel times */
export default {

questionDetails : 'PTBB, Class 9th, Exercise 4.4 Q # 1 b',
//-in file name math_ptbb_9th_ex_4_4_q_1.js
eqs : [
{time:0,code: "\\frac{14}{\\sqrt{98}}"},

{time:26,code:
`\\frac{14}
{\\sqrt{98}}
\\times
 \\frac
    {\\sqrt{98}} 
    {\\sqrt{98}}
`},

{time:42,code:
`\\frac
    {14 \\times \\sqrt{98}}
    {(\\sqrt{98})^2} 
`},

{time:54,code:
`\\frac
    {14 \\times \\sqrt{98}}
    {( \\cancel{ \\sqrt{98}} )  \\cancel{^2} } 
`},

{time:69,code:
`\\frac
    {14 \\times \\sqrt{98}}
    {98 } 
`},

{time:77,code:
`\\frac
    {14 \\times \\sqrt{ 2 \\times 7 \\times 7}}
    {98 } 
`},
{time:88,code:
`\\frac
    {14 \\times \\sqrt{ 2 \\times 7^2}}
    {98 } 
`},
{time:106,code:
`\\frac
    {14 \\times 7 \\sqrt{ 2}}
    {98 } 
`},

{time:120,code:
`\\frac
    {98  \\sqrt{ 2}}
    {98 } 
`},

{time:124,code:
`\\frac
    {\\cancel{98}  \\sqrt{ 2}}
    {\\cancel{98} } 
`},

{time:128,code:  "\\sqrt{ 2}"},


],


spContent : [
{ startTime:77,endTime:100 , type : 'html', hideMP :false,
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
},

    // {startTime : 5 , endTime : 10, code : "This is first line of SP Content",hideMP :false},
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