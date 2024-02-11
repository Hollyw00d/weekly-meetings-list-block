import { UPDATE_FILTER, OUTPUT_FILTERS } from "./types";

const DEFAULT_STATE = {
	items: [],
};

const DEFAULT_FILTERS = [];

const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case UPDATE_FILTER:
			const { uniqueId, index, filters } = action;
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
		case OUTPUT_FILTERS:
			return state;
		default:
			return state;
	}
};

export default reducer;
