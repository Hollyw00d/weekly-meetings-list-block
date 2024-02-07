import { UPDATE_FILTER, OUTPUT_FILTERS } from "./types";

const DEFAULT_STATE = {
	items: {},
};

const DEFAULT_FILTERS = ["", "", "", ""];

const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case UPDATE_FILTER:
			const { uniqueId, index, filter } = action;

			const uniqueIdKey = `${uniqueId}_filters`;

			// if (!(uniqueIdKey in state.items)) {
			return {
				...state,
				items: {
					...state.items,
					[uniqueIdKey]: [
						...DEFAULT_FILTERS.slice(0, index),
						filter,
						...DEFAULT_FILTERS.slice(index + 1),
					],
				},
			};
		case OUTPUT_FILTERS:
			return state;
		default:
			return state;
	}
};

export default reducer;
