export const getFilters = (state) => {
	return state.items;
};

export const replaceFilter = (state, { uniqueId, index, filter }) => {
	if (state.items.length > index) {
		return {
			...state,
			items: [
				...state.items.slice(0, index),
				filter,
				...state.items.slice(index + 1),
			],
		};
	}

	return state;
};
