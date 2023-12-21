
//@ts-nocheck

//@ts-nocheck
import percToX from "./percToX";
import percToY from "./percToY";

export default function drawText(canvas, ctx,x, y,text, fontSize = 12, textColor = 'white',opacity=1) {
// debugger;

    x = percToX(canvas, x);
    y = percToY(canvas, y);

ctx.globalAlpha = opacity;
    ctx.fillStyle = textColor;

    // Set the font size and font family
    ctx.font = `${fontSize}px Arial`;

    // Draw the text at the specified point
    ctx.fillText(text, x, y);
}
