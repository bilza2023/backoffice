<script lang="ts">
    //@ts-nocheck
    import PlayButtons from './PlayButtons.svelte';
    import Slider from './Slider.svelte';
    import { fade } from 'svelte/transition';

    export let start: () => void;
    export let stop: () => void;
    export let applyTheme: () => void;
    export let pause: () => void;
    export let isPlaying: boolean;
    export let isPaused: boolean;
    export let setVolume: (volume: number) => void;
    export let currentSlide: number;
    export let slides: any[];
    export let pulse: number;
    export let setPulse: (value: number) => void;
  </script>
  
  <div class='toolbar-wrapper' in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>
    <div class='toolbar-content flex justify-left'>
      <PlayButtons {start} {stop} callback={applyTheme} {pause} {isPlaying} {isPaused} {setVolume}/>
  
      {#if currentSlide}
        <Slider {slides} {pulse} {setPulse}/>
      {/if}
    </div>
  </div>
  
  <style>
    .toolbar-wrapper {
      position: relative; /* or absolute */
      z-index: 1000; /* adjust as needed */
    }
  
    .toolbar-content {
      position: fixed; /* or absolute */
      top: 0;
      left: 0;
      width: 100%;
      background-color: #aeb18c; /* adjust background color as needed */
      padding: 1px;
      opacity: 0.8;

    }
  </style>
  