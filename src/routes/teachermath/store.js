
import { writable } from 'svelte/store';

//===if login then yes else no
export const isLoginStore     = writable(false);
// if admin then yes
export const isAdminStore    = writable(false);

