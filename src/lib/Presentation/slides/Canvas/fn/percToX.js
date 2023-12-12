//@ts-nocheck

 
export default function percToX(canvas,x) {
    const canvasWidth = canvas.width;
    // Calculate the pixel value based on the percentage
    const pixelX = Math.round((canvasWidth / 100) * x);
    return pixelX;
}
