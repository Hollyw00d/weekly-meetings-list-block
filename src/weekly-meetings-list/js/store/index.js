// Redux-like store using WP Data API
import { createReduxStore, register } from "@wordpress/data";

const storeName = "filter-values";
const updateFiltersType = "UPDATE_FILTERS";
const outputFiltersType = "OUTPUT_FILTERS";

const initialState = {
	filters: ["", "", "", ""],
};

const actions = {
	updateFilters: (newItem) => ({
		type: updateFiltersType,
		payload: newItem,
	}),
	outputFilters: () => ({
		type: outputFiltersType,
	}),
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case updateFiltersType:
			const { idx, val } = action.payload;
			if (state.items.length > idx) {
				return {
					...state,
					items: [
						...state.items.slice(0, idx),
						val,
						...state.items.slice(idx + 1),
					],
				};
			}
			return state;
		case outputFiltersType:
			return state;
		default:
			return state;
	}
};

const store = createReduxStore(storeName, {
	reducer,
	actions,
});

register(store);

export default store;
