
import { writable } from 'svelte/store';

// Creating a writable store for points
export const pointsStore = writable([]);
export const selectedItemStore = writable(null);
