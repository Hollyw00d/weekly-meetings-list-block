export const getFilters = (state) => {
	return state.items;
};

export const replaceFilter = (state, { index, val }) => {
	if (state.items.length > index) {
		return {
			...state,
			items: [
				...state.items.slice(0, index),
				val,
				...state.items.slice(index + 1),
			],
		};
	}
	return state;
};
