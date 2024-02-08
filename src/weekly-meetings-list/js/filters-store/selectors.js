export const getFilters = (state) => {
	return state.items;
};

export const replaceFilter = (state, { uniqueId, index, filter }) => {
	const uniqueIdKey = `${uniqueId}`;
	const timeMs = Date.now();

	return {
		...state,
		items: {
			...state.items,
			[uniqueIdKey]: {
				time_stamp: timeMs,
				filters_array: [
					...DEFAULT_FILTERS.slice(0, index),
					filter,
					...DEFAULT_FILTERS.slice(index + 1),
				],
			},
		},
	};
};
