/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/weekly-meetings-list/js/components/constants/utility-constants.js":
/*!*******************************************************************************!*\
  !*** ./src/weekly-meetings-list/js/components/constants/utility-constants.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const parentBlockClassName = "wp-block-create-block-meetings-table-block";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  parentBlockClassName,
  filterWrapperClassName: `${parentBlockClassName}__filters__wrapper`,
  selectTagClass: {
    dayOfWeekClassName: "day-of-week-filter",
    cityClassName: "city-filter",
    groupTypeClassName: "group-type-filter",
    startTimeClassName: "start-time-filter"
  }
});

/***/ }),

/***/ "./src/weekly-meetings-list/js/utilities.js":
/*!**************************************************!*\
  !*** ./src/weekly-meetings-list/js/utilities.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Utilities)
/* harmony export */ });
/* harmony import */ var sort_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sort-es */ "./node_modules/sort-es/lib/index.esm.js");
/* harmony import */ var _components_constants_utility_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/constants/utility-constants */ "./src/weekly-meetings-list/js/components/constants/utility-constants.js");


class Utilities {
  filterEvents(parentElemsClassName) {
    const parentElems = document.getElementsByClassName(parentElemsClassName);
    if (parentElems.length === 0) {
      return;
    }
    const parentElemsArr = [...parentElems];
    parentElemsArr.forEach(parentElem => {
      const table = parentElem.querySelector("table");
      const currentTbody = table.querySelector("tbody");
      const currentTableRows = currentTbody.querySelectorAll("tr");
      const filtersWrapper = parentElem.querySelector(`.${parentElemsClassName}__filters__wrapper`);
      const {
        dayOfWeekClassName
      } = _components_constants_utility_constants__WEBPACK_IMPORTED_MODULE_0__["default"].selectTagClass;
      const {
        cityClassName
      } = _components_constants_utility_constants__WEBPACK_IMPORTED_MODULE_0__["default"].selectTagClass;
      const {
        groupTypeClassName
      } = _components_constants_utility_constants__WEBPACK_IMPORTED_MODULE_0__["default"].selectTagClass;
      const {
        startTimeClassName
      } = _components_constants_utility_constants__WEBPACK_IMPORTED_MODULE_0__["default"].selectTagClass;
      let selectTagFilters = this.getSelectTagFilters(parentElem, dayOfWeekClassName, cityClassName, groupTypeClassName, startTimeClassName);
      this.resetFilters(parentElem, selectTagFilters, currentTbody);
      this.selectTagFilterEvents(parentElemsClassName, selectTagFilters, dayOfWeekClassName, cityClassName, groupTypeClassName, startTimeClassName, table, currentTbody, currentTableRows, filtersWrapper);
    });
  }
  selectTagFilterEvents(parentElemsClassName, selectTagFilters, dayOfWeekClassName, cityClassName, groupTypeClassName, startTimeClassName, table, currentTbody, currentTableRows, filtersWrapper) {
    selectTagFilters.forEach(select => {
      select.addEventListener("change", e => {
        var _table$querySelector, _table$querySelector2;
        const selectedElem = e.target;
        const filterClassName = selectedElem.className;
        const filterClassNameArr = filterClassName.split(" ");
        const filterClassNameClean = filterClassNameArr[0].trim();
        const parentElemsSelectorClass = `.${parentElemsClassName}`;
        const parentElem = selectedElem.closest(parentElemsSelectorClass);
        let onStartTimeFilter = false;
        switch (filterClassNameClean) {
          case startTimeClassName:
            onStartTimeFilter = true;
            let getNewTbody = (_table$querySelector = table.querySelector("tbody.copied-data")) !== null && _table$querySelector !== void 0 ? _table$querySelector : null;
            if (!getNewTbody) {
              this.setupFilterHandler(table, currentTbody, currentTableRows);
            }
            let selectTagFilters2 = this.getSelectTagFilters(parentElem, dayOfWeekClassName, cityClassName, groupTypeClassName, startTimeClassName);
            this.showHideFilter(parentElemsClassName, parentElem, dayOfWeekClassName, cityClassName, groupTypeClassName, startTimeClassName, currentTbody, filtersWrapper, selectedElem, onStartTimeFilter);
            this.filterNotification(selectedElem, selectTagFilters2);
            return;
          default:
            onStartTimeFilter = false;
            const getNewTbody2 = (_table$querySelector2 = table.querySelector("tbody.copied-data")) !== null && _table$querySelector2 !== void 0 ? _table$querySelector2 : null;
            if (!getNewTbody2) {
              this.setupFilterHandler(table, currentTbody, currentTableRows);
            }
            let selectTagFilters3 = this.getSelectTagFilters(parentElem, dayOfWeekClassName, cityClassName, groupTypeClassName, startTimeClassName);
            this.showHideFilter(parentElemsClassName, parentElem, dayOfWeekClassName, cityClassName, groupTypeClassName, startTimeClassName, currentTbody, filtersWrapper, selectedElem, onStartTimeFilter);
            this.filterNotification(selectedElem, selectTagFilters3);
            return;
        }
      });
    });
  }
  setupFilterHandler(table, currentTbody, currentTableRows) {
    var _table$querySelector3;
    if (!currentTbody.classList.contains("hide")) {
      currentTbody.classList.add("hide");
    }
    const newTbodyCheck = (_table$querySelector3 = table.querySelector("tbody.copied-data")) !== null && _table$querySelector3 !== void 0 ? _table$querySelector3 : null;
    if (newTbodyCheck) {
      newTbodyCheck.remove();
    }
    const newTbody = document.createElement("tbody");
    newTbody.classList.add("copied-data");
    if (newTbody.classList.contains("hide")) {
      newTbody.classList.remove("hide");
    }
    if (this.isElemEmpty(newTbody)) {
      currentTableRows.forEach(tr => {
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
  showHideFilter(parentElemsClassName, parentElem, dayOfWeekClassName, cityClassName, groupTypeClassName, startTimeClassName, currentTbody, filtersWrapper, selectedElem, onStartTimeFilter) {
    const getNewTbody = parentElem.querySelector("tbody.copied-data");
    const newTbodyRows = getNewTbody.querySelectorAll("tr");
    let selectTagFilters = this.getSelectTagFilters(parentElem, dayOfWeekClassName, cityClassName, groupTypeClassName, startTimeClassName);
    let {
      filtersArr
    } = this.filtersArr(selectTagFilters);
    let {
      optionsTagValues
    } = this.filtersArr(selectTagFilters);

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
      newTbodyRows.forEach(tr => {
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
    var _getParentElem$queryS;
    const parentElemsSelectorClass = `.${parentElemsClassName}`;
    const getParentElem = selectedElem.closest(parentElemsSelectorClass);
    const getNewTbody = (_getParentElem$queryS = getParentElem.querySelector("tbody.copied-data")) !== null && _getParentElem$queryS !== void 0 ? _getParentElem$queryS : null;
    if (!getNewTbody) {
      return;
    }
    const newTbodyRows = getNewTbody.querySelectorAll("tr");
    const selectVal = selectedElem.value;
    const rowsArr = Array.from(newTbodyRows);
    if (selectVal === "asc~") {
      let sortedTimeAscArr = rowsArr.sort((0,sort_es__WEBPACK_IMPORTED_MODULE_1__.byValue)(i => i.getAttribute("data-start-time"), (0,sort_es__WEBPACK_IMPORTED_MODULE_1__.byString)()));
      this.emptyElem(getNewTbody);
      getNewTbody.append(...sortedTimeAscArr);
    } else if (selectVal === "desc~") {
      let sortedTimeDescArr = rowsArr.sort((0,sort_es__WEBPACK_IMPORTED_MODULE_1__.byValue)(i => i.getAttribute("data-start-time"), (0,sort_es__WEBPACK_IMPORTED_MODULE_1__.byString)({
        desc: true
      })));
      this.emptyElem(getNewTbody);
      getNewTbody.append(...sortedTimeDescArr);
    } else {
      let originalSortedTime = rowsArr.sort((0,sort_es__WEBPACK_IMPORTED_MODULE_1__.byValue)(i => Number(i.getAttribute("data-original-order")), (0,sort_es__WEBPACK_IMPORTED_MODULE_1__.byNumber)()));
      this.emptyElem(getNewTbody);
      getNewTbody.append(...originalSortedTime);
    }
    const getNewTbody3 = getParentElem.querySelector("tbody.copied-data");
    this.alternateRowColor(getNewTbody3);
  }
  filtersArr(selectTagFilters) {
    let optionsTagValues = [];
    let optionsTagText = [];
    selectTagFilters.forEach(elem => {
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
    return {
      filtersArr,
      optionsTagValues,
      optionsTagText
    };
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
  getSelectTagFilters(parentElem, dayOfWeekClassName, cityClassName, groupTypeClassName, startTimeClassName) {
    const getSelectTagFilters = [parentElem.querySelector(`select.${dayOfWeekClassName}`), parentElem.querySelector(`select.${cityClassName}`), parentElem.querySelector(`select.${groupTypeClassName}`), parentElem.querySelector(`select.${startTimeClassName}`)];
    return getSelectTagFilters;
  }
  filterNotification(target, selectTagFilters) {
    var _parentElem$querySele;
    const parentElem = target.closest(`.${_components_constants_utility_constants__WEBPACK_IMPORTED_MODULE_0__["default"].parentBlockClassName}`);
    const tbodyRowsOriginalData = parentElem.querySelectorAll("tbody.original-data tr");
    const tbodyRowsShown = parentElem.querySelectorAll("tbody.copied-data tr:not(.hide)");
    const notification = (_parentElem$querySele = parentElem.querySelector(".notification")) !== null && _parentElem$querySele !== void 0 ? _parentElem$querySele : null;
    const {
      filtersArr
    } = this.filtersArr(selectTagFilters);
    const {
      optionsTagValues
    } = this.filtersArr(selectTagFilters);
    const {
      optionsTagText
    } = this.filtersArr(selectTagFilters);
    const optionsTagTextSelected = [];
    let filtersStr = null;
    switch (true) {
      case filtersArr.length === 1 && filtersArr[0] === "":
        if (notification) {
          notification.textContent = `Showing All ${tbodyRowsOriginalData.length} Meeting(s)`;
        }
        return;
      case tbodyRowsShown.length === 0:
        filtersStr = this.selectedFilterArr(optionsTagValues, optionsTagText, optionsTagTextSelected);
        if (notification) {
          notification.innerHTML = `Showing ${tbodyRowsShown.length} Meeting(s) when filter(s) selected:<br />${filtersStr}`;
        }
        return;
      default:
        filtersStr = this.selectedFilterArr(optionsTagValues, optionsTagText, optionsTagTextSelected);
        if (notification) {
          notification.innerHTML = `Showing ${tbodyRowsShown.length} Meeting(s) when filter(s) selected:<br />${filtersStr}`;
        }
    }
  }
  resetFilters(parentElem, selectTagFilters, currentTbody) {
    const resetBtn = parentElem.querySelector(".wp-block-create-block-meetings-table-block_reset-btn");
    resetBtn.addEventListener("click", e => {
      var _btnParent$querySelec, _parentElem$querySele2;
      const btnClicked = e.target;
      const btnParent = btnClicked.closest(`.${_components_constants_utility_constants__WEBPACK_IMPORTED_MODULE_0__["default"].parentBlockClassName}`);
      const tbodyRowsOriginalData = parentElem.querySelectorAll("tbody.original-data tr");
      const newTbody = (_btnParent$querySelec = btnParent.querySelector("table tbody.copied-data")) !== null && _btnParent$querySelec !== void 0 ? _btnParent$querySelec : null;
      const filtersWrapper = btnParent.querySelector(".wp-block-create-block-meetings-table-block__filters__wrapper");
      if (!newTbody) {
        return;
      }
      selectTagFilters.forEach(elem => {
        elem.value = "";
      });
      const notification = (_parentElem$querySele2 = parentElem.querySelector(".notification")) !== null && _parentElem$querySele2 !== void 0 ? _parentElem$querySele2 : null;
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

  // START: used in view.js ONLY
  onPrintEvents(btns, showPrintClass, hidePrintClass) {
    btns.forEach(btn => {
      btn.addEventListener("click", e => {
        const allElems = document.querySelectorAll("*");
        this.hideAllElemsOnPrint(allElems);
        const currentBtn = e.target;
        const table = currentBtn.closest("table");
        currentBtn.classList.remove("wp-block-create-block-meetings-table-block_show-print");
        currentBtn.classList.add("wp-block-create-block-meetings-table-block_hide-print");
        this.updateParentElemClasses(currentBtn, showPrintClass, hidePrintClass);
        const tableChildElems = this.getAllDescendants(table);
        if (!tableChildElems) {
          return;
        }
        tableChildElems.forEach(child => {
          if (child.classList) {
            child.classList.remove("wp-block-create-block-meetings-table-block_hide-print");
            child.classList.add("wp-block-create-block-meetings-table-block_show-print");
          }
        });
        window.print();
      });
    });
  }
  hideAllElemsOnPrint(allElems) {
    allElems.forEach(elem => {
      const nodeTag = elem.nodeName.toUpperCase();
      if (nodeTag !== "HTML") {
        elem.classList.remove("wp-block-create-block-meetings-table-block_show-print");
        elem.classList.add("wp-block-create-block-meetings-table-block_hide-print");
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
      const printableElemsArr = Array.from(document.getElementsByClassName(showPrintClass));
      const notPrintableElemsArr = Array.from(document.getElementsByClassName(hidePrintClass));
      const elems = [...printableElemsArr, ...notPrintableElemsArr];
      elems.forEach(elem => {
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
  // END: used in view.js ONLY
}

/***/ }),

/***/ "./node_modules/sort-es/lib/index.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/sort-es/lib/index.esm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncArray: () => (/* binding */ AsyncArray),
/* harmony export */   byAny: () => (/* binding */ byAny),
/* harmony export */   byBoolean: () => (/* binding */ byBoolean),
/* harmony export */   byDate: () => (/* binding */ byDate),
/* harmony export */   byNumber: () => (/* binding */ byNumber),
/* harmony export */   byString: () => (/* binding */ byString),
/* harmony export */   byValue: () => (/* binding */ byValue),
/* harmony export */   byValues: () => (/* binding */ byValues),
/* harmony export */   "default": () => (/* binding */ index),
/* harmony export */   sortAsync: () => (/* binding */ sortAsync)
/* harmony export */ });
const getSorter = (options) => options.desc ? (result) => result * -1 : (result) => result;

const parseDate = (date) => new Date(date);
const parseNullableDate = (date) => new Date(date || 0);
/**
 * the sortable for the date values
 * @param options sortable options for byDate
 *
 * {@link https://sort-es.netlify.app/by-date byDate docs}
 * @version 1.0.0
 */
const byDate = (options = {
    desc: false,
    nullable: false,
}) => {
    const sorter = getSorter(options);
    const parser = options.customParser || (options.nullable ? parseNullableDate : parseDate);
    return (first, second) => sorter(parser(first).getTime() - parser(second).getTime());
};

/**
 * the sortable to sort the **number primitive**
 * @param options the options to sort the numbers correctly
 *
 * {@link https://sort-es.netlify.app/by-number byNumber docs}
 * @version 1.0.0
 */
const byNumber = (options = { desc: false, nullable: false }) => {
    const sorter = getSorter(options);
    return (first, second) => options.nullable
        ? sorter((first || 0) - (second || 0) || 0)
        : sorter((first - second) || 0);
};

const fixString = (value, options) => {
    if (options.nullable)
        value = value || "";
    if (options.lowercase)
        value = value.toLowerCase();
    return value;
};
/**
 * the sortable to sort the **string primitive**
 * @param options the options to sort the strings correctly
 *
 * {@link https://sort-es.netlify.app/by-string byString docs}
 * @version 1.0.0
 */
const byString = (options = {
    desc: false,
    nullable: false,
    lowercase: false,
}) => {
    const sorter = getSorter(options);
    return (first, second) => sorter(fixString(first, options).localeCompare(fixString(second, options)));
};

function isNumber(v) {
    return typeof v === "number";
}
function isString(v) {
    return typeof v === "string";
}
function isDate(v) {
    return v instanceof Date;
}

const byAny = (options = { desc: false }) => {
    return (first, second) => {
        if (isNumber(first) && isNumber(second))
            return byNumber(options)(first, second);
        if (isString(first) && isString(second))
            return byString(options)(first, second);
        if (isDate(first) && isDate(second))
            return byDate(options)(first, second);
        throw new Error("incorrect types of the 2 parameters");
    };
};

function byValue(discriminator, sortFn) {
    if (typeof discriminator === "function") {
        return (first, second) => {
            const firstItem = discriminator(first);
            const secondItem = discriminator(second);
            return sortFn(firstItem, secondItem);
        };
    }
    return (first, second) => {
        const firstItem = first[discriminator];
        const secondItem = second[discriminator];
        return sortFn(firstItem, secondItem);
    };
}

/**
 * the sortable that allow you to sort an array of **complex object** by multiple properties
 * @param sorter the array to determine the strategy to sort the elements
 *
 * {@link https://sort-es.netlify.app/by-values byValues docs}
 * @version 1.2.0
 */
function byValues(sorter) {
    return (first, second) => {
        for (const [prop, sortableFn] of sorter) {
            if (!sortableFn)
                continue;
            let sortResult;
            if (typeof prop === "function") {
                sortResult = sortableFn(prop(first), prop(second));
            }
            else {
                console.log(`you're running a deprecated option, checkout https://sort-es.netlify.app/breaking-changes/ `);
                sortResult = sortableFn(first[prop], second[prop]);
            }
            if (sortResult !== 0)
                return sortResult;
        }
        return 0;
    };
}

/**
 * the sortable for the boolean values
 * @param options sortable options for byBoolean
 *
 * {@link https://sort-es.netlify.app/by-boolean byBoolean docs}
 * @version 1.3.0
 */
const byBoolean = (options = { desc: false }) => {
    const sorter = getSorter(options);
    return (first, second) => sorter(Number(second || false) - Number(first || false));
};

/**
 * the sortable for the async values
 * @param asyncItems the async items
 * @param sortFn the sortable to apply to the async items
 *
 * {@link https://sort-es.netlify.app/by-async sortAsync docs}
 * @version 1.0.0
 */
const sortAsync = async (asyncItems, sortFn) => {
    const items = await Promise.all(asyncItems);
    return items.sort(sortFn);
};
class AsyncArray extends Array {
    constructor(items) {
        super(...items);
    }
    sortAsync(sortFn) {
        return Promise.all(this).then((items) => items.sort(sortFn));
    }
}

var index = {
    byAny,
    byDate,
    byValue,
    byValues,
    byString,
    byNumber,
    sortAsync,
    byBoolean,
    AsyncArray,
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ./src/weekly-meetings-list/view.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/utilities */ "./src/weekly-meetings-list/js/utilities.js");
/* harmony import */ var _js_components_constants_utility_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/components/constants/utility-constants */ "./src/weekly-meetings-list/js/components/constants/utility-constants.js");


const utilities = new _js_utilities__WEBPACK_IMPORTED_MODULE_0__["default"]();
utilities.filterEvents(`${_js_components_constants_utility_constants__WEBPACK_IMPORTED_MODULE_1__["default"].parentBlockClassName}`);
const printBtns = document.querySelectorAll(`.${_js_components_constants_utility_constants__WEBPACK_IMPORTED_MODULE_1__["default"].parentBlockClassName}`);
utilities.onPrintEvents(printBtns, "show-print", "wp-block-create-block-meetings-table-block_hide-print");
utilities.exitPrintEvents("show-print", "wp-block-create-block-meetings-table-block_hide-print");
})();

/******/ })()
;
//# sourceMappingURL=view.js.map