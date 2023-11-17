import { RichText } from "@wordpress/block-editor";
import Utilities from "../utilities";

export default function GroupInfoEdit({
	setAttributes,
	locationGroupType,
	remoteMtgInfo,
	inPersonMtgInfo,
}) {
	const utilities = new Utilities();
	const locationGroupTypeClean = utilities.removeStrPrefix(locationGroupType);

	const remoteMtgInfoChange = (val) => {
		setAttributes({ remoteMtgInfo: val });
	};

	const inPersonMtgInfoChange = (val) => {
		setAttributes({ inPersonMtgInfo: val });
	};

	let setLocationGroupTypeInfo = <></>;

	function RemoteMtgTag() {
		return (
			<>
				<p>
					<strong>Remote Meeting Information</strong>
				</p>
				<RichText
					tagName="p"
					value={remoteMtgInfo}
					onChange={remoteMtgInfoChange}
				/>
			</>
		);
	}

	function InPersonMtgTag() {
		return (
			<>
				<p>
					<strong>In-Person Meeting Information</strong>
				</p>
				<RichText
					tagName="p"
					value={inPersonMtgInfo}
					onChange={inPersonMtgInfoChange}
				/>
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
		case "In-Person":
			setLocationGroupTypeInfo = (
				<>
					<InPersonMtgTag />
				</>
			);
	}

	return setLocationGroupTypeInfo;
}
