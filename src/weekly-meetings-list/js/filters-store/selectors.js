export const getFilters = (state) => {
	return state.items;
};

export const replaceFilter = (state, { uniqueId, index, filter }) => {
	const objectIdExists =
		state.items.find((obj) => obj.id === uniqueId) ?? false;

	// if (objectIdExists && state.items.length > index) {
	// 	return {
	// 		...state,
	// 		items: [
	// 			{
	// 				id: uniqueId,
	// 				arr: [

	// 				]
	// 			}
	// 		]
	// 	};
	// }

	// if (uniqueId && state.items.length > index) {
	// 	return {
	// 		...state,
	// 		items: [
	// 			...state.items.slice(0, index),
	// 			filter,
	// 			...state.items.slice(index + 1),
	// 		],
	// 	};
	// }
	return state;
};
