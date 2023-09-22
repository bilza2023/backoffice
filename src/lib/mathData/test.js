
export default {

questionDetails : 'PTBB, Class 9th, Exercise 4.4 Q # 1',
//-in file name math_ptbb_9th_ex_4_4_q_1.js
eqs : [
{time:0,code: "\\frac{1}{\\sqrt{2}}" },
{time:2,code: "E=mc^2" },
{time:4,code: "\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}"},
{time:6,code: "\\int_{0}^{\\pi} \\sin(x) dx = 2"},
{time:8,code: "\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1"},
{time:9,code: "\\sqrt{a^2 + b^2}"},
{time:10,code: "F = G\\frac{m_1m_2}{r^2}"},
{time:11,code: "\\binom{n}{k} = \\frac{n!}{k!(n-k)!}"},
{time:12,code: "\\frac{d}{dx}e^x = e^x"},
{time:13,code: "\\vec{F} = m\\vec{a}"},

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