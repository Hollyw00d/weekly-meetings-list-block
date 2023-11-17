import Utilities from "../utilities";

export default function GroupTypes({
	locationGroupType,
	accessGroupType,
	genderGroupType,
	additionalGroupType,
}) {
	const utilities = new Utilities();
	const locationGroupTypeClean = utilities.removeStrPrefix(locationGroupType);
	const accessGroupTypeClean = utilities.removeStrPrefix(accessGroupType);
	const genderGroupTypeClean = utilities.removeStrPrefix(genderGroupType);

	if (
		locationGroupTypeClean.length > 0 ||
		accessGroupTypeClean.length > 0 ||
		genderGroupTypeClean.length > 0 ||
		additionalGroupType.length > 0
	) {
		return (
			<ul>
				{locationGroupTypeClean.length > 0 ? (
					<li>{locationGroupTypeClean}</li>
				) : null}
				{accessGroupTypeClean.length > 0 ? (
					<li>{accessGroupTypeClean}</li>
				) : null}
				{genderGroupTypeClean.length > 0 ? (
					<li>{genderGroupTypeClean}</li>
				) : null}
				{additionalGroupType.length > 0 ? <li>{additionalGroupType}</li> : null}
			</ul>
		);
	}
	return null;
}
