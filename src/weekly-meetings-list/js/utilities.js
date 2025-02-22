import { byValue, byString, byNumber } from "sort-es";
import utilityConstants from "./components/constants/utility-constants";

export default class Utilities {
	filterEvents(parentElemsClassName) {
		const parentElems = document.getElementsByClassName(parentElemsClassName);

		if (parentElems.length === 0) {
			return;
		}

		const parentElemsArr = [...parentElems];

		parentElemsArr.forEach((parentElem) => {
			const table = parentElem.getElementsByTagName("table");
			const currentTbody = parentElem.getElementsByTagName("tbody");
			const currentTableRows = parentElem
				.getElementsByTagName("tbody")[0]
				.getElementsByTagName("tr");
			const filtersWrapper = parentElem.getElementsByClassName(
				`${parentElemsClassName}__filters__wrapper`
			);

			const { startTimeClassName } = utilityConstants.selectTagClass;
			let selectTagFilters = parentElem.getElementsByTagName("select");
			const resetBtn = parentElem.getElementsByClassName(
				"wp-block-create-block-meetings-table-block_reset-btn"
			)[0];

			resetBtn.addEventListener("click", (e) => {
				const btnClicked = e.target;
				const parentElemsClassName = utilityConstants.parentBlockClassName;

				this.resetBtnEvents(
					btnClicked,
					parentElemsClassName,
					selectTagFilters,
					currentTbody
				);
			});

			[...selectTagFilters].forEach((select) => {
				select.addEventListener("change", (e) => {
					const selectedElem = e.target;
					const filterClassName = selectedElem.className;
					const filterClassNameArr = filterClassName.split(" ");
					const filterClassNameClean = filterClassNameArr[0].trim();
					const parentElemsSelectorClass = `.${parentElemsClassName}`;
					const parentElem = selectedElem.closest(parentElemsSelectorClass);

					this.filterEventsLoop(
						selectedElem,
						filterClassNameClean,
						parentElemsClassName,
						parentElem,
						startTimeClassName,
						table,
						currentTbody,
						currentTableRows,
						filtersWrapper
					);
				});
			});
		});
	}

	filterEventsLoop(
		selectedElem,
		filterClassNameClean,
		parentElemsClassName,
		parentElem,
		startTimeClassName,
		table,
		currentTbody,
		currentTableRows,
		filtersWrapper
	) {
		let onStartTimeFilter = false;

		switch (filterClassNameClean) {
			case startTimeClassName:
				onStartTimeFilter = true;
				let getNewTbody = table[0].getElementsByClassName("copied-data");

				if (getNewTbody.length === 0) {
					this.setupFilterHandler(table, currentTbody, currentTableRows);
				}

				let selectTagFilters2 = parentElem.getElementsByTagName("select");

				this.showHideFilter(
					parentElemsClassName,
					parentElem,
					currentTbody,
					filtersWrapper,
					selectedElem,
					onStartTimeFilter
				);

				this.filterNotification(selectedElem, selectTagFilters2);
				return;
			default:
				onStartTimeFilter = false;
				const getNewTbody2 = table[0].getElementsByClassName("copied-data");

				if (getNewTbody2.length === 0) {
					this.setupFilterHandler(table, currentTbody, currentTableRows);
				}

				let selectTagFilters3 = parentElem.getElementsByTagName("select");

				this.showHideFilter(
					parentElemsClassName,
					parentElem,
					currentTbody,
					filtersWrapper,
					selectedElem,
					onStartTimeFilter
				);

				this.filterNotification(selectedElem, selectTagFilters3);
				return;
		}
	}

	setupFilterHandler(table, currentTbody, currentTableRows) {
		if (!currentTbody[0].classList.contains("hide")) {
			currentTbody[0].classList.add("hide");
		}

		const newTbodyCheck =
			table[0].getElementsByClassName("copied-data") ?? null;

		if (newTbodyCheck.length > 0) {
			newTbodyCheck.remove();
		}

		const newTbody = document.createElement("tbody");
		newTbody.classList.add("copied-data");

		if (newTbody.classList.contains("hide")) {
			newTbody.classList.remove("hide");
		}

		if (this.isElemEmpty(newTbody)) {
			[...currentTableRows].forEach((tr, i) => {
				const origOrder = i + 1;
				const trClone = tr.cloneNode(true);
				trClone.setAttribute("data-original-order", origOrder);
				newTbody.appendChild(trClone);
			});

			table[0].appendChild(newTbody);
		}
	}

	showHideFilter(
		parentElemsClassName,
		parentElem,
		currentTbody,
		filtersWrapper,
		selectedElem,
		onStartTimeFilter
	) {
		const getNewTbody = parentElem.getElementsByClassName("copied-data");
		const newTbodyRows = getNewTbody[0].getElementsByTagName("tr");
		const newTbodyRowsArr = [...newTbodyRows];

		let selectTagFilters = parentElem.getElementsByTagName("select");

		let { filtersArr } = this.filtersArr(selectTagFilters);
		let { optionsTagValues } = this.filtersArr(selectTagFilters);

		// Show ONLY `select.start-time-filter` filter
		if (onStartTimeFilter) {
			if (filtersArr.length === 1 && filtersArr[0] === "") {
				this.filterResetHandler(getNewTbody, currentTbody);
				return;
			} else {
				this.sortTimeFilter(parentElemsClassName, selectedElem, filtersWrapper);
			}

			return;
		}
		// No filter active, or show ALL meetings
		else if (filtersArr.length === 1 && filtersArr[0] === "") {
			this.filterResetHandler(getNewTbody, currentTbody);
			return;
		}
		// Show meetings with filters EXCLUDING `select.start-time-filter` filter
		else {
			newTbodyRowsArr.forEach((tr) => {
				let selectTagFilterStr = JSON.stringify(optionsTagValues);
				let dayVal = tr.getAttribute("data-filter-day");
				let cityVal = tr.getAttribute("data-filter-city");
				let groupTypeVal = null;

				switch (true) {
					case selectTagFilterStr.indexOf("location~") !== -1:
						groupTypeVal = tr.getAttribute("data-location-group-type");
						break;
					case selectTagFilterStr.indexOf("access~") !== -1:
						groupTypeVal = tr.getAttribute("data-access-group-type");
						break;
					case selectTagFilterStr.indexOf("gender~") !== -1:
						groupTypeVal = tr.getAttribute("data-gender-group-type");
						break;
					default:
						groupTypeVal = tr.getAttribute("data-additional-group-type");
						break;
				}

				let dataSetArr = [dayVal, cityVal, groupTypeVal];

				let dataSetArrMatched = [];
				let optionsTagValuesMatched = [];

				dataSetArr.forEach((val, i) => {
					if (optionsTagValues[i] !== "") {
						dataSetArrMatched.push(val);
						optionsTagValuesMatched.push(optionsTagValues[i]);
					}
				});

				const dataSetArrJson = JSON.stringify(dataSetArrMatched);
				const optionsTagValuesJson = JSON.stringify(optionsTagValuesMatched);

				if (dataSetArrJson === optionsTagValuesJson) {
					tr.classList.remove("hide");
				} else {
					tr.classList.add("hide");
				}
			});

			const getNewTbody2 = parentElem.querySelector("tbody.copied-data");
			this.alternateRowColor(getNewTbody2);
		}
	}

	sortTimeFilter(parentElemsClassName, selectedElem) {
		const parentElemsSelectorClass = `.${parentElemsClassName}`;
		const getParentElem = selectedElem.closest(parentElemsSelectorClass);
		const getNewTbody =
			getParentElem.querySelector("tbody.copied-data") ?? null;

		if (!getNewTbody) {
			return;
		}

		const newTbodyRows = getNewTbody.querySelectorAll("tr");
		const selectVal = selectedElem.value;
		const rowsArr = Array.from(newTbodyRows);

		if (selectVal === "asc~") {
			let sortedTimeAscArr = rowsArr.sort(
				byValue((i) => i.getAttribute("data-start-time"), byString())
			);

			this.emptyElem(getNewTbody);
			getNewTbody.append(...sortedTimeAscArr);
		} else if (selectVal === "desc~") {
			let sortedTimeDescArr = rowsArr.sort(
				byValue(
					(i) => i.getAttribute("data-start-time"),
					byString({ desc: true })
				)
			);

			this.emptyElem(getNewTbody);
			getNewTbody.append(...sortedTimeDescArr);
		} else {
			let originalSortedTime = rowsArr.sort(
				byValue(
					(i) => Number(i.getAttribute("data-original-order")),
					byNumber()
				)
			);
			this.emptyElem(getNewTbody);
			getNewTbody.append(...originalSortedTime);
		}

		const getNewTbody3 = getParentElem.querySelector("tbody.copied-data");
		this.alternateRowColor(getNewTbody3);
	}

	filtersArr(selectTagFilters) {
		let optionsTagValues = [];
		let optionsTagText = [];

		[...selectTagFilters].forEach((elem) => {
			let val = elem.options[elem.selectedIndex].value;
			let text = elem.options[elem.selectedIndex].text;
			optionsTagValues.push(val);
			optionsTagText.push(text);
		});

		const filtersToSet = new Set(optionsTagValues);
		const filtersArr = [...filtersToSet];

		const optionsTagTextSet = new Set(optionsTagText);
		const optionsTagTextNewArr = [...optionsTagTextSet];
		optionsTagText = optionsTagTextNewArr.filter(Boolean);

		return { filtersArr, optionsTagValues, optionsTagText };
	}

	filterResetHandler(getNewTbody, currentTbody) {
		getNewTbody[0].remove();
		currentTbody[0].classList.remove("hide");
	}

	alternateRowColor(getNewTbody) {
		const newTbodyRows = getNewTbody.querySelectorAll("tr:not(.hide)");

		newTbodyRows.forEach((tr, i) => {
			tr.classList.remove("bg-light-gray");
			tr.classList.remove("bg-white");

			if (i % 2 === 0) {
				tr.classList.add("bg-light-gray");
				return;
			}

			tr.classList.add("bg-white");
		});
	}

	filterNotification(target, selectTagFilters) {
		const parentElem = target.closest(
			`.${utilityConstants.parentBlockClassName}`
		);

		const trOriginal = parentElem.querySelectorAll("tbody.original-data tr");

		const tbodyRowsShown = parentElem.querySelectorAll(
			"tbody.copied-data tr:not(.hide)"
		);

		const notification = parentElem.querySelector(".notification") ?? null;
		const { filtersArr } = this.filtersArr(selectTagFilters);
		const { optionsTagValues } = this.filtersArr(selectTagFilters);
		const { optionsTagText } = this.filtersArr(selectTagFilters);
		const optionsTagTextSelected = [];
		let filtersStr = null;

		switch (true) {
			case filtersArr.length === 1 && filtersArr[0] === "":
				if (notification) {
					notification.textContent = `Showing All ${trOriginal.length} Meeting(s)`;
				}

				return;
			case tbodyRowsShown.length === 0:
				filtersStr = this.selectedFilterArr(
					optionsTagValues,
					optionsTagText,
					optionsTagTextSelected
				);

				if (notification) {
					notification.innerHTML = `Showing ${tbodyRowsShown.length} Meeting(s) when filter(s) selected:<br />${filtersStr}`;
				}
				return;
			default:
				filtersStr = this.selectedFilterArr(
					optionsTagValues,
					optionsTagText,
					optionsTagTextSelected
				);

				if (notification) {
					notification.innerHTML = `Showing ${tbodyRowsShown.length} Meeting(s) when filter(s) selected:<br />${filtersStr}`;
				}
		}
	}

	resetBtnEvents(
		btnClicked,
		parentElemsClassName,
		selectTagFilters,
		currentTbody
	) {
		const btnParent = btnClicked.closest(`.${parentElemsClassName}`);
		const trOriginal = btnParent
			.getElementsByClassName("original-data")[0]
			.getElementsByTagName("tr");
		const newTbody = btnParent.getElementsByClassName("copied-data");

		if (newTbody.length === 0) {
			return;
		}

		[...selectTagFilters].forEach((elem) => {
			elem.value = "";
		});

		const notification = btnParent.getElementsByClassName("notification");

		if (notification.length > 0) {
			notification[0].textContent = `Showing All ${trOriginal.length} Meeting(s)`;
		}
		newTbody[0].remove();
		currentTbody[0].classList.remove("hide");
	}

	isElemEmpty(elem) {
		if (elem.childNodes.length === 0) {
			return true;
		}
		return false;
	}

	emptyElem(elem) {
		elem.textContent = "";
	}

	selectedFilterArr(optionsTagValues, optionsTagText, optionsTagTextSelected) {
		optionsTagValues.map((val, i) => {
			if (val !== "") {
				optionsTagTextSelected.push(optionsTagText[i]);
			}
		});

		const textJoined = optionsTagTextSelected.join(", ");
		return textJoined;
	}

	removeDupesFromArr(arr) {
		const toSet = new Set(arr);
		return [...toSet];
	}

	// START: used in view.js ONLY
	onPrintEvents(btns, showPrintClass, hidePrintClass) {

		btns.forEach((btn) => {
			if(!this.isChromeOrEdge() && !this.isMobileOrTablet()) {
				btn.textContent = `${btn.textContent} (disabled *)`;
				const div = document.createElement('div');
				div.classList.add('print-btn-disabled-notice');
				div.setAttribute('role', 'alert');
				div.setAttribute('aria-live', 'polite');
				div.innerHTML = '* The meeting schedule print button does not work in your browser. Please use <a href="https://www.google.com/chrome/" target="_blank">Chrome</a> or <a href="https://www.microsoft.com/edge/download" target="_blank">Edge</a> browsers instead.';
				btn.insertAdjacentElement("afterend", div);
				return;
			}

			btn.addEventListener("click", (e) => {
				const allElems = document.querySelectorAll("*");
				this.hideAllElemsOnPrint(allElems);

				const currentBtn = e.target;
				const table = currentBtn.closest("table");

				currentBtn.classList.remove(
					"wp-block-create-block-meetings-table-block_show-print"
				);
				currentBtn.classList.add(
					"wp-block-create-block-meetings-table-block_hide-print"
				);

				this.updateParentElemClasses(
					currentBtn,
					showPrintClass,
					hidePrintClass
				);

				const tableChildElems = this.getAllDescendants(table);

				if (!tableChildElems) {
					return;
				}

				tableChildElems.forEach((child) => {
					if (child.classList) {
						child.classList.remove(
							"wp-block-create-block-meetings-table-block_hide-print"
						);
						child.classList.add(
							"wp-block-create-block-meetings-table-block_show-print"
						);
					}
				});

				window.print();
			});
		});
	}

	hideAllElemsOnPrint(allElems) {
		allElems.forEach((elem) => {
			const nodeTag = elem.nodeName.toUpperCase();

			if (nodeTag !== "HTML") {
				elem.classList.remove(
					"wp-block-create-block-meetings-table-block_show-print"
				);
				elem.classList.add(
					"wp-block-create-block-meetings-table-block_hide-print"
				);
			}
		});
	}

	updateParentElemClasses(elem, addClass, removeClass) {
		let getParent = elem.parentNode;
		getParent.classList.add(addClass);
		getParent.classList.remove(removeClass);
		let parentNodeName = getParent.nodeName.toUpperCase();

		while (parentNodeName) {
			if (parentNodeName === "BODY" || !parentNodeName) {
				break;
			}

			getParent = getParent.parentNode;
			getParent.classList.add(addClass);
			getParent.classList.remove(removeClass);
			parentNodeName = getParent?.nodeName.toUpperCase();
		}
	}

	exitPrintEvents(showPrintClass, hidePrintClass) {
		if(!this.isChromeOrEdge() && !this.isMobileOrTablet()) return;

		function afterPrint() {
			const printableElemsArr = Array.from(
				document.getElementsByClassName(showPrintClass)
			);
			const notPrintableElemsArr = Array.from(
				document.getElementsByClassName(hidePrintClass)
			);

			const elems = [...printableElemsArr, ...notPrintableElemsArr];

			elems.forEach((elem) => {
				elem.classList.remove(showPrintClass);
				elem.classList.remove(hidePrintClass);
			});
		}

		const mediaQueryList = window.matchMedia("print");

		mediaQueryList.addListener(function (e) {
			if (!e.matches) {
				afterPrint();
			}
		});
	}

	getAllDescendants(elem) {
		if (!elem) {
			return;
		}

		let arr = [];

		function getDescendants(elem) {
			for (var i = 0; i < elem.childNodes.length; i++) {
				let child = elem.childNodes[i];
				getDescendants(child);
				arr.push(child);
			}
		}
		getDescendants(elem);

		return arr;
	}

	// If Chrome or Edge browser return true
	isChromeOrEdge() {
		const userAgent = navigator.userAgent.toLowerCase();
		const isChrome = userAgent.includes('chrome') && !userAgent.includes('edg');
		const isEdge = userAgent.includes('edg');

		return isChrome || isEdge;
	}

	isMobileOrTablet() {
		const userAgent = navigator.userAgent.toLowerCase();
		const isAndroid = userAgent.includes('android');
		const isAppleMobileOrTablet = /iphone|ipad|ipod/.test(userAgent);
		const isMobile = /mobile/.test(userAgent);
		return isAndroid || isAppleMobileOrTablet || isMobile;
	}
	// END: used in view.js ONLY
}
