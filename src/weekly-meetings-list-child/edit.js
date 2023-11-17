import { useEffect } from "@wordpress/element";
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	SelectControl,
	TextControl,
	CheckboxControl,
} from "@wordpress/components";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import Utilities from "./js/utilities";
import GroupTypes from "./js/components/groupTypes";
import MeetingTimes from "./js/components/meetingTimes";
import parentJson from "../weekly-meetings-list/block.json";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const {
		day,
		mtgStartTime,
		mtgEndTime,
		city,
		locationGroupType,
		accessGroupType,
		genderGroupType,
		additionalGroupType,
		meetingName,
		remoteMtgInfo,
		remoteMtgInfoClass,
		inPersonMtgInfo,
		inPersonMtgInfoClass,
		contactInfo,
		showDetailsToggle,
		moreDetailsClass,
		moreDetails,
	} = attributes;

	const utilities = new Utilities();

	const daysArr = utilities.generateDaysArr();
	const capitalizedDay = utilities.convertToCapitalDay(day);

	const timeArr = utilities.generateTimesArr(5);
	const locationGroupTypesArr = utilities.locationGroupTypeArr();
	const accessGroupTypesArr = utilities.accessGroupTypeArr();
	const genderGroupTypesArr = utilities.genderGroupTypeArr();

	const parentJsonHeadingAttrs = utilities.parentJsonHeadingAttrs(parentJson);
	const { dayOfWeekHeading } = parentJsonHeadingAttrs;
	const { timeHeading } = parentJsonHeadingAttrs;
	const { cityHeading } = parentJsonHeadingAttrs;
	const { groupTypeHeading } = parentJsonHeadingAttrs;
	const { meetingNameHeading } = parentJsonHeadingAttrs;
	const { groupInfoHeading } = parentJsonHeadingAttrs;

	const dayChange = (val) => {
		setAttributes({ day: val });
	};

	const startOnHourChange = (val) => {
		setAttributes({ mtgStartTime: val });
	};

	const endOnHourChange = (val) => {
		setAttributes({ mtgEndTime: val });
	};

	const cityChange = (val) => {
		setAttributes({ city: val });
	};

	const locationGroupTypeChange = (val) => {
		setAttributes({ locationGroupType: val });
	};

	const accessGroupTypeChange = (val) => {
		setAttributes({ accessGroupType: val });
	};

	const genderGroupTypeChange = (val) => {
		setAttributes({ genderGroupType: val });
	};

	const additionalGroupTypeChange = (val) => {
		setAttributes({ additionalGroupType: val });
	};

	const meetingNameChange = (val) => {
		setAttributes({ meetingName: val });
	};

	const remoteMtgInfoChange = (val) => {
		setAttributes({ remoteMtgInfo: val });
	};

	const inPersonMtgInfoChange = (val) => {
		setAttributes({ inPersonMtgInfo: val });
	};

	const contactInfoChange = (val) => {
		setAttributes({ contactInfo: val });
	};

	const showDetailsToggleChange = () => {
		if (!showDetailsToggle) {
			setAttributes({ showDetailsToggle: true });
			setAttributes({ moreDetailsClass: "show" });
			return;
		}

		setAttributes({ showDetailsToggle: false });
		setAttributes({ moreDetailsClass: "hide" });
	};

	const moreDetailsChange = (val) => {
		setAttributes({ moreDetails: val });
	};

	useEffect(() => {
		const locationGroupTypeClean = utilities.removeStrPrefix(locationGroupType);

		switch (locationGroupTypeClean) {
			case "Remote":
				setAttributes({ remoteMtgInfoClass: "show" });
				setAttributes({ inPersonMtgInfoClass: "hide" });
				break;
			case "Hybrid (remote & in-person)":
				setAttributes({ remoteMtgInfoClass: "show" });
				setAttributes({ inPersonMtgInfoClass: "show" });
				break;
			case "In-Person":
				setAttributes({ remoteMtgInfoClass: "hide" });
				setAttributes({ inPersonMtgInfoClass: "show" });
		}
	}, [locationGroupType]);

	return (
		<tr
			{...useBlockProps()}
			data-filter-day={day}
			data-filter-city={city}
			data-location-group-type={locationGroupType}
			data-access-group-type={accessGroupType}
			data-gender-group-type={genderGroupType}
			data-additional-group-type={additionalGroupType}
			data-start-time={mtgStartTime}
		>
			<InspectorControls>
				<PanelBody title="Meeting Day of Week">
					<SelectControl
						label="Select Meeting Day of Week"
						value={day}
						options={daysArr}
						onChange={dayChange}
					></SelectControl>
				</PanelBody>
			</InspectorControls>

			<InspectorControls>
				<PanelBody title="Meeting Start Time">
					<SelectControl
						label="Select Meeting Start"
						value={mtgStartTime}
						options={timeArr}
						onChange={startOnHourChange}
					></SelectControl>
				</PanelBody>
			</InspectorControls>

			<InspectorControls>
				<PanelBody title="Meeting End Time">
					<SelectControl
						label="Select Meeting End"
						value={mtgEndTime}
						options={timeArr}
						onChange={endOnHourChange}
					></SelectControl>
				</PanelBody>
			</InspectorControls>

			<InspectorControls>
				<PanelBody title="Meeting City">
					<TextControl value={city} onChange={cityChange} />
				</PanelBody>
			</InspectorControls>

			<InspectorControls>
				<PanelBody title="Meeting Location Type">
					<SelectControl
						label="Select Meeting Location Type"
						value={locationGroupType}
						options={locationGroupTypesArr}
						onChange={locationGroupTypeChange}
					></SelectControl>
				</PanelBody>
			</InspectorControls>

			<InspectorControls>
				<PanelBody title="Meeting Access Type">
					<SelectControl
						label="Select Meeting Access Type"
						value={accessGroupType}
						options={accessGroupTypesArr}
						onChange={accessGroupTypeChange}
					></SelectControl>
				</PanelBody>
			</InspectorControls>

			<InspectorControls>
				<PanelBody title="Meeting Gender Type">
					<SelectControl
						label="Select Meeting Gender Type"
						value={genderGroupType}
						options={genderGroupTypesArr}
						onChange={genderGroupTypeChange}
					></SelectControl>
				</PanelBody>
			</InspectorControls>

			<InspectorControls>
				<PanelBody title="OPTIONAL: Additional Group Type">
					<TextControl
						label="Example: 'LGBTQIA' or 'Sexual Anorexia'"
						value={additionalGroupType}
						onChange={additionalGroupTypeChange}
					/>
				</PanelBody>
			</InspectorControls>

			<InspectorControls>
				<PanelBody title="Meeting Name">
					<TextControl value={meetingName} onChange={meetingNameChange} />
				</PanelBody>
			</InspectorControls>

			<InspectorControls>
				<PanelBody title="Show Meeting Details Editor? (toggle on to show optional 'More Details' field, like to add directions to enter building for in-person meeting)">
					<CheckboxControl
						label="Show Meeting Details Editor?"
						checked={showDetailsToggle}
						onChange={showDetailsToggleChange}
					/>
				</PanelBody>
			</InspectorControls>

			<td data-heading-label={dayOfWeekHeading}>{capitalizedDay}</td>
			<td data-heading-label={timeHeading}>
				<MeetingTimes mtgStartTime={mtgStartTime} mtgEndTime={mtgEndTime} />
			</td>
			<td data-heading-label={cityHeading}>{city}</td>
			<td data-heading-label={groupTypeHeading}>
				<GroupTypes
					locationGroupType={locationGroupType}
					accessGroupType={accessGroupType}
					genderGroupType={genderGroupType}
					additionalGroupType={additionalGroupType}
				/>
			</td>
			<td data-heading-label={meetingNameHeading}>{meetingName}</td>
			<td data-heading-label={groupInfoHeading}>
				<p className={remoteMtgInfoClass}>
					<strong>Remote Meeting Information</strong>
				</p>
				<RichText
					tagName="p"
					value={remoteMtgInfo}
					onChange={remoteMtgInfoChange}
					className={`remote-mtg-info ${remoteMtgInfoClass}`}
					placeholder="Add Remote Meeting Information here"
				/>

				<p className={inPersonMtgInfoClass}>
					<strong>In-Person Meeting Information</strong>
				</p>
				<RichText
					tagName="p"
					value={inPersonMtgInfo}
					onChange={inPersonMtgInfoChange}
					className={`in-person-mtg-info ${inPersonMtgInfoClass}`}
					placeholder="Add In-Person Meeting Information here"
				/>

				<p>
					<strong>Contact Information</strong>
				</p>
				<RichText
					tagName="p"
					value={contactInfo}
					onChange={contactInfoChange}
					className="contact-info"
					placeholder="Add Contact Information for the Meeting here"
				/>

				<p className={moreDetailsClass}>
					<strong>More Details</strong>
				</p>
				<RichText
					tagName="p"
					value={moreDetails}
					onChange={moreDetailsChange}
					className={`more-details ${moreDetailsClass}`}
					placeholder="Add More Details for meeting here (like instructions for where to find in-person meeting in building)"
				/>
			</td>
		</tr>
	);
}
