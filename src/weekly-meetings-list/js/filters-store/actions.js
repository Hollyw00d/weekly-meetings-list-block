import { UPDATE_FILTER } from "./types";

export const updateFilter = (filter, index) => {
	return {
		type: UPDATE_FILTER,
		index,
		filter,
	};
};
