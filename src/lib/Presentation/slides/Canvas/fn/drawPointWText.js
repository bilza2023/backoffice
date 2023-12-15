//@ts-nocheck
import percToX from "./percToX";
import percToY from "./percToY";
import drawPoint from "./drawPoint";

//////////////////////////////////////////

export default function drawPointWText(canvas, ctx, x1, y1, text, width = 10, color = 'yellow',colorText='white') {  
    // debugger;
    // Draw the point using the existing drawPoint function
    drawPoint(canvas, ctx,[{x:x1,y:y1}], width, color);
    
    // Convert percentage coordinates to actual coordinates for text
    x1 = percToX(canvas, x1);
    y1 = percToY(canvas, y1);
    
    // Set the font and text color
    ctx.font = "12px Arial";
    ctx.fillStyle = colorText;
    
    // Draw the text
    ctx.fillText(text, x1 + width, y1 + width/2);
}
