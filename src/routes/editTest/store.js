
import { writable } from 'svelte/store';

export const itemStore     = writable( {} );
export const questionsStore         = writable([]);



export const showQuestionsStore     = writable(false);

// values : runDlg , cloneDlg , DeleteDlg 
export const visibleDialogStore     = writable('');

export const showRunDlgStore     = writable(false);
// export const showCloneStore         = writable(false);
export const showDeleteStore        = writable(false);

export const errorsArrayStore       = writable([]);


