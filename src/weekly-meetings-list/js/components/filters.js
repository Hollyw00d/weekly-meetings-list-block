import Utilities from "../../../weekly-meetings-list-child/js/utilities";

export default function Filters({ citiesArr, groupTypesArr, isEditPage }) {
	const utilities = new Utilities();
	const daysArr = utilities.generateDaysArr();

	let isCitiesArray = Array.isArray(citiesArr);
	let cities = null;

	let isGroupTypeArr = Array.isArray(groupTypesArr);
	let groupTypes = null;

	let editorMsg = <></>;

	if (isCitiesArray && citiesArr.length > 0) {
		cities = citiesArr.map((item) => {
			return <option value={item}>{item}</option>;
		});
	}

	if (isGroupTypeArr && groupTypesArr.length > 0) {
		groupTypes = groupTypesArr.map((item) => {
			let itemClean = utilities.removeStrPrefix(item);

			return <option value={item}>{itemClean}</option>;
		});
	}

	if (isEditPage) {
		editorMsg = (
			<div class="editing-locked-msg hide">
				<h2>Meeting Edits are Locked while using Filters (Drop-Downs)!</h2>
				<p>
					To edit meetings again change all drop-downs to the first options to
					show all all meetings, including:
				</p>
				<ul>
					<li>Show All Days of Week</li>
					<li>Show All Cities</li>
					<li>etc.</li>
				</ul>
			</div>
		);
	}

	return (
		<div className="wp-block-create-block-meetings-table-block__filters__wrapper">
			{editorMsg}
			<div className="wp-block-create-block-meetings-table-block__filters">
				<label>
					<div>Day of Week:</div>
					<div>
						<select className="day-of-week-filter" name="days of week">
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
						<select className="city-filter" name="cities">
							<option value="">Show All Cities</option>
							{cities}
						</select>
					</div>
				</label>

				<label>
					<div>Group Type:</div>
					<div>
						<select className="group-type-filter" name="group types">
							<option value="">Show All Group Types</option>
							{groupTypes}
						</select>
					</div>
				</label>

				<label>
					<div>Meeting Start Time:</div>
					<div>
						<select className="start-time-filter" name="meeting start times">
							<option value="">Show All Meetings Times</option>
							<option value="asc~">Show Earliest to Latest Meetings</option>
							<option value="desc~">Show Latest to Earliest Meetings</option>
						</select>
					</div>
				</label>

				<div>
					<button className="wp-block-create-block-meetings-table-block_reset-btn">
						Reset
					</button>
				</div>
			</div>
		</div>
	);
}
