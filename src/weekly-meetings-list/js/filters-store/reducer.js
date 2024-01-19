import { UPDATE_FILTER, OUTPUT_FILTERS } from "./types";

const DEFAULT_STATE = {
	items: ["", "", "", ""],
};

const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case UPDATE_FILTER:
			const { index, val } = action.payload;
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
		case OUTPUT_FILTERS:
			return state;
		default:
			return state;
	}
};

export default reducer;
