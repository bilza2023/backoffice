  const obj = {
    x: getProp(100),
    y: getProp(100),
    width:  getProp(300),
    height: getProp(200),
    
    lines: [ // they are actually vertices
        {x: 0, y: 35},    // Start at left, 35% down
        {x: 70, y: 35},   // Line to 70% across (top of stem)
        {x: 70, y: 20},   // Up to 20% height (start of arrowhead)
        {x: 100, y: 50},  // Diagonal to arrow tip
        {x: 70, y: 80},   // Diagonal down (bottom of arrowhead)
        {x: 70, y: 65},   // Back to stem
        {x: 0, y: 65},    // Bottom of stem
        {x: 0, y: 35}     // Close the shape
   
    ]
  }; 
///////////////////////////////////////////  

Above is an object structure that i use to draw a set of lines in a rectangle using relative spaces.

The x,y are the draw rectangle origin
the width and height is the rectangle width and height
the lines array in collection of vertices on which the line is to be drawn.


///====
 The important thing is that the x and y in "lines" array 
    {x:0,y,10}
does not show the number of pixels at which they are to be drawn 
BUT
 show the percent of x and y at which they should be drawn 

for example
        {x:10,y,10}
    1: x:10 means 10% of the width = 30 (10%of300). so x = item.x + 30 = 100 + 30 = 130
    2: y is 10 percent of height = 200 so 20. the y will be drawn at 
    150 + 20 .

so since the lines are drawn as per percentages and not fixed px so if we change width or height the image inside remains the same (if aspect ration is presenved)

Second Important Point
========================
Always check that the  lines array should form a closed shape so that it can be filled. write a seperate function for checking. 


Please generate more items for me

for example here is an example of a simple sword 

case 'sword' :
// Sword
extra.lines = [
    {x: 45, y: 0}, {x: 55, y: 0}, {x: 55, y: 60}, 
    {x: 65, y: 60}, {x: 65, y: 80}, {x: 55, y: 80}, 
    {x: 55, y: 100}, {x: 45, y: 100}, {x: 45, y: 80}, 
    {x: 35, y: 80}, {x: 35, y: 60}, {x: 45, y: 60}, 
    {x: 45, y: 0}
];
break;

and here is its option
<option value="sword">Sword</option>


please create more such items for me

give all the extra.line in switch statement format like above and also give "options"