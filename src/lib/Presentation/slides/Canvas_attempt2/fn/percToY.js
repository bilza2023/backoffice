//@ts-nocheck


export default function percToY(canvas, y) {
    const canvasHeight = canvas.height;
    // Calculate the pixel value based on the percentage
    const pixelY = Math.round((canvasHeight / 100) * y);
    return pixelY;
}

