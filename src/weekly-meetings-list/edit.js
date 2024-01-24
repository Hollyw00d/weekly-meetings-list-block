import { useState, useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	store as blockStore,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { byString } from "sort-es";
import parse from "html-react-parser";
import domify from "domify";
import Utilities from "./js/utilities";
import Filters from "./js/components/filters";
import FilterNotifications from "./js/components/filterNotifications";
import "./js/filters-store";
import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const [filtersArrNoDupes, setFiltersArrNoDupes] = useState([""]);

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

	const utilities = new Utilities();

	const groupInfoHeadingToHtml = parse(groupInfoHeading);

	const childBlocks = useSelect(
		(select) => select(blockStore).getBlocksByClientId(clientId)[0].innerBlocks
	);

	const tableTitleChange = (val) => {
		setAttributes({ tableTitle: val });
	};

	const isEditPage = true;

	const filtersArr = useSelect((select) => {
		const store = select("weekly-meetings-list/filters");
		if (!store) {
			return null;
		}

		return store.getFilters();
	});

	useEffect(() => {
		let isArray = Array.isArray(childBlocks);
		let newCitiesArr = [];
		let newGroupTypesArr = [];
		let additionalGroupTypesArr = [];

		if (isArray) {
			childBlocks.map((child) => {
				newCitiesArr.push(child.attributes.city);
				newGroupTypesArr.push(child.attributes.locationGroupType);
			});

			childBlocks.map((child) => {
				newGroupTypesArr.push(child.attributes.accessGroupType);
			});

			childBlocks.map((child) => {
				newGroupTypesArr.push(child.attributes.genderGroupType);
			});

			childBlocks.map((child) => {
				additionalGroupTypesArr.push(child.attributes.additionalGroupType);
			});

			const toSetCities = new Set(newCitiesArr);
			const newCitiesArrNoDupes = [...toSetCities];
			const citiesArrSorted = newCitiesArrNoDupes.sort(byString());
			setAttributes({ citiesArr: citiesArrSorted });

			const toSetAdditionalGroups = new Set(additionalGroupTypesArr);
			const additionalGroupsNoDupes = [...toSetAdditionalGroups];
			const additionalGroupsSorted = additionalGroupsNoDupes.sort(byString());
			const additionalGroupsClean = additionalGroupsSorted.filter(Boolean);

			const toSetGroupTypes = new Set(newGroupTypesArr);
			const newGroupTypesNoDupes = [...toSetGroupTypes];
			const groupTypesArrClean = newGroupTypesNoDupes.filter(Boolean);

			const finalGroupTypesClean = [
				...groupTypesArrClean,
				...additionalGroupsClean,
			];

			setAttributes({ groupTypesArr: finalGroupTypesClean });

			setFiltersArrNoDupes(utilities.removeDupesFromArr(filtersArr));

			console.log("filtersArr");
			console.log(filtersArr);
		}
	}, [childBlocks, filtersArr]);

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title="Table Title">
					<TextControl
						label="Example: 'Seattle Book Club'"
						value={tableTitle}
						onChange={tableTitleChange}
					/>
				</PanelBody>
			</InspectorControls>
			<Filters
				citiesArr={citiesArr}
				groupTypesArr={groupTypesArr}
				isEditPage={isEditPage}
			/>
			{/* <table>
				<caption>TEST</caption>
				{childBlocks.map((item) => {
					let tr = parse(item.originalContent);
					return <>{tr}</>;
				})}
			</table>

			{childBlocks.map((item, i) => {
				let tr = domify(item.originalContent);
				tr.setAttribute("data-blah", "blah");
				console.log("tr");
				console.log(tr);
				return <p>{i}</p>;
			})} */}

			<table>
				<caption className="table-title">
					<h2>
						{tableTitle}
						<FilterNotifications />
					</h2>
					<button className="print">
						Print Meeting Schedule
						<br />
						(ONLY WORKS ON LIVE PAGE)
					</button>
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
				<tbody
					className={
						filtersArrNoDupes.length === 1
							? `original-data`
							: `original-data hide`
					}
					colspan="6"
				>
					<InnerBlocks
						allowedBlocks={["create-block/meetings-table-row-block"]}
					/>
				</tbody>
				{filtersArrNoDupes.length > 1 ? (
					<tbody class="copied-data"></tbody>
				) : (
					<></>
				)}
				{null}
			</table>
		</div>
	);
}
