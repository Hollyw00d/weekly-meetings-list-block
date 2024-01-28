import { UPDATE_FILTER } from "./types";

export const replaceFilter = (index, filter) => {
	return {
		type: UPDATE_FILTER,
		index,
		filter,
	};
};
