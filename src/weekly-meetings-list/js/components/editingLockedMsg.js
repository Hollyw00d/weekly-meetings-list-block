export default function EditingLockedMsg() {
	return (
		<div className="editing-locked-msg hide">
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
