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
	() => import('./nodes/10')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/app/matrix": [3],
		"/editor": [4],
		"/help": [5],
		"/login": [6],
		"/player2": [8],
		"/player": [7],
		"/questionManager": [9],
		"/syllabus": [10]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';