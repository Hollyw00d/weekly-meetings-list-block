import parse from "html-react-parser";
import domify from "domify";

export default function FilteredTableRows({ filtersArr, childBlocks }) {
	// console.log("filtersArr");
	// console.log(filtersArr);

	// console.log("childBlocks");
	// console.log(childBlocks);

	return (
		<tbody class="copied-data" colspan="6">
			{childBlocks.map((item) => {
				let tr = parse(item.originalContent);
				return <>{tr}</>;
			})}
		</tbody>
	);
}
