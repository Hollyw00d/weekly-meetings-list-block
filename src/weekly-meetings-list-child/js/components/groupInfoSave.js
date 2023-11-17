import { RichText } from "@wordpress/block-editor";
import Utilities from "../utilities";

export default function GroupInfoSave({
	locationGroupType,
	remoteMtgInfo,
	inPersonMtgInfo,
}) {
	const utilities = new Utilities();
	const locationGroupTypeClean = utilities.removeStrPrefix(locationGroupType);
	let setLocationGroupTypeInfo = <></>;

	function RemoteMtgTag() {
		return (
			<>
				{remoteMtgInfo.length > 0 ? (
					<>
						<p>
							<strong>Remote Meeting Information</strong>
						</p>
						<RichText.Content tagName="p" value={remoteMtgInfo} />
					</>
				) : null}
			</>
		);
	}

	function InPersonMtgTag() {
		return (
			<>
				{inPersonMtgInfo.length > 0 ? (
					<>
						<p>
							<strong>In-Person Meeting Information</strong>
						</p>
						<RichText.Content tagName="p" value={inPersonMtgInfo} />
					</>
				) : null}
			</>
		);
	}

	switch (locationGroupTypeClean) {
		case "Remote":
			setLocationGroupTypeInfo = (
				<>
					<RemoteMtgTag />
				</>
			);
			break;
		case "Hybrid (remote & in-person)":
			setLocationGroupTypeInfo = (
				<>
					<RemoteMtgTag />
					<InPersonMtgTag />
				</>
			);
			break;
		case "In-person":
			setLocationGroupTypeInfo = (
				<>
					<InPersonMtgTag />
				</>
			);
	}

	return setLocationGroupTypeInfo;
}
