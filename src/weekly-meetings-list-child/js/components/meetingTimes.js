import Utilities from "../utilities";

export default function MeetingTimes({ mtgStartTime, mtgEndTime }) {
	const utilities = new Utilities();
	const startTimeWithAmPm = utilities.convertToAmPm(mtgStartTime);
	const endTimeWithAmPm = utilities.convertToAmPm(mtgEndTime);

	return (
		<>
			{mtgStartTime ? (
				<>
					{startTimeWithAmPm}
					<br />
				</>
			) : null}
			{mtgEndTime ? (
				<>
					to
					<br />
					{endTimeWithAmPm}
				</>
			) : null}
		</>
	);
}
