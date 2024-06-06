/**
 * The purpose of this class is to inspect tcode (one sing question) read from db and check/fix it for known errors, also if any thing needs to be done to the incomming data e.g upgrading from old version it will be done by this class.
 * it will be exported from Presentation and will be used in player, editor,player2 etc to fix incomming data.
 */

//@ts-nocheck

export default class Inspector {

    constructor(question) {
        this.question = question;
        //----fix on load
        if (!this.question.soundFileType)
        this.question.soundFileType = "mp3";
      }

    async fixSlides(){
        // debugger;
        
        // loop
        for (let i = 0; i < this.question.slides.length; i++) {
            const slide = this.question.slides[i];
            if(slide.type === 'canvas'){

                if(!slide.extra.bgGlobalAlpha){
                    slide.extra.bgGlobalAlpha =1;
                }
            }
        }
      }//fix




}
/////////////////////////////
