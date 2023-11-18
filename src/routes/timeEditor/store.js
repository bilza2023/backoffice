

import { writable } from 'svelte/store';

export let  currentEqStore      = writable(null);
export let  runningTime      = writable(0);
export let  isPlayingStore      = writable(false);

