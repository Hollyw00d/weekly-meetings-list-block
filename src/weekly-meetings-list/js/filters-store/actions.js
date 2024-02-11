import { UPDATE_FILTER } from "./types";

export const replaceFilter = (uniqueId, index, filters) => {
	return {
		type: UPDATE_FILTER,
		uniqueId,
		index,
		filters,
	};
};
