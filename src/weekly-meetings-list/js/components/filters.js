import ParentBlockUtilities from "../utilities";
import ChildBlockUtilities from "../../../weekly-meetings-list-child/js/utilities";
import utilityConstants from "./constants/utility-constants";
import EditingLockedMsg from "./editingLockedMsg";

export default function Filters({ citiesArr, groupTypesArr, isEditPage }) {
	const parentBlockUtilities = new ParentBlockUtilities();
	const childBlockUtilities = new ChildBlockUtilities();
	const daysArr = childBlockUtilities.generateDaysArr();

	let isCitiesArray = Array.isArray(citiesArr);
	let cities = null;

	let isGroupTypeArr = Array.isArray(groupTypesArr);
	let groupTypes = null;

	const parentElemsClassName = utilityConstants.parentBlockClassName;

	if (isCitiesArray && citiesArr.length > 0) {
		cities = citiesArr.map((item) => {
			return <option value={item}>{item}</option>;
		});
	}

	if (isGroupTypeArr && groupTypesArr.length > 0) {
		groupTypes = groupTypesArr.map((item) => {
			let itemClean = childBlockUtilities.removeStrPrefix(item);

			return <option value={item}>{itemClean}</option>;
		});
	}

	const filterEvent = (e) => {
		let filtersArr = [];

		const selectedElem = e.target;
		const filterClassName = selectedElem.className;
		const filterClassNameArr = filterClassName.split(" ");
		const filterClassNameClean = filterClassNameArr[0].trim();
		const parentElem = e.target.closest(`.${parentElemsClassName}`);
		const table = parentElem.getElementsByTagName("table");
		const currentTbody = parentElem.getElementsByTagName("tbody");
		const currentTableRows = parentElem
			.getElementsByTagName("tbody")[0]
			.getElementsByTagName("tr");
		const filtersWrapper = parentElem.getElementsByClassName(
			`${parentElemsClassName}__filters__wrapper`
		);
		const filterSelectTags = parentElem.getElementsByTagName("select");
		const editingLockedMsg =
			parentElem.getElementsByClassName("editing-locked-msg");

		const { startTimeClassName } = utilityConstants.selectTagClass;

		[...filterSelectTags].forEach((select) => {
			const { value } = select;
			filtersArr.push(value);
		});

		const filtersArrNoDupes =
			parentBlockUtilities.removeDupesFromArr(filtersArr);

		if (filtersArrNoDupes.length < 2) {
			editingLockedMsg[0].classList.add("hide");
		} else {
			editingLockedMsg[0].classList.remove("hide");
		}

		parentBlockUtilities.filterEventsLoop(
			selectedElem,
			filterClassNameClean,
			parentElemsClassName,
			parentElem,
			startTimeClassName,
			table,
			currentTbody,
			currentTableRows,
			filtersWrapper
		);
	};

	const resetBtnEvent = (e) => {
		const btnClicked = e.target;
		const parentElem = e.target.closest(`.${parentElemsClassName}`);
		const selectTagFilters =
			parentBlockUtilities.getSelectTagFilters(parentElem);
		const currentTbody = parentElem.getElementsByTagName("tbody");
		const editingLockedMsg =
			parentElem.getElementsByClassName("editing-locked-msg");

		editingLockedMsg[0].classList.add("hide");

		parentBlockUtilities.resetBtnEvents(
			btnClicked,
			parentElemsClassName,
			selectTagFilters,
			currentTbody
		);
	};

	return (
		<div className="wp-block-create-block-meetings-table-block__filters__wrapper">
			{isEditPage ? <EditingLockedMsg /> : null}

			<div className="wp-block-create-block-meetings-table-block__filters">
				<label>
					<div>Day of Week:</div>
					<div>
						<select
							className="day-of-week-filter"
							name="days of week"
							onChange={filterEvent}
						>
							{daysArr.map((item) => {
								let val = item.value;
								let label = item.label;

								if (val === "") {
									return (
										<option key="0_choose_item" value={val}>
											Show All Days of Week
										</option>
									);
								}
								return (
									<option key={val} value={val}>
										{label}
									</option>
								);
							})}
						</select>
					</div>
				</label>

				<label>
					<div>Meeting City:</div>
					<div>
						<select
							className="city-filter"
							name="cities"
							onChange={filterEvent}
						>
							<option value="">Show All Cities</option>
							{cities}
						</select>
					</div>
				</label>

				<label>
					<div>Group Type:</div>
					<div>
						<select
							className="group-type-filter"
							name="group types"
							onChange={filterEvent}
						>
							<option value="">Show All Group Types</option>
							{groupTypes}
						</select>
					</div>
				</label>

				<label>
					<div>Meeting Start Time:</div>
					<div>
						<select
							className="start-time-filter"
							name="meeting start times"
							onChange={filterEvent}
						>
							<option value="">Show All Meetings Times</option>
							<option value="asc~">Show Earliest to Latest Meetings</option>
							<option value="desc~">Show Latest to Earliest Meetings</option>
						</select>
					</div>
				</label>

				<div>
					<button
						className="wp-block-create-block-meetings-table-block_reset-btn"
						onClick={resetBtnEvent}
					>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
}
