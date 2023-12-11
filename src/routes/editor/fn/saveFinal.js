//@ts-nocheck
import stringify from "./stringify";
import {toast,BASE_URL} from '$lib/util';



export default async function saveFinal(slides,tcode,id){
// debugger;
//--first slide start time = 0;

updateSlideStartTimes(slides);
//--i have removed the parse for Grid but the stringify is still here may remove later or just keep it
stringify(slides);
  const presentation = {slides ,_id:id};
  const resp = await fetch( `${BASE_URL}/pre/update`, {
    method: 'POST',
      headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer 000`,
  },
  body: JSON.stringify( {presentation,tcode} ) 
  });
  // debugger;
  if(resp.ok){
    toast.push('saved');}
    else {toast.push('failed to saved');
  }
}

//////////////////////////////////////////////
function updateSlideStartTimes(slides) {
  if (!slides || slides.length < 2) {
    // No need to update if there are fewer than 2 slides
    return;
  }
  slides[0].startTime = 0;
  // Start from the second slide (index 1)
  for (let i = 1; i < slides.length; i++) {
    slides[i].startTime = slides[i - 1].endTime;
  }
}
