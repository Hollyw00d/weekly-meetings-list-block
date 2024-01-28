import { UPDATE_FILTER } from "./types";

export const replaceFilter = (uniqueId, index, filter) => {
	return {
		type: UPDATE_FILTER,
		uniqueId,
		index,
		filter,
	};
};
