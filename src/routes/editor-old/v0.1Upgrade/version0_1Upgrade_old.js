
//@ts-nocheck
import getProp from "./getProp";

export default async function version0_1Upgrade(slide){

  try{
if(!slide.version == null){return;}

for (let i = 0; i < slide.items.length; i++) {
  const item =   slide.items[i];

  if(item.extra.command == 'line'){
    // debugger;
    item.extra.x1.initialValue = item.extra.x1.initialValue * 25;
    item.extra.y1.initialValue = item.extra.y1.initialValue * 25;
    item.extra.x2.initialValue = item.extra.x2.initialValue * 25;
    item.extra.y2.initialValue = item.extra.y2.initialValue * 25;
  }
  if(item.extra.command == 'circle'){
    // debugger;
    item.extra.x.initialValue = item.extra.x.initialValue * 25;
    item.extra.y.initialValue = item.extra.y.initialValue * 25;
  }
  if(item.extra.command == 'ellipse'){
    // debugger;
    item.extra.x.initialValue = item.extra.x.initialValue * 25;
    item.extra.y.initialValue = item.extra.y.initialValue * 25;
  }
  if(item.extra.command == 'rect'){
    // debugger;
    item.extra.x.initialValue = item.extra.x.initialValue * 25;
    item.extra.y.initialValue = item.extra.y.initialValue * 25;
  }
    if(item.extra.command == 'text'){
      if( item.extra.fontSize  == null){
      let f = item.extra.font.slice(0, 2);
      item.extra.fontSize = getProp(f);
      }
    item.extra.y.initialValue = item.extra.y.initialValue * 25; 
    item.extra.x.initialValue = item.extra.x.initialValue * 25; 

    }//text
    if(item.extra.command == 'para'){
      if( item.extra.fontSize  == null){
      let f = item.extra.font.slice(0, 2);
      item.extra.fontSize = getProp(f);
      }
      item.extra.x.initialValue = item.extra.x.initialValue * 25;
      item.extra.y.initialValue = item.extra.y.initialValue * 25;
    }
    if(item.extra.command == 'triangle'){
      // debugger;
      item.extra.x1.initialValue = item.extra.x1.initialValue * 25;
      item.extra.y1.initialValue = item.extra.y1.initialValue * 25;
      
      item.extra.x2.initialValue = item.extra.x2.initialValue * 25;
      item.extra.y2.initialValue = item.extra.y2.initialValue * 25;
      
      item.extra.x3.initialValue = item.extra.x3.initialValue * 25;
      item.extra.y3.initialValue = item.extra.y3.initialValue * 25;

    }

    if(item.extra.command == 'ray'){
      // debugger;
      item.extra.x0.initialValue = item.extra.x0.initialValue * 25;
      item.extra.y0.initialValue = item.extra.y0.initialValue * 25;
      item.extra.x1.initialValue = item.extra.x1.initialValue * 25;
      item.extra.y1.initialValue = item.extra.y1.initialValue * 25;
    }
    if(item.extra.command == 'dot'){
      // debugger;
      item.extra.x.initialValue = item.extra.x.initialValue * 25;
      item.extra.y.initialValue = item.extra.y.initialValue * 25;
    
    }
    if(item.extra.command == 'repeatDot'){
      // debugger;
      item.extra.initialX = item.extra.initialX * 25;
      item.extra.initialY = item.extra.initialY * 25;
      item.extra.xFactor = item.extra.xFactor * 25;
      item.extra.yFactor = item.extra.yFactor * 25;
    
    }
    if(item.extra.command == 'repeatText'){
      // debugger;
      item.extra.initialX.initialValue = item.extra.initialX.initialValue * 25;
      item.extra.initialY.initialValue = item.extra.initialY.initialValue * 25;
      item.extra.xFactor = item.extra.xFactor;
      // item.extra.yFactor = item.extra.yFactor * 25;
    
    }
    if(item.extra.command == 'angleSymbol'){
      // debugger;
      item.extra.x.initialValue = item.extra.x.initialValue * 25;
      item.extra.y.initialValue = item.extra.y.initialValue * 25;
    }
  if(item.extra.command == 'sprite'){
        itemData.extra.dx.initialValue = itemData.extra.dx.initialValue * 25; 
        itemData.extra.dy.initialValue = itemData.extra.dy.initialValue * 25; 
  }
  if(item.extra.command == 'image'){
    // debugger;
    item.extra.x.initialValue = item.extra.x.initialValue * 25;
    item.extra.y.initialValue = item.extra.y.initialValue * 25;
  }
  

}//larger for

  }catch(e){
    throw new Error("upgrade failed",e);
    
  }
}//version0_1Upgrade

  