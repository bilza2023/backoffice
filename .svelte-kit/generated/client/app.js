export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/app/matrix": [3],
		"/dashboard": [4],
		"/editor": [5],
		"/help": [6],
		"/login": [7],
		"/player2": [9],
		"/player": [8],
		"/questionManager": [10],
		"/syllabus": [11]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';