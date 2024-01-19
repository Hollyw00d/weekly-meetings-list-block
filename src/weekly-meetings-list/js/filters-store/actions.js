import { UPDATE_FILTER } from "./types";

export const replaceFilter = (filter, index) => {
	return {
		type: UPDATE_FILTER,
		index,
		filter,
	};
};
