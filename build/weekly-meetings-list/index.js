/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/weekly-meetings-list-child/js/utilities.js":
/*!********************************************************!*\
  !*** ./src/weekly-meetings-list-child/js/utilities.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Utilities)
/* harmony export */ });
/* harmony import */ var strip_dom_tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! strip-dom-tags */ "./node_modules/strip-dom-tags/index.js");
/* harmony import */ var strip_dom_tags__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(strip_dom_tags__WEBPACK_IMPORTED_MODULE_0__);

class Utilities {
  convertToCapitalDay(dayStr) {
    const firstLetter = dayStr.charAt(2);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = dayStr.slice(3);
    const capitalizedWord = firstLetterCap + remainingLetters;
    return capitalizedWord;
  }
  generateDaysArr() {
    let daysArr = [{
      value: "",
      label: "Choose day"
    }];
    const numDays = 7;
    const allDaysArr = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    for (let i = 0; i < numDays; i++) {
      let numWithDay = `${i + 1}_${allDaysArr[i]}`;
      const capitalizedDay = this.convertToCapitalDay(numWithDay);
      daysArr.push({
        value: numWithDay,
        label: capitalizedDay
      });
    }
    return daysArr;
  }
  convertToAmPm(timeStr) {
    const convertToNum = Number(timeStr.slice(0, 2));
    let newTimeStr = null;
    const [am, pm] = ["AM", "PM"];
    switch (true) {
      case convertToNum === 0:
        newTimeStr = `12${timeStr.slice(2)} ${am}`;
        return newTimeStr;
      case convertToNum > 0 && convertToNum < 12:
        newTimeStr = `${convertToNum}${timeStr.slice(2)} ${am}`;
        return newTimeStr;
      case convertToNum === 12:
        newTimeStr = `12${timeStr.slice(2)} ${pm}`;
        return newTimeStr;
      case convertToNum > 12:
        let newNum = convertToNum - 12;
        newTimeStr = `${newNum}${timeStr.slice(2)} ${pm}`;
        return newTimeStr;
      default:
        return "";
    }
  }
  generateTimesArr(minInterval) {
    let timesArr = [{
      value: "",
      label: "Choose time"
    }]; // time array
    let startTime = 0; // start time

    // loop to increment the time and push results in array
    for (let i = 0; startTime < 24 * 60; i++) {
      let hh = Math.floor(startTime / 60); // getting hours of day in 0-24 format, 2 digits
      let mm = startTime % 60; // getting minutes of the hour in 0-55 format, 2 digits
      let currentHr = String(hh).length === 1 ? "0" + hh : hh;
      let timeNoAmPm = currentHr + ":" + ("0" + mm).slice(-2);
      let timeWithAmPm = this.convertToAmPm(timeNoAmPm);
      timesArr.push({
        value: timeNoAmPm,
        label: timeWithAmPm
      });
      startTime += minInterval;
    }
    return timesArr;
  }
  blockDropdown(groupTypeArr, addGroupTypesArr, strPrefix) {
    for (let i = 0; i < addGroupTypesArr.length; i++) {
      let label = addGroupTypesArr[i];
      let value = `${strPrefix}${label}`;
      groupTypeArr.push({
        value,
        label
      });
    }
    return groupTypeArr;
  }
  locationGroupTypeArr() {
    let groupTypeArr = [{
      value: "",
      label: "Choose meeting location type"
    }];
    let addGroupTypesArr = ["Remote", "Hybrid (remote & in-person)", "In-Person"];
    let strPrefix = "location~";
    let newGroupTypeArr = this.blockDropdown(groupTypeArr, addGroupTypesArr, strPrefix);
    return newGroupTypeArr;
  }
  accessGroupTypeArr() {
    let groupTypeArr = [{
      value: "",
      label: "Choose meeting access type"
    }];
    let addGroupTypesArr = ["Open (visitors welcome)", "Closed (only open to those seeking help)"];
    let strPrefix = "access~";
    let newGroupTypeArr = this.blockDropdown(groupTypeArr, addGroupTypesArr, strPrefix);
    return newGroupTypeArr;
  }
  genderGroupTypeArr() {
    let groupTypeArr = [{
      value: "",
      label: "Choose meeting gender type"
    }];
    let addGroupTypesArr = ["Mixed (all genders)", "Women", "Men"];
    let strPrefix = "gender~";
    let newGroupTypeArr = this.blockDropdown(groupTypeArr, addGroupTypesArr, strPrefix);
    return newGroupTypeArr;
  }
  removeStrPrefix(str) {
    const strIdx = str.indexOf("~") + 1;
    const subStr = str.slice(strIdx);
    return subStr;
  }
  htmlToString(str) {
    let newStr = str.replaceAll("<br />", " ");
    newStr = strip_dom_tags__WEBPACK_IMPORTED_MODULE_0___default()(newStr);
    return newStr;
  }
  parentJsonHeadingAttrs(parentJson) {
    const {
      attributes
    } = parentJson;
    const dayOfWeekHeading = this.htmlToString(attributes?.dayOfWeekHeading?.default);
    const timeHeading = this.htmlToString(attributes?.timeHeading?.default);
    const cityHeading = this.htmlToString(attributes?.cityHeading?.default);
    const groupTypeHeading = this.htmlToString(attributes?.groupTypeHeading?.default);
    const meetingNameHeading = this.htmlToString(attributes?.meetingNameHeading?.default);
    const groupInfoHeading = this.htmlToString(attributes?.groupInfoHeading?.default);
    return {
      dayOfWeekHeading,
      timeHeading,
      cityHeading,
      groupTypeHeading,
      meetingNameHeading,
      groupInfoHeading
    };
  }
}

/***/ }),

/***/ "./src/weekly-meetings-list/edit.js":
/*!******************************************!*\
  !*** ./src/weekly-meetings-list/edit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sort_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sort-es */ "./node_modules/sort-es/lib/index.esm.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/esm/index.mjs");
/* harmony import */ var _js_components_filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/components/filters */ "./src/weekly-meetings-list/js/components/filters.js");
/* harmony import */ var _js_components_filterNotifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/components/filterNotifications */ "./src/weekly-meetings-list/js/components/filterNotifications.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "./src/weekly-meetings-list/editor.scss");











function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    tableTitle,
    citiesArr,
    groupTypesArr,
    dayOfWeekHeading,
    timeHeading,
    cityHeading,
    groupTypeHeading,
    meetingNameHeading,
    groupInfoHeading
  } = attributes;
  const groupInfoHeadingToHtml = (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__["default"])(groupInfoHeading);
  const childBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store).getBlocksByClientId(clientId)[0].innerBlocks);
  const tableTitleChange = val => {
    setAttributes({
      tableTitle: val
    });
  };
  const filtersInfo = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const store = select("weekly-meetings-list/filters");
    if (!store) {
      return null;
    }
    return store.getFilters();
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let isArray = Array.isArray(childBlocks);
    let newCitiesArr = [];
    let newGroupTypesArr = [];
    let additionalGroupTypesArr = [];
    if (isArray) {
      childBlocks.map(child => {
        newCitiesArr.push(child.attributes.city);
        newGroupTypesArr.push(child.attributes.locationGroupType);
      });
      childBlocks.map(child => {
        newGroupTypesArr.push(child.attributes.accessGroupType);
      });
      childBlocks.map(child => {
        newGroupTypesArr.push(child.attributes.genderGroupType);
      });
      childBlocks.map(child => {
        additionalGroupTypesArr.push(child.attributes.additionalGroupType);
      });
      const toSetCities = new Set(newCitiesArr);
      const newCitiesArrNoDupes = [...toSetCities];
      const citiesArrSorted = newCitiesArrNoDupes.sort((0,sort_es__WEBPACK_IMPORTED_MODULE_9__.byString)());
      setAttributes({
        citiesArr: citiesArrSorted
      });
      const toSetAdditionalGroups = new Set(additionalGroupTypesArr);
      const additionalGroupsNoDupes = [...toSetAdditionalGroups];
      const additionalGroupsSorted = additionalGroupsNoDupes.sort((0,sort_es__WEBPACK_IMPORTED_MODULE_9__.byString)());
      const additionalGroupsClean = additionalGroupsSorted.filter(Boolean);
      const toSetGroupTypes = new Set(newGroupTypesArr);
      const newGroupTypesNoDupes = [...toSetGroupTypes];
      const groupTypesArrClean = newGroupTypesNoDupes.filter(Boolean);
      const finalGroupTypesClean = [...groupTypesArrClean, ...additionalGroupsClean];
      setAttributes({
        groupTypesArr: finalGroupTypesClean
      });
    }
  }, [childBlocks, filtersInfo]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Table Title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Example: 'Seattle Book Club'",
    value: tableTitle,
    onChange: tableTitleChange
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_js_components_filters__WEBPACK_IMPORTED_MODULE_6__["default"], {
    citiesArr: citiesArr,
    groupTypesArr: groupTypesArr
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("caption", {
    className: "table-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, tableTitle, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_js_components_filterNotifications__WEBPACK_IMPORTED_MODULE_7__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "print"
  }, "Print Meeting Schedule", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), "(ONLY WORKS ON LIVE PAGE)")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    role: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    role: "columnheader",
    scope: "col"
  }, dayOfWeekHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    role: "columnheader",
    scope: "col"
  }, timeHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    role: "columnheader",
    scope: "col"
  }, cityHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    role: "columnheader",
    scope: "col"
  }, groupTypeHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    role: "columnheader",
    scope: "col"
  }, meetingNameHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    role: "columnheader",
    scope: "col"
  }, groupInfoHeadingToHtml))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", {
    className: "original-data",
    colspan: "6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    allowedBlocks: ["create-block/meetings-table-row-block"]
  }))));
}

/***/ }),

/***/ "./src/weekly-meetings-list/index.js":
/*!*******************************************!*\
  !*** ./src/weekly-meetings-list/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/weekly-meetings-list/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/weekly-meetings-list/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/weekly-meetings-list/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/weekly-meetings-list/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/weekly-meetings-list/js/components/constants/utility-constants.js":
/*!*******************************************************************************!*\
  !*** ./src/weekly-meetings-list/js/components/constants/utility-constants.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const parentBlockClassName = "wp-block-create-block-meetings-table-block";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  parentBlockClassName,
  filterWrapperClassName: `${parentBlockClassName}__filters__wrapper`,
  selectTagClass: {
    startTimeClassName: "start-time-filter"
  }
});

/***/ }),

/***/ "./src/weekly-meetings-list/js/components/filterNotifications.js":
/*!***********************************************************************!*\
  !*** ./src/weekly-meetings-list/js/components/filterNotifications.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterNotifications)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function FilterNotifications() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "notification",
    role: "alert",
    "aria-live": "polite"
  });
}

/***/ }),

/***/ "./src/weekly-meetings-list/js/components/filters.js":
/*!***********************************************************!*\
  !*** ./src/weekly-meetings-list/js/components/filters.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Filters)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/weekly-meetings-list/js/utilities.js");
/* harmony import */ var _weekly_meetings_list_child_js_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../weekly-meetings-list-child/js/utilities */ "./src/weekly-meetings-list-child/js/utilities.js");
/* harmony import */ var _constants_utility_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/utility-constants */ "./src/weekly-meetings-list/js/components/constants/utility-constants.js");




function Filters({
  citiesArr,
  groupTypesArr
}) {
  const parentBlockUtilities = new _utilities__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const childBlockUtilities = new _weekly_meetings_list_child_js_utilities__WEBPACK_IMPORTED_MODULE_2__["default"]();
  const daysArr = childBlockUtilities.generateDaysArr();
  let isCitiesArray = Array.isArray(citiesArr);
  let cities = null;
  let isGroupTypeArr = Array.isArray(groupTypesArr);
  let groupTypes = null;
  if (isCitiesArray && citiesArr.length > 0) {
    cities = citiesArr.map(item => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: item
      }, item);
    });
  }
  if (isGroupTypeArr && groupTypesArr.length > 0) {
    groupTypes = groupTypesArr.map(item => {
      let itemClean = childBlockUtilities.removeStrPrefix(item);
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: item
      }, itemClean);
    });
  }
  const filterEvent = e => {
    let filtersArr = [];
    const parentElemsClassName = _constants_utility_constants__WEBPACK_IMPORTED_MODULE_3__["default"].parentBlockClassName;
    const parentElem = e.target.closest(`.${parentElemsClassName}`);
    const table = parentElem.querySelector("table");
    const currentTbody = table.querySelector("tbody");
    const currentTableRows = currentTbody.querySelectorAll("tr");
    const filtersWrapper = parentElem.querySelector(`.${parentElemsClassName}__filters__wrapper`);
    const filterSelectTags = parentElem.querySelectorAll("select");
    const editingLockedMsg = parentElem.querySelector(".editing-locked-msg");
    const {
      startTimeClassName
    } = _constants_utility_constants__WEBPACK_IMPORTED_MODULE_3__["default"].selectTagClass;
    let selectTagFilters = parentBlockUtilities.getSelectTagFilters(parentElem);
    parentBlockUtilities.resetFilters(parentElem, selectTagFilters, currentTbody);
    filterSelectTags.forEach(select => {
      const {
        value
      } = select;
      filtersArr.push(value);
    });
    const filtersArrNoDupes = parentBlockUtilities.removeDupesFromArr(filtersArr);
    if (filtersArrNoDupes.length < 2) {
      editingLockedMsg.classList.add("hide");
    } else {
      editingLockedMsg.classList.remove("hide");
      parentBlockUtilities.selectTagFilterEvents(parentElemsClassName, selectTagFilters, startTimeClassName, table, currentTbody, currentTableRows, filtersWrapper);
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-create-block-meetings-table-block__filters__wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editing-locked-msg hide"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Meeting Edits are Locked while using Filters (Drop-Downs)!"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "To edit meetings again change all drop-downs to the first options to show all all meetings, including:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Show All Days of Week"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Show All Cities"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "etc."))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-create-block-meetings-table-block__filters"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Day of Week:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    className: "day-of-week-filter",
    name: "days of week",
    onChange: filterEvent
  }, daysArr.map(item => {
    let val = item.value;
    let label = item.label;
    if (val === "") {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        key: "0_choose_item",
        value: val
      }, "Show All Days of Week");
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      key: val,
      value: val
    }, label);
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Meeting City:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    className: "city-filter",
    name: "cities",
    onChange: filterEvent
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: ""
  }, "Show All Cities"), cities))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Group Type:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    className: "group-type-filter",
    name: "group types",
    onChange: filterEvent
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: ""
  }, "Show All Group Types"), groupTypes))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Meeting Start Time:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    className: "start-time-filter",
    name: "meeting start times",
    onChange: filterEvent
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: ""
  }, "Show All Meetings Times"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "asc~"
  }, "Show Earliest to Latest Meetings"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "desc~"
  }, "Show Latest to Earliest Meetings")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "wp-block-create-block-meetings-table-block_reset-btn"
  }, "Reset"))));
}

/***/ }),

/***/ "./src/weekly-meetings-list/js/utilities.js":
/*!**************************************************!*\
  !*** ./src/weekly-meetings-list/js/utilities.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
      const table = parentElem.getElementsByTagName("table");
      const currentTbody = parentElem.getElementsByTagName("tbody");
      const currentTableRows = parentElem.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
      const filtersWrapper = parentElem.getElementsByClassName(`${parentElemsClassName}__filters__wrapper`);
      const {
        startTimeClassName
      } = _components_constants_utility_constants__WEBPACK_IMPORTED_MODULE_0__["default"].selectTagClass;
      let selectTagFilters = this.getSelectTagFilters(parentElem);
      this.resetFilters(parentElem, selectTagFilters, currentTbody);
      this.selectTagFilterEvents(parentElemsClassName, selectTagFilters, startTimeClassName, table, currentTbody, currentTableRows, filtersWrapper);
    });
  }
  selectTagFilterEvents(parentElemsClassName, selectTagFilters, startTimeClassName, table, currentTbody, currentTableRows, filtersWrapper) {
    const selectTagFiltersArr = [...selectTagFilters];
    selectTagFiltersArr.forEach(select => {
      select.addEventListener("change", e => {
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
            let getNewTbody = table[0].getElementsByClassName("copied-data");
            if (getNewTbody.length === 0) {
              this.setupFilterHandler(table, currentTbody, currentTableRows);
            }
            let selectTagFilters2 = this.getSelectTagFilters(parentElem);
            this.showHideFilter(parentElemsClassName, parentElem, currentTbody, filtersWrapper, selectedElem, onStartTimeFilter);
            this.filterNotification(selectedElem, selectTagFilters2);
            return;
          default:
            onStartTimeFilter = false;
            const getNewTbody2 = table[0].getElementsByClassName("copied-data");
            if (getNewTbody2.length === 0) {
              this.setupFilterHandler(table, currentTbody, currentTableRows);
            }
            let selectTagFilters3 = this.getSelectTagFilters(parentElem);
            this.showHideFilter(parentElemsClassName, parentElem, currentTbody, filtersWrapper, selectedElem, onStartTimeFilter);
            this.filterNotification(selectedElem, selectTagFilters3);
            return;
        }
      });
    });
  }
  setupFilterHandler(table, currentTbody, currentTableRows) {
    var _table$0$getElementsB;
    if (!currentTbody[0].classList.contains("hide")) {
      currentTbody[0].classList.add("hide");
    }
    const newTbodyCheck = (_table$0$getElementsB = table[0].getElementsByClassName("copied-data")) !== null && _table$0$getElementsB !== void 0 ? _table$0$getElementsB : null;
    if (newTbodyCheck.length > 0) {
      newTbodyCheck.remove();
    }
    const newTbody = document.createElement("tbody");
    newTbody.classList.add("copied-data");
    if (newTbody.classList.contains("hide")) {
      newTbody.classList.remove("hide");
    }
    if (this.isElemEmpty(newTbody)) {
      const currentTableRowsArr = [...currentTableRows];
      currentTableRowsArr.forEach((tr, i) => {
        const origOrder = i + 1;
        const trClone = tr.cloneNode(true);
        trClone.setAttribute("data-original-order", origOrder);
        newTbody.appendChild(trClone);
      });
      table[0].appendChild(newTbody);
    }
  }
  showHideFilter(parentElemsClassName, parentElem, currentTbody, filtersWrapper, selectedElem, onStartTimeFilter) {
    const getNewTbody = parentElem.getElementsByClassName("copied-data");
    const newTbodyRows = getNewTbody[0].getElementsByTagName("tr");
    const newTbodyRowsArr = [...newTbodyRows];
    let selectTagFilters = this.getSelectTagFilters(parentElem);
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
      newTbodyRowsArr.forEach(tr => {
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
    const selectTagFiltesArr = [...selectTagFilters];
    selectTagFiltesArr.forEach(elem => {
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
  getSelectTagFilters(parentElem) {
    const selectTagElems = parentElem.getElementsByTagName("select");
    return selectTagElems;
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
    const selectTagFiltesArr = [...selectTagFilters];
    const resetBtn = parentElem.getElementsByClassName("wp-block-create-block-meetings-table-block_reset-btn")[0];
    resetBtn.addEventListener("click", e => {
      var _btnParent$querySelec, _parentElem$querySele2;
      const btnClicked = e.target;
      const btnParent = btnClicked.closest(`.${_components_constants_utility_constants__WEBPACK_IMPORTED_MODULE_0__["default"].parentBlockClassName}`);
      const tbodyRowsOriginalData = btnParent.querySelectorAll("tbody.original-data tr");
      const newTbody = (_btnParent$querySelec = btnParent.querySelector("table tbody.copied-data")) !== null && _btnParent$querySelec !== void 0 ? _btnParent$querySelec : null;
      if (!newTbody) {
        return;
      }
      selectTagFiltesArr.forEach(elem => {
        elem.value = "";
      });
      const notification = (_parentElem$querySele2 = parentElem.querySelector(".notification")) !== null && _parentElem$querySele2 !== void 0 ? _parentElem$querySele2 : null;
      if (notification) {
        notification.textContent = `Showing All ${tbodyRowsOriginalData.length} Meeting(s)`;
      }
      newTbody.remove();
      currentTbody[0].classList.remove("hide");
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
  ifHTMLCollectionOrNodeList(elem) {
    switch (true) {
      case HTMLCollection.prototype.isPrototypeOf(elem):
        console.log("Is HTMLCollection");
        console.log(elem);
        return;
      case NodeList.prototype.isPrototypeOf(elem):
        console.log("Is NodeList");
        console.log(elem);
        return;
      default:
        console.log("NOT HTMLCollection or NodeList!!!");
    }
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

/***/ "./src/weekly-meetings-list/save.js":
/*!******************************************!*\
  !*** ./src/weekly-meetings-list/save.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/weekly-meetings-list/editor.scss");
/* harmony import */ var _js_components_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/components/filters */ "./src/weekly-meetings-list/js/components/filters.js");
/* harmony import */ var _js_components_filterNotifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/components/filterNotifications */ "./src/weekly-meetings-list/js/components/filterNotifications.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/esm/index.mjs");






function Save({
  attributes
}) {
  const {
    tableTitle,
    citiesArr,
    groupTypesArr,
    dayOfWeekHeading,
    timeHeading,
    cityHeading,
    groupTypeHeading,
    meetingNameHeading,
    groupInfoHeading
  } = attributes;
  const groupInfoHeadingToHtml = (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__["default"])(groupInfoHeading);
  const isEditPage = false;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(),
    className: "wp-block-create-block-meetings-table-block wp-block-create-block-meetings-table-block_save"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_js_components_filters__WEBPACK_IMPORTED_MODULE_3__["default"], {
    citiesArr: citiesArr,
    groupTypesArr: groupTypesArr,
    isEditPage: isEditPage
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("caption", {
    className: "table-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, tableTitle, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_js_components_filterNotifications__WEBPACK_IMPORTED_MODULE_4__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "print"
  }, "Print Meeting Schedule")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    role: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    role: "columnheader",
    scope: "col"
  }, dayOfWeekHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    role: "columnheader",
    scope: "col"
  }, timeHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    role: "columnheader",
    scope: "col"
  }, cityHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    role: "columnheader",
    scope: "col"
  }, groupTypeHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    role: "columnheader",
    scope: "col"
  }, meetingNameHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    role: "columnheader",
    scope: "col"
  }, groupInfoHeadingToHtml))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", {
    className: "original-data"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))));
}

/***/ }),

/***/ "./node_modules/domelementtype/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/domelementtype/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
/** Types of elements found in htmlparser2's DOM */
var ElementType;
(function (ElementType) {
    /** Type for the root element of a document */
    ElementType["Root"] = "root";
    /** Type for Text */
    ElementType["Text"] = "text";
    /** Type for <? ... ?> */
    ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */
    ElementType["Comment"] = "comment";
    /** Type for <script> tags */
    ElementType["Script"] = "script";
    /** Type for <style> tags */
    ElementType["Style"] = "style";
    /** Type for Any tag */
    ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */
    ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */
    ElementType["Doctype"] = "doctype";
})(ElementType = exports.ElementType || (exports.ElementType = {}));
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
function isTag(elem) {
    return (elem.type === ElementType.Tag ||
        elem.type === ElementType.Script ||
        elem.type === ElementType.Style);
}
exports.isTag = isTag;
// Exports for backwards compatibility
/** Type for the root element of a document */
exports.Root = ElementType.Root;
/** Type for Text */
exports.Text = ElementType.Text;
/** Type for <? ... ?> */
exports.Directive = ElementType.Directive;
/** Type for <!-- ... --> */
exports.Comment = ElementType.Comment;
/** Type for <script> tags */
exports.Script = ElementType.Script;
/** Type for <style> tags */
exports.Style = ElementType.Style;
/** Type for Any tag */
exports.Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */
exports.CDATA = ElementType.CDATA;
/** Type for <!doctype ...> */
exports.Doctype = ElementType.Doctype;


/***/ }),

/***/ "./node_modules/domhandler/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/domhandler/lib/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomHandler = void 0;
var domelementtype_1 = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/index.js");
var node_js_1 = __webpack_require__(/*! ./node.js */ "./node_modules/domhandler/lib/node.js");
__exportStar(__webpack_require__(/*! ./node.js */ "./node_modules/domhandler/lib/node.js"), exports);
// Default options
var defaultOpts = {
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false,
};
var DomHandler = /** @class */ (function () {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */
    function DomHandler(callback, options, elementCB) {
        /** The elements of the DOM */
        this.dom = [];
        /** The root element for the DOM */
        this.root = new node_js_1.Document(this.dom);
        /** Indicated whether parsing has been completed. */
        this.done = false;
        /** Stack of open tags. */
        this.tagStack = [this.root];
        /** A data node that is still being written to. */
        this.lastNode = null;
        /** Reference to the parser instance. Used for location information. */
        this.parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    DomHandler.prototype.onparserinit = function (parser) {
        this.parser = parser;
    };
    // Resets the handler back to starting state
    DomHandler.prototype.onreset = function () {
        this.dom = [];
        this.root = new node_js_1.Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
    };
    // Signals the handler that parsing is done
    DomHandler.prototype.onend = function () {
        if (this.done)
            return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    };
    DomHandler.prototype.onerror = function (error) {
        this.handleCallback(error);
    };
    DomHandler.prototype.onclosetag = function () {
        this.lastNode = null;
        var elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB)
            this.elementCB(elem);
    };
    DomHandler.prototype.onopentag = function (name, attribs) {
        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
        var element = new node_js_1.Element(name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    };
    DomHandler.prototype.ontext = function (data) {
        var lastNode = this.lastNode;
        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
            lastNode.data += data;
            if (this.options.withEndIndices) {
                lastNode.endIndex = this.parser.endIndex;
            }
        }
        else {
            var node = new node_js_1.Text(data);
            this.addNode(node);
            this.lastNode = node;
        }
    };
    DomHandler.prototype.oncomment = function (data) {
        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
            this.lastNode.data += data;
            return;
        }
        var node = new node_js_1.Comment(data);
        this.addNode(node);
        this.lastNode = node;
    };
    DomHandler.prototype.oncommentend = function () {
        this.lastNode = null;
    };
    DomHandler.prototype.oncdatastart = function () {
        var text = new node_js_1.Text("");
        var node = new node_js_1.CDATA([text]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    };
    DomHandler.prototype.oncdataend = function () {
        this.lastNode = null;
    };
    DomHandler.prototype.onprocessinginstruction = function (name, data) {
        var node = new node_js_1.ProcessingInstruction(name, data);
        this.addNode(node);
    };
    DomHandler.prototype.handleCallback = function (error) {
        if (typeof this.callback === "function") {
            this.callback(error, this.dom);
        }
        else if (error) {
            throw error;
        }
    };
    DomHandler.prototype.addNode = function (node) {
        var parent = this.tagStack[this.tagStack.length - 1];
        var previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    };
    return DomHandler;
}());
exports.DomHandler = DomHandler;
exports["default"] = DomHandler;


/***/ }),

/***/ "./node_modules/domhandler/lib/node.js":
/*!*********************************************!*\
  !*** ./node_modules/domhandler/lib/node.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.CDATA = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
var domelementtype_1 = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/index.js");
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */
var Node = /** @class */ (function () {
    function Node() {
        /** Parent of the node */
        this.parent = null;
        /** Previous sibling */
        this.prev = null;
        /** Next sibling */
        this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
        this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
        this.endIndex = null;
    }
    Object.defineProperty(Node.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.parent;
        },
        set: function (parent) {
            this.parent = parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.prev;
        },
        set: function (prev) {
            this.prev = prev;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.next;
        },
        set: function (next) {
            this.next = next;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */
    Node.prototype.cloneNode = function (recursive) {
        if (recursive === void 0) { recursive = false; }
        return cloneNode(this, recursive);
    };
    return Node;
}());
exports.Node = Node;
/**
 * A node that contains some data.
 */
var DataNode = /** @class */ (function (_super) {
    __extends(DataNode, _super);
    /**
     * @param data The content of the data node
     */
    function DataNode(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(DataNode.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.data;
        },
        set: function (data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    return DataNode;
}(Node));
exports.DataNode = DataNode;
/**
 * Text within the document.
 */
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.Text;
        return _this;
    }
    Object.defineProperty(Text.prototype, "nodeType", {
        get: function () {
            return 3;
        },
        enumerable: false,
        configurable: true
    });
    return Text;
}(DataNode));
exports.Text = Text;
/**
 * Comments within the document.
 */
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.Comment;
        return _this;
    }
    Object.defineProperty(Comment.prototype, "nodeType", {
        get: function () {
            return 8;
        },
        enumerable: false,
        configurable: true
    });
    return Comment;
}(DataNode));
exports.Comment = Comment;
/**
 * Processing instructions, including doc types.
 */
var ProcessingInstruction = /** @class */ (function (_super) {
    __extends(ProcessingInstruction, _super);
    function ProcessingInstruction(name, data) {
        var _this = _super.call(this, data) || this;
        _this.name = name;
        _this.type = domelementtype_1.ElementType.Directive;
        return _this;
    }
    Object.defineProperty(ProcessingInstruction.prototype, "nodeType", {
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    return ProcessingInstruction;
}(DataNode));
exports.ProcessingInstruction = ProcessingInstruction;
/**
 * A `Node` that can have children.
 */
var NodeWithChildren = /** @class */ (function (_super) {
    __extends(NodeWithChildren, _super);
    /**
     * @param children Children of the node. Only certain node types can have children.
     */
    function NodeWithChildren(children) {
        var _this = _super.call(this) || this;
        _this.children = children;
        return _this;
    }
    Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function () {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
        /** Last child of the node. */
        get: function () {
            return this.children.length > 0
                ? this.children[this.children.length - 1]
                : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.children;
        },
        set: function (children) {
            this.children = children;
        },
        enumerable: false,
        configurable: true
    });
    return NodeWithChildren;
}(Node));
exports.NodeWithChildren = NodeWithChildren;
var CDATA = /** @class */ (function (_super) {
    __extends(CDATA, _super);
    function CDATA() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.CDATA;
        return _this;
    }
    Object.defineProperty(CDATA.prototype, "nodeType", {
        get: function () {
            return 4;
        },
        enumerable: false,
        configurable: true
    });
    return CDATA;
}(NodeWithChildren));
exports.CDATA = CDATA;
/**
 * The root node of the document.
 */
var Document = /** @class */ (function (_super) {
    __extends(Document, _super);
    function Document() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.Root;
        return _this;
    }
    Object.defineProperty(Document.prototype, "nodeType", {
        get: function () {
            return 9;
        },
        enumerable: false,
        configurable: true
    });
    return Document;
}(NodeWithChildren));
exports.Document = Document;
/**
 * An element within the DOM.
 */
var Element = /** @class */ (function (_super) {
    __extends(Element, _super);
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */
    function Element(name, attribs, children, type) {
        if (children === void 0) { children = []; }
        if (type === void 0) { type = name === "script"
            ? domelementtype_1.ElementType.Script
            : name === "style"
                ? domelementtype_1.ElementType.Style
                : domelementtype_1.ElementType.Tag; }
        var _this = _super.call(this, children) || this;
        _this.name = name;
        _this.attribs = attribs;
        _this.type = type;
        return _this;
    }
    Object.defineProperty(Element.prototype, "nodeType", {
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (name) {
                var _a, _b;
                return ({
                    name: name,
                    value: _this.attribs[name],
                    namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                    prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name],
                });
            });
        },
        enumerable: false,
        configurable: true
    });
    return Element;
}(NodeWithChildren));
exports.Element = Element;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */
function isTag(node) {
    return (0, domelementtype_1.isTag)(node);
}
exports.isTag = isTag;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */
function isCDATA(node) {
    return node.type === domelementtype_1.ElementType.CDATA;
}
exports.isCDATA = isCDATA;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */
function isText(node) {
    return node.type === domelementtype_1.ElementType.Text;
}
exports.isText = isText;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */
function isComment(node) {
    return node.type === domelementtype_1.ElementType.Comment;
}
exports.isComment = isComment;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDirective(node) {
    return node.type === domelementtype_1.ElementType.Directive;
}
exports.isDirective = isDirective;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDocument(node) {
    return node.type === domelementtype_1.ElementType.Root;
}
exports.isDocument = isDocument;
/**
 * @param node Node to check.
 * @returns `true` if the node has children, `false` otherwise.
 */
function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
exports.hasChildren = hasChildren;
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */
function cloneNode(node, recursive) {
    if (recursive === void 0) { recursive = false; }
    var result;
    if (isText(node)) {
        result = new Text(node.data);
    }
    else if (isComment(node)) {
        result = new Comment(node.data);
    }
    else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
        children.forEach(function (child) { return (child.parent = clone_1); });
        if (node.namespace != null) {
            clone_1.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
        }
        if (node["x-attribsPrefix"]) {
            clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
        }
        result = clone_1;
    }
    else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new CDATA(children);
        children.forEach(function (child) { return (child.parent = clone_2); });
        result = clone_2;
    }
    else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document(children);
        children.forEach(function (child) { return (child.parent = clone_3); });
        if (node["x-mode"]) {
            clone_3["x-mode"] = node["x-mode"];
        }
        result = clone_3;
    }
    else if (isDirective(node)) {
        var instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    }
    else {
        throw new Error("Not implemented yet: ".concat(node.type));
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
exports.cloneNode = cloneNode;
function cloneChildren(childs) {
    var children = childs.map(function (child) { return cloneNode(child, true); });
    for (var i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}


/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/constants.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/constants.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CASE_SENSITIVE_TAG_NAMES_MAP = exports.CASE_SENSITIVE_TAG_NAMES = void 0;
/**
 * SVG elements are case-sensitive.
 *
 * @see https://developer.mozilla.org/docs/Web/SVG/Element#svg_elements_a_to_z
 */
exports.CASE_SENSITIVE_TAG_NAMES = [
    'animateMotion',
    'animateTransform',
    'clipPath',
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDropShadow',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence',
    'foreignObject',
    'linearGradient',
    'radialGradient',
    'textPath',
];
exports.CASE_SENSITIVE_TAG_NAMES_MAP = exports.CASE_SENSITIVE_TAG_NAMES.reduce(function (accumulator, tagName) {
    accumulator[tagName.toLowerCase()] = tagName;
    return accumulator;
}, {});
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/domparser.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/domparser.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// constants
var HTML = 'html';
var HEAD = 'head';
var BODY = 'body';
var FIRST_TAG_REGEX = /<([a-zA-Z]+[0-9]?)/; // e.g., <h1>
// match-all-characters in case of newlines (DOTALL)
var HEAD_TAG_REGEX = /<head[^]*>/i;
var BODY_TAG_REGEX = /<body[^]*>/i;
// falls back to `parseFromString` if `createHTMLDocument` cannot be used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var parseFromDocument = function (html, tagName) {
    /* istanbul ignore next */
    throw new Error('This browser does not support `document.implementation.createHTMLDocument`');
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var parseFromString = function (html, tagName) {
    /* istanbul ignore next */
    throw new Error('This browser does not support `DOMParser.prototype.parseFromString`');
};
var DOMParser = typeof window === 'object' && window.DOMParser;
/**
 * DOMParser (performance: slow).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMParser#Parsing_an_SVG_or_HTML_document
 */
if (typeof DOMParser === 'function') {
    var domParser_1 = new DOMParser();
    var mimeType_1 = 'text/html';
    /**
     * Creates an HTML document using `DOMParser.parseFromString`.
     *
     * @param html - The HTML string.
     * @param tagName - The element to render the HTML (with 'body' as fallback).
     * @returns - Document.
     */
    parseFromString = function (html, tagName) {
        if (tagName) {
            /* istanbul ignore next */
            html = "<".concat(tagName, ">").concat(html, "</").concat(tagName, ">");
        }
        return domParser_1.parseFromString(html, mimeType_1);
    };
    parseFromDocument = parseFromString;
}
/**
 * DOMImplementation (performance: fair).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMImplementation/createHTMLDocument
 */
if (typeof document === 'object' && document.implementation) {
    var htmlDocument_1 = document.implementation.createHTMLDocument();
    /**
     * Use HTML document created by `document.implementation.createHTMLDocument`.
     *
     * @param html - The HTML string.
     * @param tagName - The element to render the HTML (with 'body' as fallback).
     * @returns - Document
     */
    parseFromDocument = function (html, tagName) {
        if (tagName) {
            var element = htmlDocument_1.documentElement.querySelector(tagName);
            if (element) {
                element.innerHTML = html;
            }
            return htmlDocument_1;
        }
        htmlDocument_1.documentElement.innerHTML = html;
        return htmlDocument_1;
    };
}
/**
 * Template (performance: fast).
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/template
 */
var template = typeof document === 'object' && document.createElement('template');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var parseFromTemplate;
if (template && template.content) {
    /**
     * Uses a template element (content fragment) to parse HTML.
     *
     * @param html - HTML string.
     * @returns - Nodes.
     */
    parseFromTemplate = function (html) {
        template.innerHTML = html;
        return template.content.childNodes;
    };
}
/**
 * Parses HTML string to DOM nodes.
 *
 * @param html - HTML markup.
 * @returns - DOM nodes.
 */
function domparser(html) {
    var _a, _b;
    var match = html.match(FIRST_TAG_REGEX);
    var firstTagName = match && match[1] ? match[1].toLowerCase() : '';
    switch (firstTagName) {
        case HTML: {
            var doc = parseFromString(html);
            // the created document may come with filler head/body elements,
            // so make sure to remove them if they don't actually exist
            if (!HEAD_TAG_REGEX.test(html)) {
                var element = doc.querySelector(HEAD);
                (_a = element === null || element === void 0 ? void 0 : element.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(element);
            }
            if (!BODY_TAG_REGEX.test(html)) {
                var element = doc.querySelector(BODY);
                (_b = element === null || element === void 0 ? void 0 : element.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(element);
            }
            return doc.querySelectorAll(HTML);
        }
        case HEAD:
        case BODY: {
            var elements = parseFromDocument(html).querySelectorAll(firstTagName);
            // if there's a sibling element, then return both elements
            if (BODY_TAG_REGEX.test(html) && HEAD_TAG_REGEX.test(html)) {
                return elements[0].parentNode.childNodes;
            }
            return elements;
        }
        // low-level tag or text
        default: {
            if (parseFromTemplate) {
                return parseFromTemplate(html);
            }
            var element = parseFromDocument(html, BODY).querySelector(BODY);
            return element.childNodes;
        }
    }
}
exports["default"] = domparser;
//# sourceMappingURL=domparser.js.map

/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/html-to-dom.js":
/*!****************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/html-to-dom.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var domparser_1 = __importDefault(__webpack_require__(/*! ./domparser */ "./node_modules/html-dom-parser/lib/client/domparser.js"));
var utilities_1 = __webpack_require__(/*! ./utilities */ "./node_modules/html-dom-parser/lib/client/utilities.js");
var DIRECTIVE_REGEX = /<(![a-zA-Z\s]+)>/; // e.g., <!doctype html>
/**
 * Parses HTML string to DOM nodes in browser.
 *
 * @param html - HTML markup.
 * @returns - DOM elements.
 */
function HTMLDOMParser(html) {
    if (typeof html !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    if (!html) {
        return [];
    }
    // match directive
    var match = html.match(DIRECTIVE_REGEX);
    var directive = match ? match[1] : undefined;
    return (0, utilities_1.formatDOM)((0, domparser_1.default)(html), null, directive);
}
exports["default"] = HTMLDOMParser;
//# sourceMappingURL=html-to-dom.js.map

/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/utilities.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/utilities.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatDOM = exports.formatAttributes = void 0;
var domhandler_1 = __webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js");
var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/html-dom-parser/lib/client/constants.js");
/**
 * Gets case-sensitive tag name.
 *
 * @param tagName - Tag name in lowercase.
 * @returns - Case-sensitive tag name.
 */
function getCaseSensitiveTagName(tagName) {
    return constants_1.CASE_SENSITIVE_TAG_NAMES_MAP[tagName];
}
/**
 * Formats DOM attributes to a hash map.
 *
 * @param attributes - List of attributes.
 * @returns - Map of attribute name to value.
 */
function formatAttributes(attributes) {
    var map = {};
    var index = 0;
    var attributesLength = attributes.length;
    // `NamedNodeMap` is array-like
    for (; index < attributesLength; index++) {
        var attribute = attributes[index];
        map[attribute.name] = attribute.value;
    }
    return map;
}
exports.formatAttributes = formatAttributes;
/**
 * Corrects the tag name if it is case-sensitive (SVG).
 * Otherwise, returns the lowercase tag name (HTML).
 *
 * @param tagName - Lowercase tag name.
 * @returns - Formatted tag name.
 */
function formatTagName(tagName) {
    tagName = tagName.toLowerCase();
    var caseSensitiveTagName = getCaseSensitiveTagName(tagName);
    if (caseSensitiveTagName) {
        return caseSensitiveTagName;
    }
    return tagName;
}
/**
 * Transforms DOM nodes to `domhandler` nodes.
 *
 * @param nodes - DOM nodes.
 * @param parent - Parent node.
 * @param directive - Directive.
 * @returns - Nodes.
 */
function formatDOM(nodes, parent, directive) {
    if (parent === void 0) { parent = null; }
    var domNodes = [];
    var current;
    var index = 0;
    var nodesLength = nodes.length;
    for (; index < nodesLength; index++) {
        var node = nodes[index];
        // set the node data given the type
        switch (node.nodeType) {
            case 1: {
                var tagName = formatTagName(node.nodeName);
                // script, style, or tag
                current = new domhandler_1.Element(tagName, formatAttributes(node.attributes));
                current.children = formatDOM(
                // template children are on content
                tagName === 'template'
                    ? node.content.childNodes
                    : node.childNodes, current);
                break;
            }
            case 3:
                current = new domhandler_1.Text(node.nodeValue);
                break;
            case 8:
                current = new domhandler_1.Comment(node.nodeValue);
                break;
            default:
                continue;
        }
        // set previous node next
        var prev = domNodes[index - 1] || null;
        if (prev) {
            prev.next = current;
        }
        // set properties for current node
        current.parent = parent;
        current.prev = prev;
        current.next = null;
        domNodes.push(current);
    }
    if (directive) {
        current = new domhandler_1.ProcessingInstruction(directive.substring(0, directive.indexOf(' ')).toLowerCase(), directive);
        current.next = domNodes[0] || null;
        current.parent = parent;
        domNodes.unshift(current);
        if (domNodes[1]) {
            domNodes[1].prev = domNodes[0];
        }
    }
    return domNodes;
}
exports.formatDOM = formatDOM;
//# sourceMappingURL=utilities.js.map

/***/ }),

/***/ "./node_modules/html-react-parser/lib/attributes-to-props.js":
/*!*******************************************************************!*\
  !*** ./node_modules/html-react-parser/lib/attributes-to-props.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_property_1 = __webpack_require__(/*! react-property */ "./node_modules/react-property/lib/index.js");
var utilities_1 = __webpack_require__(/*! ./utilities */ "./node_modules/html-react-parser/lib/utilities.js");
// https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components
// https://developer.mozilla.org/docs/Web/HTML/Attributes
var UNCONTROLLED_COMPONENT_ATTRIBUTES = ['checked', 'value'];
var UNCONTROLLED_COMPONENT_NAMES = ['input', 'select', 'textarea'];
var valueOnlyInputs = {
    reset: true,
    submit: true,
};
/**
 * Converts HTML/SVG DOM attributes to React props.
 *
 * @param attributes - HTML/SVG DOM attributes.
 * @param nodeName - DOM node name.
 * @returns - React props.
 */
function attributesToProps(attributes, nodeName) {
    if (attributes === void 0) { attributes = {}; }
    var props = {};
    var isInputValueOnly = Boolean(attributes.type && valueOnlyInputs[attributes.type]);
    for (var attributeName in attributes) {
        var attributeValue = attributes[attributeName];
        // ARIA (aria-*) or custom data (data-*) attribute
        if ((0, react_property_1.isCustomAttribute)(attributeName)) {
            props[attributeName] = attributeValue;
            continue;
        }
        // convert HTML/SVG attribute to React prop
        var attributeNameLowerCased = attributeName.toLowerCase();
        var propName = getPropName(attributeNameLowerCased);
        if (propName) {
            var propertyInfo = (0, react_property_1.getPropertyInfo)(propName);
            // convert attribute to uncontrolled component prop (e.g., `value` to `defaultValue`)
            if (UNCONTROLLED_COMPONENT_ATTRIBUTES.includes(propName) &&
                UNCONTROLLED_COMPONENT_NAMES.includes(nodeName) &&
                !isInputValueOnly) {
                propName = getPropName('default' + attributeNameLowerCased);
            }
            props[propName] = attributeValue;
            switch (propertyInfo && propertyInfo.type) {
                case react_property_1.BOOLEAN:
                    props[propName] = true;
                    break;
                case react_property_1.OVERLOADED_BOOLEAN:
                    if (attributeValue === '') {
                        props[propName] = true;
                    }
                    break;
            }
            continue;
        }
        // preserve custom attribute if React >=16
        if (utilities_1.PRESERVE_CUSTOM_ATTRIBUTES) {
            props[attributeName] = attributeValue;
        }
    }
    // transform inline style to object
    (0, utilities_1.setStyleProp)(attributes.style, props);
    return props;
}
exports["default"] = attributesToProps;
/**
 * Gets prop name from lowercased attribute name.
 *
 * @param attributeName - Lowercased attribute name.
 * @returns - Prop name.
 */
function getPropName(attributeName) {
    return react_property_1.possibleStandardNames[attributeName];
}
//# sourceMappingURL=attributes-to-props.js.map

/***/ }),

/***/ "./node_modules/html-react-parser/lib/dom-to-react.js":
/*!************************************************************!*\
  !*** ./node_modules/html-react-parser/lib/dom-to-react.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(/*! react */ "react");
var attributes_to_props_1 = __importDefault(__webpack_require__(/*! ./attributes-to-props */ "./node_modules/html-react-parser/lib/attributes-to-props.js"));
var utilities_1 = __webpack_require__(/*! ./utilities */ "./node_modules/html-react-parser/lib/utilities.js");
var React = {
    cloneElement: react_1.cloneElement,
    createElement: react_1.createElement,
    isValidElement: react_1.isValidElement,
};
/**
 * Converts DOM nodes to JSX element(s).
 *
 * @param nodes - DOM nodes.
 * @param options - Options.
 * @returns - String or JSX element(s).
 */
function domToReact(nodes, options) {
    var reactElements = [];
    var hasReplace = typeof (options === null || options === void 0 ? void 0 : options.replace) === 'function';
    var transform = (options === null || options === void 0 ? void 0 : options.transform) || utilities_1.returnFirstArg;
    var _a = (options === null || options === void 0 ? void 0 : options.library) || React, cloneElement = _a.cloneElement, createElement = _a.createElement, isValidElement = _a.isValidElement;
    var nodesLength = nodes.length;
    for (var index = 0; index < nodesLength; index++) {
        var node = nodes[index];
        // replace with custom React element (if present)
        if (hasReplace) {
            var replaceElement = options.replace(node);
            if (isValidElement(replaceElement)) {
                // set "key" prop for sibling elements
                // https://react.dev/learn/rendering-lists#rules-of-keys
                if (nodesLength > 1) {
                    replaceElement = cloneElement(replaceElement, {
                        key: replaceElement.key || index,
                    });
                }
                reactElements.push(transform(replaceElement, node, index));
                continue;
            }
        }
        if (node.type === 'text') {
            var isWhitespace = !node.data.trim().length;
            // We have a whitespace node that can't be nested in its parent
            // so skip it
            if (isWhitespace &&
                node.parent &&
                !(0, utilities_1.canTextBeChildOfNode)(node.parent)) {
                continue;
            }
            // Trim is enabled and we have a whitespace node
            // so skip it
            if ((options === null || options === void 0 ? void 0 : options.trim) && isWhitespace) {
                continue;
            }
            // We have a text node that's not whitespace and it can be nested
            // in its parent so add it to the results
            reactElements.push(transform(node.data, node, index));
            continue;
        }
        var element = node;
        var props = {};
        if (skipAttributesToProps(element)) {
            (0, utilities_1.setStyleProp)(element.attribs.style, element.attribs);
            props = element.attribs;
        }
        else if (element.attribs) {
            props = (0, attributes_to_props_1.default)(element.attribs, element.name);
        }
        var children = void 0;
        switch (node.type) {
            case 'script':
            case 'style':
                // prevent text in <script> or <style> from being escaped
                // https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html
                if (node.children[0]) {
                    props.dangerouslySetInnerHTML = {
                        __html: node.children[0].data,
                    };
                }
                break;
            case 'tag':
                // setting textarea value in children is an antipattern in React
                // https://react.dev/reference/react-dom/components/textarea#caveats
                if (node.name === 'textarea' && node.children[0]) {
                    props.defaultValue = node.children[0].data;
                }
                else if (node.children && node.children.length) {
                    // continue recursion of creating React elements (if applicable)
                    children = domToReact(node.children, options);
                }
                break;
            // skip all other cases (e.g., comment)
            default:
                continue;
        }
        // set "key" prop for sibling elements
        // https://react.dev/learn/rendering-lists#rules-of-keys
        if (nodesLength > 1) {
            props.key = index;
        }
        reactElements.push(transform(createElement(node.name, props, children), node, index));
    }
    return reactElements.length === 1 ? reactElements[0] : reactElements;
}
exports["default"] = domToReact;
/**
 * Determines whether DOM element attributes should be transformed to props.
 * Web Components should not have their attributes transformed except for `style`.
 *
 * @param node - Element node.
 * @returns - Whether the node attributes should be converted to props.
 */
function skipAttributesToProps(node) {
    return (utilities_1.PRESERVE_CUSTOM_ATTRIBUTES &&
        node.type === 'tag' &&
        (0, utilities_1.isCustomComponent)(node.name, node.attribs));
}
//# sourceMappingURL=dom-to-react.js.map

/***/ }),

/***/ "./node_modules/html-react-parser/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/html-react-parser/lib/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.htmlToDOM = exports.domToReact = exports.attributesToProps = exports.Text = exports.ProcessingInstruction = exports.Element = exports.Comment = void 0;
var html_dom_parser_1 = __importDefault(__webpack_require__(/*! html-dom-parser */ "./node_modules/html-dom-parser/lib/client/html-to-dom.js"));
exports.htmlToDOM = html_dom_parser_1.default;
var attributes_to_props_1 = __importDefault(__webpack_require__(/*! ./attributes-to-props */ "./node_modules/html-react-parser/lib/attributes-to-props.js"));
exports.attributesToProps = attributes_to_props_1.default;
var dom_to_react_1 = __importDefault(__webpack_require__(/*! ./dom-to-react */ "./node_modules/html-react-parser/lib/dom-to-react.js"));
exports.domToReact = dom_to_react_1.default;
var domhandler_1 = __webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js");
Object.defineProperty(exports, "Comment", ({ enumerable: true, get: function () { return domhandler_1.Comment; } }));
Object.defineProperty(exports, "Element", ({ enumerable: true, get: function () { return domhandler_1.Element; } }));
Object.defineProperty(exports, "ProcessingInstruction", ({ enumerable: true, get: function () { return domhandler_1.ProcessingInstruction; } }));
Object.defineProperty(exports, "Text", ({ enumerable: true, get: function () { return domhandler_1.Text; } }));
var domParserOptions = { lowerCaseAttributeNames: false };
/**
 * Converts HTML string to React elements.
 *
 * @param html - HTML string.
 * @param options - Parser options.
 * @returns - React element(s), empty array, or string.
 */
function HTMLReactParser(html, options) {
    if (typeof html !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    if (!html) {
        return [];
    }
    return (0, dom_to_react_1.default)((0, html_dom_parser_1.default)(html, (options === null || options === void 0 ? void 0 : options.htmlparser2) || domParserOptions), options);
}
exports["default"] = HTMLReactParser;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/html-react-parser/lib/utilities.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-react-parser/lib/utilities.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.returnFirstArg = exports.canTextBeChildOfNode = exports.ELEMENTS_WITH_NO_TEXT_CHILDREN = exports.PRESERVE_CUSTOM_ATTRIBUTES = exports.setStyleProp = exports.isCustomComponent = void 0;
var react_1 = __webpack_require__(/*! react */ "react");
var style_to_js_1 = __importDefault(__webpack_require__(/*! style-to-js */ "./node_modules/style-to-js/cjs/index.js"));
var RESERVED_SVG_MATHML_ELEMENTS = new Set([
    'annotation-xml',
    'color-profile',
    'font-face',
    'font-face-src',
    'font-face-uri',
    'font-face-format',
    'font-face-name',
    'missing-glyph',
]);
/**
 * Check if a tag is a custom component.
 *
 * @see {@link https://github.com/facebook/react/blob/v16.6.3/packages/react-dom/src/shared/isCustomComponent.js}
 *
 * @param tagName - Tag name.
 * @param props - Props passed to the element.
 * @returns - Whether the tag is custom component.
 */
function isCustomComponent(tagName, props) {
    if (!tagName.includes('-')) {
        return Boolean(props && typeof props.is === 'string');
    }
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    if (RESERVED_SVG_MATHML_ELEMENTS.has(tagName)) {
        return false;
    }
    return true;
}
exports.isCustomComponent = isCustomComponent;
var styleOptions = {
    reactCompat: true,
};
/**
 * Sets style prop.
 *
 * @param style - Inline style.
 * @param props - Props object.
 */
function setStyleProp(style, props) {
    if (typeof style !== 'string') {
        return;
    }
    if (!style.trim()) {
        props.style = {};
        return;
    }
    try {
        props.style = (0, style_to_js_1.default)(style, styleOptions);
    }
    catch (error) {
        props.style = {};
    }
}
exports.setStyleProp = setStyleProp;
/**
 * @see https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html
 */
exports.PRESERVE_CUSTOM_ATTRIBUTES = Number(react_1.version.split('.')[0]) >= 16;
/**
 * @see https://github.com/facebook/react/blob/cae635054e17a6f107a39d328649137b83f25972/packages/react-dom/src/client/validateDOMNesting.js#L213
 */
exports.ELEMENTS_WITH_NO_TEXT_CHILDREN = new Set([
    'tr',
    'tbody',
    'thead',
    'tfoot',
    'colgroup',
    'table',
    'head',
    'html',
    'frameset',
]);
/**
 * Checks if the given node can contain text nodes
 *
 * @param node - Element node.
 * @returns - Whether the node can contain text nodes.
 */
var canTextBeChildOfNode = function (node) {
    return !exports.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(node.name);
};
exports.canTextBeChildOfNode = canTextBeChildOfNode;
/**
 * Returns the first argument as is.
 *
 * @param arg - The argument to be returned.
 * @returns - The input argument `arg`.
 */
var returnFirstArg = function (arg) { return arg; };
exports.returnFirstArg = returnFirstArg;
//# sourceMappingURL=utilities.js.map

/***/ }),

/***/ "./node_modules/inline-style-parser/index.js":
/*!***************************************************!*\
  !*** ./node_modules/inline-style-parser/index.js ***!
  \***************************************************/
/***/ ((module) => {

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;

// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;

// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;

// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';

// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';

/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */
module.exports = function (style, options) {
  if (typeof style !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!style) return [];

  options = options || {};

  /**
   * Positional.
   */
  var lineno = 1;
  var column = 1;

  /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }

  /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */
  function position() {
    var start = { line: lineno, column: column };
    return function (node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }

  /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column: column };
    this.source = options.source;
  }

  /**
   * Non-enumerable source string.
   */
  Position.prototype.content = style;

  var errorsList = [];

  /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */
  function error(msg) {
    var err = new Error(
      options.source + ':' + lineno + ':' + column + ': ' + msg
    );
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;

    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }

  /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */
  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }

  /**
   * Parse whitespace.
   */
  function whitespace() {
    match(WHITESPACE_REGEX);
  }

  /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */
  function comments(rules) {
    var c;
    rules = rules || [];
    while ((c = comment())) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }

  /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */
  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

    var i = 2;
    while (
      EMPTY_STRING != style.charAt(i) &&
      (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
    ) {
      ++i;
    }
    i += 2;

    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;

    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }

  /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */
  function declaration() {
    var pos = position();

    // prop
    var prop = match(PROPERTY_REGEX);
    if (!prop) return;
    comment();

    // :
    if (!match(COLON_REGEX)) return error("property missing ':'");

    // val
    var val = match(VALUE_REGEX);

    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val
        ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
        : EMPTY_STRING
    });

    // ;
    match(SEMICOLON_REGEX);

    return ret;
  }

  /**
   * Parse declarations.
   *
   * @return {Object[]}
   */
  function declarations() {
    var decls = [];

    comments(decls);

    // declarations
    var decl;
    while ((decl = declaration())) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    return decls;
  }

  whitespace();
  return declarations();
};

/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}


/***/ }),

/***/ "./src/weekly-meetings-list/editor.scss":
/*!**********************************************!*\
  !*** ./src/weekly-meetings-list/editor.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/weekly-meetings-list/style.scss":
/*!*********************************************!*\
  !*** ./src/weekly-meetings-list/style.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-property/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-property/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
const RESERVED = 0;

// A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.
const STRING = 1;

// A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.
const BOOLEANISH_STRING = 2;

// A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
const BOOLEAN = 3;

// An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.
const OVERLOADED_BOOLEAN = 4;

// An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.
const NUMERIC = 5;

// An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.
const POSITIVE_NUMERIC = 6;

function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(
  name,
  type,
  mustUseProperty,
  attributeName,
  attributeNamespace,
  sanitizeURL,
  removeEmptyString,
) {
  this.acceptsBooleans =
    type === BOOLEANISH_STRING ||
    type === BOOLEAN ||
    type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
  this.removeEmptyString = removeEmptyString;
}

// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
const properties = {};

// These props are reserved by React. They shouldn't be written to the DOM.
const reservedProps = [
  'children',
  'dangerouslySetInnerHTML',
  // TODO: This prevents the assignment of defaultValue to regular
  // elements (not just inputs). Now that ReactDOMInput assigns to the
  // defaultValue property -- do we need this?
  'defaultValue',
  'defaultChecked',
  'innerHTML',
  'suppressContentEditableWarning',
  'suppressHydrationWarning',
  'style',
];

reservedProps.forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    RESERVED,
    false, // mustUseProperty
    name, // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(([name, attributeName]) => {
  properties[name] = new PropertyInfoRecord(
    name,
    STRING,
    false, // mustUseProperty
    attributeName, // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    BOOLEANISH_STRING,
    false, // mustUseProperty
    name.toLowerCase(), // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    BOOLEANISH_STRING,
    false, // mustUseProperty
    name, // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These are HTML boolean attributes.
[
  'allowFullScreen',
  'async',
  // Note: there is a special case that prevents it from being written to the DOM
  // on the client side because the browsers are inconsistent. Instead we call focus().
  'autoFocus',
  'autoPlay',
  'controls',
  'default',
  'defer',
  'disabled',
  'disablePictureInPicture',
  'disableRemotePlayback',
  'formNoValidate',
  'hidden',
  'loop',
  'noModule',
  'noValidate',
  'open',
  'playsInline',
  'readOnly',
  'required',
  'reversed',
  'scoped',
  'seamless',
  // Microdata
  'itemScope',
].forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    BOOLEAN,
    false, // mustUseProperty
    name.toLowerCase(), // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.
[
  'checked',
  // Note: `option.selected` is not updated if `select.multiple` is
  // disabled with `removeAttribute`. We have special logic for handling this.
  'multiple',
  'muted',
  'selected',

  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    BOOLEAN,
    true, // mustUseProperty
    name, // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.
[
  'capture',
  'download',

  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    OVERLOADED_BOOLEAN,
    false, // mustUseProperty
    name, // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These are HTML attributes that must be positive numbers.
[
  'cols',
  'rows',
  'size',
  'span',

  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    POSITIVE_NUMERIC,
    false, // mustUseProperty
    name, // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These are HTML attributes that must be numbers.
['rowSpan', 'start'].forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    NUMERIC,
    false, // mustUseProperty
    name.toLowerCase(), // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

const CAMELIZE = /[\-\:]([a-z])/g;
const capitalize = token => token[1].toUpperCase();

// This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.
[
  'accent-height',
  'alignment-baseline',
  'arabic-form',
  'baseline-shift',
  'cap-height',
  'clip-path',
  'clip-rule',
  'color-interpolation',
  'color-interpolation-filters',
  'color-profile',
  'color-rendering',
  'dominant-baseline',
  'enable-background',
  'fill-opacity',
  'fill-rule',
  'flood-color',
  'flood-opacity',
  'font-family',
  'font-size',
  'font-size-adjust',
  'font-stretch',
  'font-style',
  'font-variant',
  'font-weight',
  'glyph-name',
  'glyph-orientation-horizontal',
  'glyph-orientation-vertical',
  'horiz-adv-x',
  'horiz-origin-x',
  'image-rendering',
  'letter-spacing',
  'lighting-color',
  'marker-end',
  'marker-mid',
  'marker-start',
  'overline-position',
  'overline-thickness',
  'paint-order',
  'panose-1',
  'pointer-events',
  'rendering-intent',
  'shape-rendering',
  'stop-color',
  'stop-opacity',
  'strikethrough-position',
  'strikethrough-thickness',
  'stroke-dasharray',
  'stroke-dashoffset',
  'stroke-linecap',
  'stroke-linejoin',
  'stroke-miterlimit',
  'stroke-opacity',
  'stroke-width',
  'text-anchor',
  'text-decoration',
  'text-rendering',
  'underline-position',
  'underline-thickness',
  'unicode-bidi',
  'unicode-range',
  'units-per-em',
  'v-alphabetic',
  'v-hanging',
  'v-ideographic',
  'v-mathematical',
  'vector-effect',
  'vert-adv-y',
  'vert-origin-x',
  'vert-origin-y',
  'word-spacing',
  'writing-mode',
  'xmlns:xlink',
  'x-height',

  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(attributeName => {
  const name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(
    name,
    STRING,
    false, // mustUseProperty
    attributeName,
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// String SVG attributes with the xlink namespace.
[
  'xlink:actuate',
  'xlink:arcrole',
  'xlink:role',
  'xlink:show',
  'xlink:title',
  'xlink:type',

  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(attributeName => {
  const name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(
    name,
    STRING,
    false, // mustUseProperty
    attributeName,
    'http://www.w3.org/1999/xlink',
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// String SVG attributes with the xml namespace.
[
  'xml:base',
  'xml:lang',
  'xml:space',

  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(attributeName => {
  const name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(
    name,
    STRING,
    false, // mustUseProperty
    attributeName,
    'http://www.w3.org/XML/1998/namespace',
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.
['tabIndex', 'crossOrigin'].forEach(attributeName => {
  properties[attributeName] = new PropertyInfoRecord(
    attributeName,
    STRING,
    false, // mustUseProperty
    attributeName.toLowerCase(), // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.
const xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord(
  'xlinkHref',
  STRING,
  false, // mustUseProperty
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  true, // sanitizeURL
  false, // removeEmptyString
);

['src', 'href', 'action', 'formAction'].forEach(attributeName => {
  properties[attributeName] = new PropertyInfoRecord(
    attributeName,
    STRING,
    false, // mustUseProperty
    attributeName.toLowerCase(), // attributeName
    null, // attributeNamespace
    true, // sanitizeURL
    true, // removeEmptyString
  );
});

// 
const {
  CAMELCASE,
  SAME,
  possibleStandardNames: possibleStandardNamesOptimized
} = __webpack_require__(/*! ../lib/possibleStandardNamesOptimized */ "./node_modules/react-property/lib/possibleStandardNamesOptimized.js");

const ATTRIBUTE_NAME_START_CHAR =
  ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';

const ATTRIBUTE_NAME_CHAR =
  ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';

/**
 * Checks whether a property name is a custom attribute.
 *
 * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js#L23-L25
 *
 * @type {(attribute: string) => boolean}
 */
const isCustomAttribute =
  RegExp.prototype.test.bind(
    // eslint-disable-next-line no-misleading-character-class
    new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$')
  );

/**
 * @type {Record<string, string>}
 */
const possibleStandardNames = Object.keys(
  possibleStandardNamesOptimized
).reduce((accumulator, standardName) => {
  const propName = possibleStandardNamesOptimized[standardName];
  if (propName === SAME) {
    accumulator[standardName] = standardName;
  } else if (propName === CAMELCASE) {
    accumulator[standardName.toLowerCase()] = standardName;
  } else {
    accumulator[standardName] = propName;
  }
  return accumulator;
}, {});

exports.BOOLEAN = BOOLEAN;
exports.BOOLEANISH_STRING = BOOLEANISH_STRING;
exports.NUMERIC = NUMERIC;
exports.OVERLOADED_BOOLEAN = OVERLOADED_BOOLEAN;
exports.POSITIVE_NUMERIC = POSITIVE_NUMERIC;
exports.RESERVED = RESERVED;
exports.STRING = STRING;
exports.getPropertyInfo = getPropertyInfo;
exports.isCustomAttribute = isCustomAttribute;
exports.possibleStandardNames = possibleStandardNames;


/***/ }),

/***/ "./node_modules/react-property/lib/possibleStandardNamesOptimized.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-property/lib/possibleStandardNamesOptimized.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

// An attribute in which the DOM/SVG standard name is the same as the React prop name (e.g., 'accept').
var SAME = 0;
exports.SAME = SAME;

// An attribute in which the React prop name is the camelcased version of the DOM/SVG standard name (e.g., 'acceptCharset').
var CAMELCASE = 1;
exports.CAMELCASE = CAMELCASE;

exports.possibleStandardNames = {
  accept: 0,
  acceptCharset: 1,
  'accept-charset': 'acceptCharset',
  accessKey: 1,
  action: 0,
  allowFullScreen: 1,
  alt: 0,
  as: 0,
  async: 0,
  autoCapitalize: 1,
  autoComplete: 1,
  autoCorrect: 1,
  autoFocus: 1,
  autoPlay: 1,
  autoSave: 1,
  capture: 0,
  cellPadding: 1,
  cellSpacing: 1,
  challenge: 0,
  charSet: 1,
  checked: 0,
  children: 0,
  cite: 0,
  class: 'className',
  classID: 1,
  className: 1,
  cols: 0,
  colSpan: 1,
  content: 0,
  contentEditable: 1,
  contextMenu: 1,
  controls: 0,
  controlsList: 1,
  coords: 0,
  crossOrigin: 1,
  dangerouslySetInnerHTML: 1,
  data: 0,
  dateTime: 1,
  default: 0,
  defaultChecked: 1,
  defaultValue: 1,
  defer: 0,
  dir: 0,
  disabled: 0,
  disablePictureInPicture: 1,
  disableRemotePlayback: 1,
  download: 0,
  draggable: 0,
  encType: 1,
  enterKeyHint: 1,
  for: 'htmlFor',
  form: 0,
  formMethod: 1,
  formAction: 1,
  formEncType: 1,
  formNoValidate: 1,
  formTarget: 1,
  frameBorder: 1,
  headers: 0,
  height: 0,
  hidden: 0,
  high: 0,
  href: 0,
  hrefLang: 1,
  htmlFor: 1,
  httpEquiv: 1,
  'http-equiv': 'httpEquiv',
  icon: 0,
  id: 0,
  innerHTML: 1,
  inputMode: 1,
  integrity: 0,
  is: 0,
  itemID: 1,
  itemProp: 1,
  itemRef: 1,
  itemScope: 1,
  itemType: 1,
  keyParams: 1,
  keyType: 1,
  kind: 0,
  label: 0,
  lang: 0,
  list: 0,
  loop: 0,
  low: 0,
  manifest: 0,
  marginWidth: 1,
  marginHeight: 1,
  max: 0,
  maxLength: 1,
  media: 0,
  mediaGroup: 1,
  method: 0,
  min: 0,
  minLength: 1,
  multiple: 0,
  muted: 0,
  name: 0,
  noModule: 1,
  nonce: 0,
  noValidate: 1,
  open: 0,
  optimum: 0,
  pattern: 0,
  placeholder: 0,
  playsInline: 1,
  poster: 0,
  preload: 0,
  profile: 0,
  radioGroup: 1,
  readOnly: 1,
  referrerPolicy: 1,
  rel: 0,
  required: 0,
  reversed: 0,
  role: 0,
  rows: 0,
  rowSpan: 1,
  sandbox: 0,
  scope: 0,
  scoped: 0,
  scrolling: 0,
  seamless: 0,
  selected: 0,
  shape: 0,
  size: 0,
  sizes: 0,
  span: 0,
  spellCheck: 1,
  src: 0,
  srcDoc: 1,
  srcLang: 1,
  srcSet: 1,
  start: 0,
  step: 0,
  style: 0,
  summary: 0,
  tabIndex: 1,
  target: 0,
  title: 0,
  type: 0,
  useMap: 1,
  value: 0,
  width: 0,
  wmode: 0,
  wrap: 0,
  about: 0,
  accentHeight: 1,
  'accent-height': 'accentHeight',
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 1,
  'alignment-baseline': 'alignmentBaseline',
  allowReorder: 1,
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 1,
  'arabic-form': 'arabicForm',
  ascent: 0,
  attributeName: 1,
  attributeType: 1,
  autoReverse: 1,
  azimuth: 0,
  baseFrequency: 1,
  baselineShift: 1,
  'baseline-shift': 'baselineShift',
  baseProfile: 1,
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 1,
  capHeight: 1,
  'cap-height': 'capHeight',
  clip: 0,
  clipPath: 1,
  'clip-path': 'clipPath',
  clipPathUnits: 1,
  clipRule: 1,
  'clip-rule': 'clipRule',
  color: 0,
  colorInterpolation: 1,
  'color-interpolation': 'colorInterpolation',
  colorInterpolationFilters: 1,
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorProfile: 1,
  'color-profile': 'colorProfile',
  colorRendering: 1,
  'color-rendering': 'colorRendering',
  contentScriptType: 1,
  contentStyleType: 1,
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  datatype: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 1,
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 1,
  'dominant-baseline': 'dominantBaseline',
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 1,
  elevation: 0,
  enableBackground: 1,
  'enable-background': 'enableBackground',
  end: 0,
  exponent: 0,
  externalResourcesRequired: 1,
  fill: 0,
  fillOpacity: 1,
  'fill-opacity': 'fillOpacity',
  fillRule: 1,
  'fill-rule': 'fillRule',
  filter: 0,
  filterRes: 1,
  filterUnits: 1,
  floodOpacity: 1,
  'flood-opacity': 'floodOpacity',
  floodColor: 1,
  'flood-color': 'floodColor',
  focusable: 0,
  fontFamily: 1,
  'font-family': 'fontFamily',
  fontSize: 1,
  'font-size': 'fontSize',
  fontSizeAdjust: 1,
  'font-size-adjust': 'fontSizeAdjust',
  fontStretch: 1,
  'font-stretch': 'fontStretch',
  fontStyle: 1,
  'font-style': 'fontStyle',
  fontVariant: 1,
  'font-variant': 'fontVariant',
  fontWeight: 1,
  'font-weight': 'fontWeight',
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 1,
  'glyph-name': 'glyphName',
  glyphOrientationHorizontal: 1,
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphOrientationVertical: 1,
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphRef: 1,
  gradientTransform: 1,
  gradientUnits: 1,
  hanging: 0,
  horizAdvX: 1,
  'horiz-adv-x': 'horizAdvX',
  horizOriginX: 1,
  'horiz-origin-x': 'horizOriginX',
  ideographic: 0,
  imageRendering: 1,
  'image-rendering': 'imageRendering',
  in2: 0,
  in: 0,
  inlist: 0,
  intercept: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  k: 0,
  kernelMatrix: 1,
  kernelUnitLength: 1,
  kerning: 0,
  keyPoints: 1,
  keySplines: 1,
  keyTimes: 1,
  lengthAdjust: 1,
  letterSpacing: 1,
  'letter-spacing': 'letterSpacing',
  lightingColor: 1,
  'lighting-color': 'lightingColor',
  limitingConeAngle: 1,
  local: 0,
  markerEnd: 1,
  'marker-end': 'markerEnd',
  markerHeight: 1,
  markerMid: 1,
  'marker-mid': 'markerMid',
  markerStart: 1,
  'marker-start': 'markerStart',
  markerUnits: 1,
  markerWidth: 1,
  mask: 0,
  maskContentUnits: 1,
  maskUnits: 1,
  mathematical: 0,
  mode: 0,
  numOctaves: 1,
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 1,
  'overline-position': 'overlinePosition',
  overlineThickness: 1,
  'overline-thickness': 'overlineThickness',
  paintOrder: 1,
  'paint-order': 'paintOrder',
  panose1: 0,
  'panose-1': 'panose1',
  pathLength: 1,
  patternContentUnits: 1,
  patternTransform: 1,
  patternUnits: 1,
  pointerEvents: 1,
  'pointer-events': 'pointerEvents',
  points: 0,
  pointsAtX: 1,
  pointsAtY: 1,
  pointsAtZ: 1,
  prefix: 0,
  preserveAlpha: 1,
  preserveAspectRatio: 1,
  primitiveUnits: 1,
  property: 0,
  r: 0,
  radius: 0,
  refX: 1,
  refY: 1,
  renderingIntent: 1,
  'rendering-intent': 'renderingIntent',
  repeatCount: 1,
  repeatDur: 1,
  requiredExtensions: 1,
  requiredFeatures: 1,
  resource: 0,
  restart: 0,
  result: 0,
  results: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  security: 0,
  seed: 0,
  shapeRendering: 1,
  'shape-rendering': 'shapeRendering',
  slope: 0,
  spacing: 0,
  specularConstant: 1,
  specularExponent: 1,
  speed: 0,
  spreadMethod: 1,
  startOffset: 1,
  stdDeviation: 1,
  stemh: 0,
  stemv: 0,
  stitchTiles: 1,
  stopColor: 1,
  'stop-color': 'stopColor',
  stopOpacity: 1,
  'stop-opacity': 'stopOpacity',
  strikethroughPosition: 1,
  'strikethrough-position': 'strikethroughPosition',
  strikethroughThickness: 1,
  'strikethrough-thickness': 'strikethroughThickness',
  string: 0,
  stroke: 0,
  strokeDasharray: 1,
  'stroke-dasharray': 'strokeDasharray',
  strokeDashoffset: 1,
  'stroke-dashoffset': 'strokeDashoffset',
  strokeLinecap: 1,
  'stroke-linecap': 'strokeLinecap',
  strokeLinejoin: 1,
  'stroke-linejoin': 'strokeLinejoin',
  strokeMiterlimit: 1,
  'stroke-miterlimit': 'strokeMiterlimit',
  strokeWidth: 1,
  'stroke-width': 'strokeWidth',
  strokeOpacity: 1,
  'stroke-opacity': 'strokeOpacity',
  suppressContentEditableWarning: 1,
  suppressHydrationWarning: 1,
  surfaceScale: 1,
  systemLanguage: 1,
  tableValues: 1,
  targetX: 1,
  targetY: 1,
  textAnchor: 1,
  'text-anchor': 'textAnchor',
  textDecoration: 1,
  'text-decoration': 'textDecoration',
  textLength: 1,
  textRendering: 1,
  'text-rendering': 'textRendering',
  to: 0,
  transform: 0,
  typeof: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 1,
  'underline-position': 'underlinePosition',
  underlineThickness: 1,
  'underline-thickness': 'underlineThickness',
  unicode: 0,
  unicodeBidi: 1,
  'unicode-bidi': 'unicodeBidi',
  unicodeRange: 1,
  'unicode-range': 'unicodeRange',
  unitsPerEm: 1,
  'units-per-em': 'unitsPerEm',
  unselectable: 0,
  vAlphabetic: 1,
  'v-alphabetic': 'vAlphabetic',
  values: 0,
  vectorEffect: 1,
  'vector-effect': 'vectorEffect',
  version: 0,
  vertAdvY: 1,
  'vert-adv-y': 'vertAdvY',
  vertOriginX: 1,
  'vert-origin-x': 'vertOriginX',
  vertOriginY: 1,
  'vert-origin-y': 'vertOriginY',
  vHanging: 1,
  'v-hanging': 'vHanging',
  vIdeographic: 1,
  'v-ideographic': 'vIdeographic',
  viewBox: 1,
  viewTarget: 1,
  visibility: 0,
  vMathematical: 1,
  'v-mathematical': 'vMathematical',
  vocab: 0,
  widths: 0,
  wordSpacing: 1,
  'word-spacing': 'wordSpacing',
  writingMode: 1,
  'writing-mode': 'writingMode',
  x1: 0,
  x2: 0,
  x: 0,
  xChannelSelector: 1,
  xHeight: 1,
  'x-height': 'xHeight',
  xlinkActuate: 1,
  'xlink:actuate': 'xlinkActuate',
  xlinkArcrole: 1,
  'xlink:arcrole': 'xlinkArcrole',
  xlinkHref: 1,
  'xlink:href': 'xlinkHref',
  xlinkRole: 1,
  'xlink:role': 'xlinkRole',
  xlinkShow: 1,
  'xlink:show': 'xlinkShow',
  xlinkTitle: 1,
  'xlink:title': 'xlinkTitle',
  xlinkType: 1,
  'xlink:type': 'xlinkType',
  xmlBase: 1,
  'xml:base': 'xmlBase',
  xmlLang: 1,
  'xml:lang': 'xmlLang',
  xmlns: 0,
  'xml:space': 'xmlSpace',
  xmlnsXlink: 1,
  'xmlns:xlink': 'xmlnsXlink',
  xmlSpace: 1,
  y1: 0,
  y2: 0,
  y: 0,
  yChannelSelector: 1,
  z: 0,
  zoomAndPan: 1
};


/***/ }),

/***/ "./node_modules/sort-es/lib/index.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/sort-es/lib/index.esm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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




/***/ }),

/***/ "./node_modules/strip-dom-tags/index.js":
/*!**********************************************!*\
  !*** ./node_modules/strip-dom-tags/index.js ***!
  \**********************************************/
/***/ ((module) => {

let domParser = null

const stripNode = (node, whitelistedTags, whitelistedAttributes) => {
  let content = node.nodeValue
  if (node.childNodes.length > 0) {
    content = [...node.childNodes]
      .map(element => stripNode(element, whitelistedTags, whitelistedAttributes))
      .join('')
  }

  // Can be `null`-ish
  content = content ? content : ''

  if (whitelistedTags.includes(node.nodeName.toUpperCase())) {
    let attributes = ''
    if (node.attributes.length > 0) {
      ;[...node.attributes].forEach(attribute => {
        if (whitelistedAttributes.includes(attribute.name.toUpperCase())) {
          // No stupid shit in the attributes please
          if (
            !attribute.value.startsWith('javascript:') && // eslint-disable-line no-script-url
            attribute.value.indexOf('"') === -1 &&
            attribute.value.indexOf('\n') === -1
          ) {
            attributes += ` ${attribute.name}="${attribute.value}"`
          }
        }
      })
    }

    return content
      ? `<${node.nodeName}${attributes}>${content}</${node.nodeName}>`
      : `<${node.nodeName}${attributes}/>`
  }

  return content
}

/**
 * Strips passed HTML to only allowed tags and attributes
 *
 * @param {String} html The HTML to strip.
 * @param {String[]} Allowed tags, ie. ['b', 'img']
 * @param {String[]} List of allowed attributes on the tags, ie. ['src']. Starting javascript: will ALWAYS be stripped
 */
const stripTags = (html, whitelistedTags = [], whitelistedAttributes = []) => {
  domParser = domParser || new DOMParser()
  const doc = domParser.parseFromString(html, 'text/html')

  const stripped = stripNode(
    doc.body,
    whitelistedTags.map(tag => tag.toUpperCase()),
    whitelistedAttributes.map(attr => attr.toUpperCase()),
  )

  return stripped
}

module.exports = stripTags


/***/ }),

/***/ "./node_modules/style-to-js/cjs/index.js":
/*!***********************************************!*\
  !*** ./node_modules/style-to-js/cjs/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var style_to_object_1 = __importDefault(__webpack_require__(/*! style-to-object */ "./node_modules/style-to-object/cjs/index.js"));
var utilities_1 = __webpack_require__(/*! ./utilities */ "./node_modules/style-to-js/cjs/utilities.js");
/**
 * Parses CSS inline style to JavaScript object (camelCased).
 */
function StyleToJS(style, options) {
    var output = {};
    if (!style || typeof style !== 'string') {
        return output;
    }
    (0, style_to_object_1.default)(style, function (property, value) {
        // skip CSS comment
        if (property && value) {
            output[(0, utilities_1.camelCase)(property, options)] = value;
        }
    });
    return output;
}
exports["default"] = StyleToJS;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/style-to-js/cjs/utilities.js":
/*!***************************************************!*\
  !*** ./node_modules/style-to-js/cjs/utilities.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.camelCase = void 0;
var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9-]+$/;
var HYPHEN_REGEX = /-([a-z])/g;
var NO_HYPHEN_REGEX = /^[^-]+$/;
var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
/**
 * Checks whether to skip camelCase.
 */
var skipCamelCase = function (property) {
    return !property ||
        NO_HYPHEN_REGEX.test(property) ||
        CUSTOM_PROPERTY_REGEX.test(property);
};
/**
 * Replacer that capitalizes first character.
 */
var capitalize = function (match, character) {
    return character.toUpperCase();
};
/**
 * Replacer that removes beginning hyphen of vendor prefix property.
 */
var trimHyphen = function (match, prefix) { return "".concat(prefix, "-"); };
/**
 * CamelCases a CSS property.
 */
var camelCase = function (property, options) {
    if (options === void 0) { options = {}; }
    if (skipCamelCase(property)) {
        return property;
    }
    property = property.toLowerCase();
    if (options.reactCompat) {
        // `-ms` vendor prefix should not be capitalized
        property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
    }
    else {
        // for non-React, remove first hyphen so vendor prefix is not capitalized
        property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
    }
    return property.replace(HYPHEN_REGEX, capitalize);
};
exports.camelCase = camelCase;
//# sourceMappingURL=utilities.js.map

/***/ }),

/***/ "./node_modules/style-to-object/cjs/index.js":
/*!***************************************************!*\
  !*** ./node_modules/style-to-object/cjs/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var inline_style_parser_1 = __importDefault(__webpack_require__(/*! inline-style-parser */ "./node_modules/inline-style-parser/index.js"));
/**
 * Parses inline style to object.
 *
 * @param style - Inline style.
 * @param iterator - Iterator.
 * @returns - Style object or null.
 *
 * @example Parsing inline style to object:
 *
 * ```js
 * import parse from 'style-to-object';
 * parse('line-height: 42;'); // { 'line-height': '42' }
 * ```
 */
function StyleToObject(style, iterator) {
    var styleObject = null;
    if (!style || typeof style !== 'string') {
        return styleObject;
    }
    var declarations = (0, inline_style_parser_1.default)(style);
    var hasIterator = typeof iterator === 'function';
    declarations.forEach(function (declaration) {
        if (declaration.type !== 'declaration') {
            return;
        }
        var property = declaration.property, value = declaration.value;
        if (hasIterator) {
            iterator(property, value, declaration);
        }
        else if (value) {
            styleObject = styleObject || {};
            styleObject[property] = value;
        }
    });
    return styleObject;
}
exports["default"] = StyleToObject;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/html-react-parser/esm/index.mjs":
/*!******************************************************!*\
  !*** ./node_modules/html-react-parser/esm/index.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Comment: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.Comment),
/* harmony export */   Element: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.Element),
/* harmony export */   ProcessingInstruction: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.ProcessingInstruction),
/* harmony export */   Text: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   attributesToProps: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.attributesToProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   domToReact: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.domToReact),
/* harmony export */   htmlToDOM: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.htmlToDOM)
/* harmony export */ });
/* harmony import */ var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/index.js */ "./node_modules/html-react-parser/lib/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_index_js__WEBPACK_IMPORTED_MODULE_0__["default"] || _lib_index_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/weekly-meetings-list/block.json":
/*!*********************************************!*\
  !*** ./src/weekly-meetings-list/block.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/meetings-table-block","version":"0.1.0","title":"Weekly Meetings Block","category":"widgets","icon":"editor-table","description":"Add a block to show a table of on-going weekly meetings. Some examples could be for a book club, 12 Step group, meditation group, or another type of religious studies group.","attributes":{"tableTitle":{"type":"string","default":""},"citiesArr":{"type":"array","default":[]},"groupTypesArr":{"type":"array","default":[]},"dayOfWeekHeading":{"type":"string","default":"Day of Week"},"timeHeading":{"type":"string","default":"Time"},"cityHeading":{"type":"string","default":"City"},"groupTypeHeading":{"type":"string","default":"Group Type"},"meetingNameHeading":{"type":"string","default":"Meeting Name"},"groupInfoHeading":{"type":"string","default":"Address / Remote Group and<br />Contact Information"}},"example":{},"supports":{"html":false,"inserter":true,"multiple":true},"textdomain":"meetings-table-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"weekly-meetings-list/index": 0,
/******/ 			"weekly-meetings-list/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkweekly_meetings_list_block"] = globalThis["webpackChunkweekly_meetings_list_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["weekly-meetings-list/style-index"], () => (__webpack_require__("./src/weekly-meetings-list/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map