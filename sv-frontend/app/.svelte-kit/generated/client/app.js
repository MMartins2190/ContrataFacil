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
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16')
];

export const server_loads = [0];

export const dictionary = {
		"/": [2],
		"/about": [3],
		"/curriculums": [4],
		"/curriculums/[curriculumId]": [5],
		"/enterprise-form": [~6],
		"/enterprise-intro": [7],
		"/enterprise-intro/[enterpriseId]": [8],
		"/homepage": [9],
		"/login": [~10],
		"/opening-form": [~11],
		"/openings": [12],
		"/openings/[openingId]": [13],
		"/plans": [14],
		"/profile": [15],
		"/signin": [16]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';