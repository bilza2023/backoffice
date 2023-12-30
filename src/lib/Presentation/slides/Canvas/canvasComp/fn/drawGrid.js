//@ts-nocheck
import drawLinePure from '../pure/drawLinePure.js';

/**
Since the cell of a grid needs to be square thus we have to use either height for both the lines (ver and horiz) or width. I choose width.
horizontalNoOflSteps and verticalNoOflSteps are number of lines to draw. if the canvas width and height are different e.g width = 800 and height = 400. then we can draw @ 10 percent 10 cells in one row BUT only 5 rows since height is half that of width 
 */

export default async  function drawGrid(canvas,ctx,percent =10,lineWidth = 1,lineColor = '#4b5159') {
    // debugger;
    ctx.globalAlpha = 0.5;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;



//---sleeping line
  let horizontalNoOflSteps = (canvas.width /percent); 
  let horizontalStep = 0; 
  let horizontalIncrement = ((canvas.width /100)*percent); 

    for (let i = 0; i < horizontalNoOflSteps; i++) {
        drawLinePure(ctx,0,horizontalStep,canvas.width,horizontalStep,lineWidth,lineColor);
        horizontalStep+=horizontalIncrement;
    }

//---standing line
  let verticalNoOflSteps = (canvas.height /percent); 
  let verticalStep = 0; 
  let verticalIncrement = ((canvas.width /100)*percent); 
    for (let i = 0; i < verticalNoOflSteps; i++) {
        drawLinePure(ctx,verticalStep,0,verticalStep,canvas.height,lineWidth,lineColor);
        verticalStep+=verticalIncrement;
    }
 ctx.globalAlpha = 1; 
}

