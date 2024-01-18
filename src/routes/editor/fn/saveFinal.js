//@ts-nocheck
// import stringify from "./stringify";
import {toast,BASE_URL,ajaxPost} from '$lib/util';


export default async function saveFinal(slides,tcode,id,item){
// debugger;
//--first slide start time = 0;
if (slides && slides.length > 0){
  slides[0].startTime = 0;
  updateSlideStartTimes(slides);
}
// stringify(slides);
  const presentation = {slides ,status:item.status,questionType:item.questionType,_id:id};
  // const resp = await fetch( `${BASE_URL}/be/update`, {
  //   method: 'POST',
  //     headers: {
  //   'Content-Type': 'application/json',
  //   'Authorization': `Bearer 000`,
  // },
  // body: JSON.stringify( {presentation,tcode} ) 
  // });
  // debugger;
  const resp = await ajaxPost(`${BASE_URL}/be/update`,{presentation,tcode})
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
