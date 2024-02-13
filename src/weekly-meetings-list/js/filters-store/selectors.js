import Utilities from "../utilities";
const utilities = new Utilities();

export const getFilters = (state) => {
	return state.items;
};

export const replaceFilter = (state, { uniqueId, index, filters }) => {
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
};
