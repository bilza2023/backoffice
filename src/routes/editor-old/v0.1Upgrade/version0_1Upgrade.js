//@ts-nocheck
import getProp from "./getProp";

export default async function version0_1Upgrade(slide) {
  try {
    if (!slide.version == null) return;

    for (let i = 0; i < slide.items.length; i++) {
      const item = slide.items[i];

      switch (item.extra.command) {
        case 'line':
          handleLineCommand(item);
          break;
        case 'circle':
          handleCircleCommand(item);
          break;
        case 'ellipse':
          handleEllipseCommand(item);
          break;
        case 'rect':
          handleRectCommand(item);
          break;
        case 'text':
          handleTextCommand(item);
          break;
        case 'para':
          handleParaCommand(item);
          break;
        case 'triangle':
          handleTriangleCommand(item);
          break;
        case 'ray':
          handleRayCommand(item);
          break;
        case 'dot':
          handleDotCommand(item);
          break;
        case 'repeatDot':
          handleRepeatDotCommand(item);
          break;
        case 'repeatText':
          handleRepeatTextCommand(item);
          break;
        case 'angleSymbol':
          handleAngleSymbolCommand(item);
          break;
        case 'sprite':
          handleSpriteCommand(item);
          break;
        case 'image':
          handleImageCommand(item);
          break;
      }
    }
  } catch (e) {
    throw new Error("upgrade failed", e);
  }
}

// Individual command handlers with try-catch

function handleLineCommand(item) {
  try {
    item.extra.x1.initialValue *= 25;
    item.extra.y1.initialValue *= 25;
    item.extra.x2.initialValue *= 25;
    item.extra.y2.initialValue *= 25;
  } catch (e) {
    throw new Error("Error in line command", e);
  }
}

function handleCircleCommand(item) {
  try {
    item.extra.x.initialValue *= 25;
    item.extra.y.initialValue *= 25;
  } catch (e) {
    throw new Error("Error in circle command", e);
  }
}

function handleEllipseCommand(item) {
  try {
    item.extra.x.initialValue *= 25;
    item.extra.y.initialValue *= 25;
  } catch (e) {
    throw new Error("Error in ellipse command", e);
  }
}

function handleRectCommand(item) {
  try {
    item.extra.x.initialValue *= 25;
    item.extra.y.initialValue *= 25;
  } catch (e) {
    throw new Error("Error in rect command", e);
  }
}

function handleTextCommand(item) {
  try {
    if (item.extra.fontSize == null) {
      let f = item.extra.font.slice(0, 2);
      item.extra.fontSize = getProp(f);
    }
    item.extra.x.initialValue *= 25;
    item.extra.y.initialValue *= 25;
  } catch (e) {
    throw new Error("Error in text command", e);
  }
}

function handleParaCommand(item) {
  try {
    if (item.extra.fontSize == null) {
      let f = item.extra.font.slice(0, 2);
      item.extra.fontSize = getProp(f);
    }
    item.extra.x.initialValue *= 25;
    item.extra.y.initialValue *= 25;
  } catch (e) {
    throw new Error("Error in para command", e);
  }
}

function handleTriangleCommand(item) {
  try {
    item.extra.x1.initialValue *= 25;
    item.extra.y1.initialValue *= 25;
    item.extra.x2.initialValue *= 25;
    item.extra.y2.initialValue *= 25;
    item.extra.x3.initialValue *= 25;
    item.extra.y3.initialValue *= 25;
  } catch (e) {
    throw new Error("Error in triangle command", e);
  }
}

function handleRayCommand(item) {
  try {
    item.extra.x0.initialValue *= 25;
    item.extra.y0.initialValue *= 25;
    item.extra.x1.initialValue *= 25;
    item.extra.y1.initialValue *= 25;
  } catch (e) {
    throw new Error("Error in ray command", e);
  }
}

function handleDotCommand(item) {
  try {
    item.extra.x.initialValue *= 25;
    item.extra.y.initialValue *= 25;
  } catch (e) {
    throw new Error("Error in dot command", e);
  }
}

function handleRepeatDotCommand(item) {
  try {
    item.extra.initialX *= 25;
    item.extra.initialY *= 25;
    item.extra.xFactor *= 25;
    item.extra.yFactor *= 25;
  } catch (e) {
    throw new Error("Error in repeatDot command", e);
  }
}

function handleRepeatTextCommand(item) {
  try {
    item.extra.initialX.initialValue *= 25;
    item.extra.initialY.initialValue *= 25;
    item.extra.xFactor = item.extra.xFactor; // No multiplication here?
  } catch (e) {
    throw new Error("Error in repeatText command", e);
  }
}

function handleAngleSymbolCommand(item) {
  try {
    item.extra.x.initialValue *= 25;
    item.extra.y.initialValue *= 25;
  } catch (e) {
    throw new Error("Error in angleSymbol command", e);
  }
}

function handleSpriteCommand(item) {
  try {
    item.extra.dx.initialValue *= 25;
    item.extra.dy.initialValue *= 25;
  } catch (e) {
    throw new Error("Error in sprite command", e);
  }
}

function handleImageCommand(item) {
  try {
    item.extra.x.initialValue *= 25;
    item.extra.y.initialValue *= 25;
  } catch (e) {
    throw new Error("Error in image command", e);
  }
}
