import Utilities from "./js/utilities";
const utilities = new Utilities();
utilities.filterEvents("wp-block-create-block-meetings-table-block");

const printBtns = document.querySelectorAll(
	".wp-block-create-block-meetings-table-block button.print"
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
