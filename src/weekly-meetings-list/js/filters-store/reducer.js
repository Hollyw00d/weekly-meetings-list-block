import { UPDATE_FILTER, OUTPUT_FILTERS } from "./types";
import Utilities from "../utilities";

const DEFAULT_STATE = {
	items: [],
};

const DEFAULT_FILTERS = [];
const utilities = new Utilities();

const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case UPDATE_FILTER:
			const { uniqueId, index, filters } = action;
			const timeStamp = Date.now();
			const getItems = [...state.items];

			getItems.push(...state.items, {
				blockId: uniqueId,
				timeStamp,
				filtersArray: [
					...DEFAULT_FILTERS.slice(0, index),
					...filters,
					...DEFAULT_FILTERS.slice(index + 1),
				],
			});

			const getItemsUniqueId = utilities.arrayUniqueByKey("blockId", getItems);

			return {
				...state,
				items: getItemsUniqueId,
			};
		case OUTPUT_FILTERS:
			return state;
		default:
			return state;
	}
};

export default reducer;
