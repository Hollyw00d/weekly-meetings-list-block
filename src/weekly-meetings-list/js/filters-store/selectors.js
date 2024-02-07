export const getFilters = (state) => {
	return state.items;
};

export const replaceFilter = (state, { uniqueId, index, filter }) => {
	const uniqueIdKey = `${uniqueId}`;

	// if (!(uniqueIdKey in state.items)) {
	return {
		...state,
		items: {
			...state.items,
			[uniqueIdKey]: uniqueIdKey,
		},
	};
};
