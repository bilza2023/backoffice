//@ts-nocheck
/**
 - This is one item in eqs array SINGLE EQ
 - An eq can have data for side panel (SP) as well as FS. 
 - The SP is visible all the time however the FS will be only visible when we hit FS startTime and end at FS endTime.
 - We also have showFS switch using which we can stop FS from display without making any other change (except it may be there is narration).  XX REMOVED
 - showSPinFS = if true we will show the same data of SP in FS.So we can show FS even without FS data just using SP data
 - for FS data or SP data there is no focus they all show at one time. This is not a slide show.
 */

export default function getEqData(){return new EqData();}

class EqData  {
constructor(){
      this.step = 1, //CAL at save time as per array index
      this.type = 'code', //text or code
      this.code= "\\sqrt{3x-1}+(1+x)^2",
      this.eqStartTime= 0, // This is the eqStartTime calc at save
      this.eqEndTime= 0, // This is the eqEndTime calc at save
      
      this.showSPinFS = false,  

      this.fsStartTime = 0, //if it has to go full screen then this is when it starts.must be larger than time but smaller next eq.time
      fsEndTime = 0, //must be smaller next eq.time
      //===not to be saved -its only for equation editor
      spVisibility= false, //remove this before save
      fsVisibility= false, //remove this before save

// types code,text,table,img,graph      
      sp= [
        { code= "\\frac{1}{\\sqrt{2}}", type= 'code' },
        { code= "This is some text", type= 'text' },
        { code= "my_image", type= 'img' },
        { code= `[["r-1,c-1" ,"r-1,c-2","r-1,c-3"],["r-2,c-1" ,"r-2,c-2","r-2,c-3"],["r-3,c-1" ,"r-3,c-2","r-3,c-3"]]`, type= 'table'}
      ],
      fs= [
        { code= "\\frac{1}{\\sqrt{2}}", type= 'code' },
        { code= "This is some text", type= 'text' },
        { code= "my_image", type= 'img' },
        { code= `[["r-1,c-1" ,"r-1,c-2","r-1,c-3"],["r-2,c-1" ,"r-2,c-2","r-2,c-3"],["r-3,c-1" ,"r-3,c-2","r-3,c-3"]]`, type= 'table'}
      ]

    }  
}
