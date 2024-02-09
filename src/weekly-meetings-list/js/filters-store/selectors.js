export const getFilters = (state) => {
	return state.items;
};

export const replaceFilter = (state, { uniqueId, index, filter }) => {
	const timeMs = Date.now();

	return {
		...state,
		items: [
			...state.items,
			{
				blockId: uniqueId,
				timeStamp: timeMs,
				filtersArray: [
					...DEFAULT_FILTERS.slice(0, index),
					filter,
					...DEFAULT_FILTERS.slice(index + 1),
				],
			},
		],
	};
};
