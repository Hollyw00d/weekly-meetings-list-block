/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";
import Utilities from "./js/utilities";
import GroupTypes from "./js/components/groupTypes";
import MeetingTimes from "./js/components/meetingTimes";
import parentJson from "../weekly-meetings-list/block.json";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function Save({ attributes }) {
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
	const capitalizedDay = utilities.convertToCapitalDay(day);
	const parentJsonHeadingAttrs = utilities.parentJsonHeadingAttrs(parentJson);
	const { dayOfWeekHeading } = parentJsonHeadingAttrs;
	const { timeHeading } = parentJsonHeadingAttrs;
	const { cityHeading } = parentJsonHeadingAttrs;
	const { groupTypeHeading } = parentJsonHeadingAttrs;
	const { meetingNameHeading } = parentJsonHeadingAttrs;
	const { groupInfoHeading } = parentJsonHeadingAttrs;

	return (
		<tr
			{...useBlockProps.save()}
			data-filter-day={day}
			data-filter-city={city}
			data-location-group-type={locationGroupType}
			data-access-group-type={accessGroupType}
			data-gender-group-type={genderGroupType}
			data-additional-group-type={additionalGroupType}
			data-start-time={mtgStartTime}
		>
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
				<RichText.Content
					tagName="p"
					value={remoteMtgInfo}
					className={`remote-mtg-info ${remoteMtgInfoClass}`}
				/>

				<p className={inPersonMtgInfoClass}>
					<strong>In-Person Meeting Information</strong>
				</p>
				<RichText.Content
					tagName="p"
					value={inPersonMtgInfo}
					className={`in-person-mtg-info ${inPersonMtgInfoClass}`}
				/>

				<p>
					<strong>Contact Information</strong>
				</p>
				<RichText.Content
					tagName="p"
					value={contactInfo}
					className="contact-info"
				/>

				<p className={moreDetailsClass}>
					<strong>More Details</strong>
				</p>
				<RichText.Content
					tagName="p"
					value={moreDetails}
					className={`more-details ${moreDetailsClass}`}
				/>
			</td>
		</tr>
	);
}
