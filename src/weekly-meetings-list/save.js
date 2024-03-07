import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import "./editor.scss";
import Filters from "./js/components/filters";
import FilterNotifications from "./js/components/filterNotifications";
import parse from "html-react-parser";

export default function Save({ attributes }) {
	const {
		tableTitle,
		citiesArr,
		groupTypesArr,
		dayOfWeekHeading,
		timeHeading,
		cityHeading,
		groupTypeHeading,
		meetingNameHeading,
		groupInfoHeading,
	} = attributes;

	const groupInfoHeadingToHtml = parse(groupInfoHeading);
	const isEditPage = false;

	return (
		<div
			{...useBlockProps.save()}
			className="wp-block-create-block-meetings-table-block wp-block-create-block-meetings-table-block_save"
		>
			<Filters
				citiesArr={citiesArr}
				groupTypesArr={groupTypesArr}
				isEditPage={false}
			/>
			<table>
				<caption className="table-title">
					<h2>
						{tableTitle}
						<FilterNotifications />
					</h2>
					<button className="print">Print Meeting Schedule</button>
				</caption>
				<thead>
					<tr role="row">
						<th role="columnheader" scope="col">
							{dayOfWeekHeading}
						</th>
						<th role="columnheader" scope="col">
							{timeHeading}
						</th>
						<th role="columnheader" scope="col">
							{cityHeading}
						</th>
						<th role="columnheader" scope="col">
							{groupTypeHeading}
						</th>
						<th role="columnheader" scope="col">
							{meetingNameHeading}
						</th>
						<th role="columnheader" scope="col">
							{groupInfoHeadingToHtml}
						</th>
					</tr>
				</thead>
				<tbody className="original-data">
					<InnerBlocks.Content />
				</tbody>
			</table>
		</div>
	);
}
