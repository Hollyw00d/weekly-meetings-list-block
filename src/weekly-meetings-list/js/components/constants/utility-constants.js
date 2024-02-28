const parentBlockClassName = "wp-block-create-block-meetings-table-block";

export default {
	parentBlockClassName,
	filterWrapperClassName: `${parentBlockClassName}__filters__wrapper`,
	selectTagClass: {
		dayOfWeekClassName: "day-of-week-filter",
		cityClassName: "city-filter",
		groupTypeClassName: "group-type-filter",
		startTimeClassName: "start-time-filter",
	},
};
