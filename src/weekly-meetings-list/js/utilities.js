import { byValue, byString, byNumber } from "sort-es";

export default class Utilities {
	filterEvents(parentElemsSelector, isEditor = true) {
		const parentElems = document.querySelectorAll(parentElemsSelector);

		if (parentElems.length === 0) {
			return;
		}

		parentElems.forEach((parentElem, i) => {
			const table = parentElem.querySelector("table");
			const currentTbody = parentElem.querySelector("tbody");
			const currentTableRows = parentElem.querySelectorAll("tbody tr");
			const filtersWrapper = parentElem.querySelector(
				".wp-block-create-block-meetings-table-block__filters__wrapper"
			);
			const editingLockedMsg =
				filtersWrapper.querySelector(".editing-locked-msg") ?? null;
			const innerBlockEditElem =
				parentElem.querySelector(".block-editor-inner-blocks") ?? null;

			const dayOfWeekClassName = "day-of-week-filter";
			const cityClassName = "city-filter";
			const groupTypeClassName = "group-type-filter";
			const startTimeClassName = "start-time-filter";

			if (!isEditor && editingLockedMsg) {
				editingLockedMsg.remove();
			}

			let selectTagFilters = this.getSelectTagFilters(
				parentElem,
				dayOfWeekClassName,
				cityClassName,
				groupTypeClassName,
				startTimeClassName
			);

			this.resetFilters(
				parentElem,
				selectTagFilters,
				currentTbody,
				innerBlockEditElem
			);

			document.body.addEventListener("change", (e) => {
				const filterClassName = e.target.className;
				let onStartTimeFilter = false;
				let selectedElem = e.target;

				switch (filterClassName) {
					case startTimeClassName:
						onStartTimeFilter = true;
						let getNewTbody = table.querySelector("tbody.copied-data") ?? null;

						if (!getNewTbody) {
							this.setupFilterHandler(table, currentTbody, currentTableRows);
						}

						let selectTagFilters2 = this.getSelectTagFilters(
							parentElem,
							dayOfWeekClassName,
							cityClassName,
							groupTypeClassName,
							startTimeClassName
						);

						this.showHideFilter(
							parentElemsSelector,
							parentElem,
							dayOfWeekClassName,
							cityClassName,
							groupTypeClassName,
							startTimeClassName,
							currentTbody,
							filtersWrapper,
							selectedElem,
							onStartTimeFilter
						);

						this.filterNotification(parentElem, selectTagFilters2);
						return;
					case dayOfWeekClassName:
					case cityClassName:
					case groupTypeClassName:
						onStartTimeFilter = false;
						const getNewTbody2 =
							table.querySelector("tbody.copied-data") ?? null;

						if (!getNewTbody2) {
							this.setupFilterHandler(table, currentTbody, currentTableRows);
						}

						let selectTagFilters3 = this.getSelectTagFilters(
							parentElem,
							dayOfWeekClassName,
							cityClassName,
							groupTypeClassName,
							startTimeClassName
						);

						this.showHideFilter(
							parentElemsSelector,
							parentElem,
							dayOfWeekClassName,
							cityClassName,
							groupTypeClassName,
							startTimeClassName,
							currentTbody,
							filtersWrapper,
							selectedElem,
							onStartTimeFilter
						);

						this.filterNotification(parentElem, selectTagFilters3);
						return;
				}
			});
		});
	}

	setupFilterHandler(table, currentTbody, currentTableRows) {
		if (!currentTbody.classList.contains("hide")) {
			currentTbody.classList.add("hide");
		}

		const newTbodyCheck = table.querySelector("tbody.copied-data") ?? null;

		if (newTbodyCheck) {
			newTbodyCheck.remove();
		}

		const newTbody = document.createElement("tbody");
		newTbody.classList.add("copied-data");

		if (newTbody.classList.contains("hide")) {
			newTbody.classList.remove("hide");
		}

		if (this.isElemEmpty(newTbody)) {
			currentTableRows.forEach((tr) => {
				const newTr = tr.cloneNode(true);
				newTbody.appendChild(newTr);
			});
			table.appendChild(newTbody);
		}

		const newTbodyRows = newTbody.querySelectorAll("tr");

		newTbodyRows.forEach((tr, i) => {
			const origOrder = i + 1;
			tr.setAttribute("data-original-order", origOrder);
		});
	}

	showHideFilter(
		parentElemsSelector,
		parentElem,
		dayOfWeekClassName,
		cityClassName,
		groupTypeClassName,
		startTimeClassName,
		currentTbody,
		filtersWrapper,
		selectedElem,
		onStartTimeFilter
	) {
		const getNewTbody = parentElem.querySelector("tbody.copied-data");
		const newTbodyRows = getNewTbody.querySelectorAll("tr");

		let selectTagFilters = this.getSelectTagFilters(
			parentElem,
			dayOfWeekClassName,
			cityClassName,
			groupTypeClassName,
			startTimeClassName
		);

		let { filtersArr } = this.filtersArr(selectTagFilters);
		let { optionsTagValues } = this.filtersArr(selectTagFilters);

		// Show ONLY `select.start-time-filter` filter
		if (onStartTimeFilter) {
			if (filtersArr.length === 1 && filtersArr[0] === "") {
				this.filterResetHandler(getNewTbody, currentTbody);
				this.toggleEditingLockedMsg(filtersWrapper, false);

				return;
			} else {
				this.sortTimeFilter(parentElemsSelector, selectedElem, filtersWrapper);
			}

			return;
		}
		// No filter active, or show ALL meetings
		else if (filtersArr.length === 1 && filtersArr[0] === "") {
			this.filterResetHandler(getNewTbody, currentTbody);
			this.toggleEditingLockedMsg(filtersWrapper, false);
			return;
		}
		// Show meetings with filters EXCLUDING `select.start-time-filter` filter
		else {
			newTbodyRows.forEach((tr) => {
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
			this.toggleEditingLockedMsg(filtersWrapper, true);
		}
	}

	sortTimeFilter(parentElemsSelector, selectedElem, filtersWrapper) {
		const getParentElem = selectedElem.closest(parentElemsSelector);

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
		this.toggleEditingLockedMsg(filtersWrapper, true);
	}

	filtersArr(selectTagFilters) {
		let optionsTagValues = [];
		let optionsTagText = [];

		selectTagFilters.forEach((elem) => {
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
		getNewTbody.remove();
		currentTbody.classList.remove("hide");
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

	toggleEditingLockedMsg(filtersWrapper, bool) {
		const editingLockedMsg = filtersWrapper.querySelector(
			".editing-locked-msg"
		);

		if (!filtersWrapper || !editingLockedMsg) {
			return;
		}

		if (bool) {
			if (editingLockedMsg.classList.contains("hide")) {
				editingLockedMsg.classList.remove("hide");
			}
			return;
		}

		editingLockedMsg.classList.add("hide");
	}

	getSelectTagFilters(
		parentElem,
		dayOfWeekClassName,
		cityClassName,
		groupTypeClassName,
		startTimeClassName
	) {
		const getSelectTagFilters = [
			parentElem.querySelector(`select.${dayOfWeekClassName}`),
			parentElem.querySelector(`select.${cityClassName}`),
			parentElem.querySelector(`select.${groupTypeClassName}`),
			parentElem.querySelector(`select.${startTimeClassName}`),
		];

		return getSelectTagFilters;
	}

	filterNotification(parentElem, selectTagFilters) {
		const tbodyRowsOriginalData = parentElem.querySelectorAll(
			"tbody.original-data tr"
		);

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
					notification.textContent = `Showing All ${tbodyRowsOriginalData.length} Meeting(s)`;
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
					notification.innerHTML = `Showing ${tbodyRowsShown.length} Meetings when filter(s) selected:<br />${filtersStr}`;
				}
		}
	}

	resetFilters(parentElem, selectTagFilters, currentTbody) {
		const resetBtn = parentElem.querySelector(
			".wp-block-create-block-meetings-table-block_reset-btn"
		);

		resetBtn.addEventListener("click", (e) => {
			const btnClicked = e.target;
			const btnParent = btnClicked.closest(
				".wp-block-create-block-meetings-table-block"
			);

			const tbodyRowsOriginalData = parentElem.querySelectorAll(
				"tbody.original-data tr"
			);
			const newTbody =
				btnParent.querySelector("table tbody.copied-data") ?? null;
			const filtersWrapper = btnParent.querySelector(
				".wp-block-create-block-meetings-table-block__filters__wrapper"
			);

			if (!newTbody) {
				return;
			}

			this.toggleEditingLockedMsg(filtersWrapper, false);

			selectTagFilters.forEach((elem) => {
				elem.value = "";
			});

			const notification = parentElem.querySelector(".notification") ?? null;

			if (notification) {
				notification.textContent = `Showing All ${tbodyRowsOriginalData.length} Meeting(s)`;
			}
			newTbody.remove();
			currentTbody.classList.remove("hide");
		});
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
		const setFromArr = new Set(arr);
		const newArr = [...setFromArr];
		return newArr;
	}

	arrayUniqueByKey(key, arr) {
		if (arr.length === 0) {
			return arr;
		}

		return [...new Map(arr.map((item) => [item[key], item])).values()];
	}

	filtersArrayByItemId(blockId, arr) {
		if (arr.length === 0) {
			return arr;
		}

		const findIndex = arr?.findIndex((item) => item.blockId === blockId);
		if (!findIndex) {
			return arr;
		}

		return findIndex;

		// const selectedItem = arr[findIndex];

		// return selectedItem;
	}

	// START: used in view.js ONLY
	onPrintEvents(btns, showPrintClass, hidePrintClass) {
		btns.forEach((btn) => {
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
		const afterPrint = function () {
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
		};

		const mediaQueryList = window.matchMedia("print");

		mediaQueryList.addListener(function (e) {
			if (!e.matches) {
				afterPrint();
			}
		});
	}

	getAllDescendants(node) {
		let arr = [];
		getDescendants(node);

		function getDescendants(node) {
			for (var i = 0; i < node.childNodes.length; i++) {
				let child = node.childNodes[i];
				getDescendants(child);
				arr.push(child);
			}
		}
		return arr;
	}
	// END: used in view.js ONLY
}
