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
      this.step=1, 
      this.eqStartTime= 0, 
      this.eqEndTime= 0, 
      this.showSPinFS = false,  
      this.fsStartTime = 0, 
      this.fsEndTime =0, 
      this.code= "", 
      this.type= "code", //new addition 
      this.spVisibility= true, 
      this.fsVisibility= false, 

      this.sp= [],        
      this.fs= []
    }  
}
