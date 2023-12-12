
//@ts-nocheck


export default function yToPerc(canvas, pixelY) {
    const canvasHeight = canvas.height;
    // Calculate the percentage value based on the pixel
    const percentY = (pixelY / canvasHeight) * 100;
    return percentY;
}