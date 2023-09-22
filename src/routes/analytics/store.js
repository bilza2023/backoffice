import { writable } from 'svelte/store';

// export const quizStore = writable({});


//loading , loaded/showIntro , notfound , showQuiz , outro
export const pageStateStore = writable('loading');
export const quizStore = writable({});
export const resultsStore = writable([]);


