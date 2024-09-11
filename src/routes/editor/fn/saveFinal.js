//@ts-nocheck
// import stringify from "./stringify";
import {toast,API_URL,ajaxPost} from '$lib/util';


export default async function saveFinal(slides,tcode,id,item){
  // throw new Error("Not permitted to save");
//--first slide start time = 0;
if (slides && slides.length > 0){
  slides[0].startTime = 0;
  updateSlideStartTimes(slides);
}

const question = item;
question.slides = slides;
///////////////////////////////////////////////////////////////////
  const resp = await ajaxPost( `${API_URL}/tcode/update` , { 	question } );

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
