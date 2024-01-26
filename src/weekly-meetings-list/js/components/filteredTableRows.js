import parse from "html-react-parser";
import domify from "domify";

export default function FilteredTableRows({ filtersArr, childBlocks }) {
	const newTbody = document.createElement("tbody");
	newTbody.classList.add("copied-data");

	let tableRowsDom = [];
	childBlocks.map((item, i) => {
		let order = i + 1;
		let trDom = domify(item.originalContent);
		trDom.setAttribute("data-original-order", order);
		tableRowsDom.push(trDom);
	});

	tableRowsDom.map((row) => {
		newTbody.appendChild(row);
	});

	const newTbodyJsx = parse(newTbody.innerHTML);

	return (
		<tbody class="copied-data" colspan="6">
			{newTbodyJsx}
		</tbody>
	);
}
