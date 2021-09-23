import { writable } from 'svelte/store';

const visitState = () => {
	const { subscribe, update } = writable<
		{
			visitedUrl: string;
		}[]
	>([]);

	return {
		subscribe,

		addVisit: (path: string) =>
			update((n) => {
				return [
					...n,
					{
						visitedUrl: path
					}
				];
			})
	};
};

export const VisitState = visitState();
