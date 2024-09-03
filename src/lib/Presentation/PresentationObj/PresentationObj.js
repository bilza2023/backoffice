//@ts-nocheck
// 24 Aug 2024
import { Howl } from 'howler';
import Inspector from './Inspector';
import { get } from 'svelte/store';
import { statePlayStore, statePrepStore, currentSlideStore } from './store'; // Import the stores


export default class PresentationObj {

    constructor(questionData,soundFilePath){

        this.questionData = questionData;
        this.slides = questionData.slides;
        this.soundFilePath = soundFilePath;
        this.sound = null; 
        this.currentSlide = null;
        this.soundLoaded = false;
        this.maxSliderValue = 0;
        this.inspector = new Inspector(this.slides); //dont use questionData.slides;
        this.stopTime = null;

        this.isPlaying = false; // in start not playing not paused
        this.isPaused = false; // in start not playing not paused
        
        this.interval = null;
    }
    async loadSound() {
        try {
          statePrepStore.set(1) ; /// 1 = downloading
          this.sound = new Howl({
            src: [this.soundFilePath],
            volume: 1.0,
            html5: true,
            onload: function () {
              statePrepStore.set(2); // ready/loaded
              
            },
            onloaderror: function (id, error) {
              statePrepStore.set(0); // initial state not downloaded
              console.error("Error loading sound:", error);
            }
          });
        } catch (e) {
          statePrepStore.set(0);
        }
      }

      async  setStopTime(){
        if(this.slides.length > 0){
           if (this.slides[this.slides.length -1].endTime 
           && this.slides[this.slides.length -1].endTime > 0 ){
               this.stopTime = this.slides[this.slides.length -1].endTime;
               return this.stopTime;
               }else {
                this.stopTime = 600; /////strange why???
                return this.stopTime;
           }
        }
       }
    // i am keeping this.currentSlide as well as returning  return this.currentSlide;  
    setCurrentSlide(){
        //  debugger;
        const r = this.sound.seek();
         for (let i = 0; i < this.slides.length; i++) {
         const slide = this.slides[i];
                if (r >= slide.startTime && r < slide.endTime ){
            this.currentSlide = slide ;
                return; 
                }
         }
    }
    getCurrentSlide(){
      this.setCurrentSlide();
      return this.currentSlide;
    }
    // start
    async start(){
      try{
       if (get(statePlayStore) == 1 ){return false;} // playing
       if (get(statePlayStore) == 2 ){this.pause();return false;} // playing

              this.sound.play();
              this.sound.on('play', function () {
                this.isPlaying = true;
                statePlayStore.set(1);
                return true;
          });
      }catch(e){
        return false;
        // throw new Error("Can not load sound");
      }
          
       return true;     
      }

      //pause
      pause() {
        if (get(statePlayStore) == 2) {
          this.sound.play();
          statePlayStore.set(1);
        } else {
          this.sound.pause();
          statePlayStore.set(2);
        }
      }

      stop(){ 
        statePlayStore.set(0);
        this.sound.stop();
          return true;
      }
      pulse() {
         const r = this.sound.seek();
         if (!r) {
          return 0;
         }else {
           return r;
         }
      }

    setVolume(volumeLevel) {
        this.sound.volume(volumeLevel);
    }

    setPulse(time){
    
      this.sound.seek(time);
      this.setCurrentSlide();
    }
}