
//@ts-nocheck


export default function xToPerc(canvas, pixelX) {
    const canvasWidth = canvas.width;
    // Calculate the percentage value based on the pixel
    const percentX = (pixelX / canvasWidth) * 100;
    return percentX;
}