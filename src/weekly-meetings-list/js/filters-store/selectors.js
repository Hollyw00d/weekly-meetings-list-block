export const getFilters = (state) => {
	return state.items;
};

export const replaceFilter = (state, { uniqueId, index, filters }) => {
	const timeStamp = Date.now();

	const getItems1 = [...state.items];
	getItems1.push(...state.items, {
		blockId: uniqueId,
		timeStamp,
		filtersArray: [
			...DEFAULT_FILTERS.slice(0, index),
			...filters,
			...DEFAULT_FILTERS.slice(index + 1),
		],
	});

	return {
		...state,
		items: getItems1,
	};
};
