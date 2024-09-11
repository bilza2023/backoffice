
//@ts-nocheck
import getProp from "./getProp";


export default async function version0_1Upgrade(slide){
// debugger;
if(!slide.version == null){return;}

for (let i = 0; i < slide.items.length; i++) {
  const item =   slide.items[i];

    if(item.extra.command == 'text'){
      if( item.extra.fontSize  == null){
      let f = item.extra.font.slice(0, 2);
      item.extra.fontSize = getProp(f);
      }
    item.extra.y.initialValue = item.extra.y.initialValue * 25; 
    item.extra.x.initialValue = item.extra.x.initialValue * 25; 

    }//text
  
  if(item.extra.command == 'sprite'){}
}//larger for

}//version0_1Upgrade

            //   ////////////////////////////////////////////////////upgrade
            //   debugger;
            //   if(!itemData.version == null){
            //     /////////////
            //     itemData.extra.dx.initialValue = itemData.extra.dx.initialValue * 25; 
            //     itemData.extra.dy.initialValue = itemData.extra.dy.initialValue * 25; 
            //   }
            //   // version0_1Upgrade(itemData);
            //   ////////////////////////////////////////////////////////////
        
                  ////////////////////////////////////////////////////upgrade
      // debugger;
  
      // version0_1Upgrade(itemData);
      ////////////////////////////////////////////////////////////
