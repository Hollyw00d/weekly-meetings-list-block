import Utilities from "./js/utilities";
import utilityConstants from "./js/components/constants/utility-constants";

const utilities = new Utilities();
utilities.filterEvents(`${utilityConstants.parentBlockClassName}`);

const printBtns = document.querySelectorAll(
	`.${utilityConstants.parentBlockClassName}`
);

utilities.onPrintEvents(
	printBtns,
	"show-print",
	"wp-block-create-block-meetings-table-block_hide-print"
);
utilities.exitPrintEvents(
	"show-print",
	"wp-block-create-block-meetings-table-block_hide-print"
);
