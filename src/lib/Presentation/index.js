
import { default as  Presentation} from './Presentation.svelte';
import { default as  PresentationPlayer} from './PresentationObj/PresentationPlayer.svelte';
import { default as  PresentationPlayerBlob} from './PresentationObj/PresentationPlayerBlob.svelte';
import { default as  PresentationModeEditor} from './PresentationModeEditor.svelte';
import { default as  PresentationModeUi} from './PresentationModeUi.svelte';
 
import getNewSlide from './getNewSlide/getNewSlide';
import getNewItem  from './getNewSlide/getNewItem.js';

export { 
    Presentation, 
    PresentationModeEditor,
    PresentationModeUi,
    getNewSlide, 
    getNewItem,
    PresentationPlayer,
    PresentationPlayerBlob
 }
