/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/weekly-meetings-list-child/edit.js":
/*!************************************************!*\
  !*** ./src/weekly-meetings-list-child/edit.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/utilities */ "./src/weekly-meetings-list-child/js/utilities.js");
/* harmony import */ var _js_components_groupTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/components/groupTypes */ "./src/weekly-meetings-list-child/js/components/groupTypes.js");
/* harmony import */ var _js_components_meetingTimes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/components/meetingTimes */ "./src/weekly-meetings-list-child/js/components/meetingTimes.js");
/* harmony import */ var _weekly_meetings_list_block_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../weekly-meetings-list/block.json */ "./src/weekly-meetings-list/block.json");









function Edit({
  attributes,
  setAttributes
}) {
  const {
    day,
    mtgStartTime,
    mtgEndTime,
    city,
    locationGroupType,
    accessGroupType,
    genderGroupType,
    additionalGroupType,
    meetingName,
    remoteMtgInfo,
    remoteMtgInfoClass,
    inPersonMtgInfo,
    inPersonMtgInfoClass,
    contactInfo,
    showDetailsToggle,
    moreDetailsClass,
    moreDetails
  } = attributes;
  const utilities = new _js_utilities__WEBPACK_IMPORTED_MODULE_4__["default"]();
  const daysArr = utilities.generateDaysArr();
  const capitalizedDay = utilities.convertToCapitalDay(day);
  const timeArr = utilities.generateTimesArr(5);
  const locationGroupTypesArr = utilities.locationGroupTypeArr();
  const accessGroupTypesArr = utilities.accessGroupTypeArr();
  const genderGroupTypesArr = utilities.genderGroupTypeArr();
  const parentJsonHeadingAttrs = utilities.parentJsonHeadingAttrs(_weekly_meetings_list_block_json__WEBPACK_IMPORTED_MODULE_7__);
  const {
    dayOfWeekHeading,
    timeHeading,
    cityHeading,
    groupTypeHeading,
    meetingNameHeading,
    groupInfoHeading
  } = parentJsonHeadingAttrs;
  const dayChange = val => {
    setAttributes({
      day: val
    });
  };
  const startOnHourChange = val => {
    setAttributes({
      mtgStartTime: val
    });
  };
  const endOnHourChange = val => {
    setAttributes({
      mtgEndTime: val
    });
  };
  const cityChange = val => {
    setAttributes({
      city: val
    });
  };
  const locationGroupTypeChange = val => {
    setAttributes({
      locationGroupType: val
    });
  };
  const accessGroupTypeChange = val => {
    setAttributes({
      accessGroupType: val
    });
  };
  const genderGroupTypeChange = val => {
    setAttributes({
      genderGroupType: val
    });
  };
  const additionalGroupTypeChange = val => {
    setAttributes({
      additionalGroupType: val
    });
  };
  const meetingNameChange = val => {
    setAttributes({
      meetingName: val
    });
  };
  const remoteMtgInfoChange = val => {
    setAttributes({
      remoteMtgInfo: val
    });
  };
  const inPersonMtgInfoChange = val => {
    setAttributes({
      inPersonMtgInfo: val
    });
  };
  const contactInfoChange = val => {
    setAttributes({
      contactInfo: val
    });
  };
  const showDetailsToggleChange = () => {
    if (!showDetailsToggle) {
      setAttributes({
        showDetailsToggle: true
      });
      setAttributes({
        moreDetailsClass: "show"
      });
      return;
    }
    setAttributes({
      showDetailsToggle: false
    });
    setAttributes({
      moreDetailsClass: "hide"
    });
  };
  const moreDetailsChange = val => {
    setAttributes({
      moreDetails: val
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const locationGroupTypeClean = utilities.removeStrPrefix(locationGroupType);
    switch (locationGroupTypeClean) {
      case "Remote":
        setAttributes({
          remoteMtgInfoClass: "show"
        });
        setAttributes({
          inPersonMtgInfoClass: "hide"
        });
        break;
      case "Hybrid (remote & in-person)":
        setAttributes({
          remoteMtgInfoClass: "show"
        });
        setAttributes({
          inPersonMtgInfoClass: "show"
        });
        break;
      case "In-Person":
        setAttributes({
          remoteMtgInfoClass: "hide"
        });
        setAttributes({
          inPersonMtgInfoClass: "show"
        });
    }
  }, [locationGroupType]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)(),
    "data-filter-day": day,
    "data-filter-city": city,
    "data-location-group-type": locationGroupType,
    "data-access-group-type": accessGroupType,
    "data-gender-group-type": genderGroupType,
    "data-additional-group-type": additionalGroupType,
    "data-start-time": mtgStartTime
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Meeting Day of Week"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Select Meeting Day of Week",
    value: day,
    options: daysArr,
    onChange: dayChange
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Meeting Start Time"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Select Meeting Start",
    value: mtgStartTime,
    options: timeArr,
    onChange: startOnHourChange
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Meeting End Time"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Select Meeting End",
    value: mtgEndTime,
    options: timeArr,
    onChange: endOnHourChange
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Meeting City"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: city,
    onChange: cityChange
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Meeting Location Type"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Select Meeting Location Type",
    value: locationGroupType,
    options: locationGroupTypesArr,
    onChange: locationGroupTypeChange
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Meeting Access Type"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Select Meeting Access Type",
    value: accessGroupType,
    options: accessGroupTypesArr,
    onChange: accessGroupTypeChange
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Meeting Gender Type"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Select Meeting Gender Type",
    value: genderGroupType,
    options: genderGroupTypesArr,
    onChange: genderGroupTypeChange
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "OPTIONAL: Additional Group Type"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Example: 'LGBTQIA' or 'Sexual Anorexia'",
    value: additionalGroupType,
    onChange: additionalGroupTypeChange
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Meeting Name"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: meetingName,
    onChange: meetingNameChange
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Show Meeting Details Editor? (toggle on to show optional 'More Details' field, like to add directions to enter building for in-person meeting)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: "Show Meeting Details Editor?",
    checked: showDetailsToggle,
    onChange: showDetailsToggleChange
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    "data-heading-label": dayOfWeekHeading
  }, capitalizedDay), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    "data-heading-label": timeHeading
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_js_components_meetingTimes__WEBPACK_IMPORTED_MODULE_6__["default"], {
    mtgStartTime: mtgStartTime,
    mtgEndTime: mtgEndTime
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    "data-heading-label": cityHeading
  }, city), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    "data-heading-label": groupTypeHeading
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_js_components_groupTypes__WEBPACK_IMPORTED_MODULE_5__["default"], {
    locationGroupType: locationGroupType,
    accessGroupType: accessGroupType,
    genderGroupType: genderGroupType,
    additionalGroupType: additionalGroupType
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    "data-heading-label": meetingNameHeading
  }, meetingName), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    "data-heading-label": groupInfoHeading
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: remoteMtgInfoClass
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Remote Meeting Information")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "p",
    value: remoteMtgInfo,
    onChange: remoteMtgInfoChange,
    className: `remote-mtg-info ${remoteMtgInfoClass}`,
    placeholder: "Add Remote Meeting Information here"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: inPersonMtgInfoClass
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "In-Person Meeting Information")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "p",
    value: inPersonMtgInfo,
    onChange: inPersonMtgInfoChange,
    className: `in-person-mtg-info ${inPersonMtgInfoClass}`,
    placeholder: "Add In-Person Meeting Information here"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Contact Information")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "p",
    value: contactInfo,
    onChange: contactInfoChange,
    className: "contact-info",
    placeholder: "Add Contact Information for the Meeting here"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: moreDetailsClass
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "More Details")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "p",
    value: moreDetails,
    onChange: moreDetailsChange,
    className: `more-details ${moreDetailsClass}`,
    placeholder: "Add More Details for meeting here (like instructions for where to find in-person meeting in building)"
  })));
}

/***/ }),

/***/ "./src/weekly-meetings-list-child/js/components/groupTypes.js":
/*!********************************************************************!*\
  !*** ./src/weekly-meetings-list-child/js/components/groupTypes.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GroupTypes; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/weekly-meetings-list-child/js/utilities.js");


function GroupTypes({
  locationGroupType,
  accessGroupType,
  genderGroupType,
  additionalGroupType
}) {
  const utilities = new _utilities__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const locationGroupTypeClean = utilities.removeStrPrefix(locationGroupType);
  const accessGroupTypeClean = utilities.removeStrPrefix(accessGroupType);
  const genderGroupTypeClean = utilities.removeStrPrefix(genderGroupType);
  if (locationGroupTypeClean.length > 0 || accessGroupTypeClean.length > 0 || genderGroupTypeClean.length > 0 || additionalGroupType.length > 0) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, locationGroupTypeClean.length > 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, locationGroupTypeClean) : null, accessGroupTypeClean.length > 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, accessGroupTypeClean) : null, genderGroupTypeClean.length > 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, genderGroupTypeClean) : null, additionalGroupType.length > 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, additionalGroupType) : null);
  }
  return null;
}

/***/ }),

/***/ "./src/weekly-meetings-list-child/js/components/meetingTimes.js":
/*!**********************************************************************!*\
  !*** ./src/weekly-meetings-list-child/js/components/meetingTimes.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MeetingTimes; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/weekly-meetings-list-child/js/utilities.js");


function MeetingTimes({
  mtgStartTime,
  mtgEndTime
}) {
  const utilities = new _utilities__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const startTimeWithAmPm = utilities.convertToAmPm(mtgStartTime);
  const endTimeWithAmPm = utilities.convertToAmPm(mtgEndTime);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, mtgStartTime ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, startTimeWithAmPm, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null)) : null, mtgEndTime ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "to", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), endTimeWithAmPm) : null);
}

/***/ }),

/***/ "./src/weekly-meetings-list-child/js/utilities.js":
/*!********************************************************!*\
  !*** ./src/weekly-meetings-list-child/js/utilities.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Utilities; }
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

/***/ "./src/weekly-meetings-list-child/save.js":
/*!************************************************!*\
  !*** ./src/weekly-meetings-list-child/save.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/utilities */ "./src/weekly-meetings-list-child/js/utilities.js");
/* harmony import */ var _js_components_groupTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/components/groupTypes */ "./src/weekly-meetings-list-child/js/components/groupTypes.js");
/* harmony import */ var _js_components_meetingTimes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/components/meetingTimes */ "./src/weekly-meetings-list-child/js/components/meetingTimes.js");
/* harmony import */ var _weekly_meetings_list_block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../weekly-meetings-list/block.json */ "./src/weekly-meetings-list/block.json");

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */






/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
function Save({
  attributes
}) {
  const {
    day,
    mtgStartTime,
    mtgEndTime,
    city,
    locationGroupType,
    accessGroupType,
    genderGroupType,
    additionalGroupType,
    meetingName,
    remoteMtgInfo,
    remoteMtgInfoClass,
    inPersonMtgInfo,
    inPersonMtgInfoClass,
    contactInfo,
    showDetailsToggle,
    moreDetailsClass,
    moreDetails
  } = attributes;
  const utilities = new _js_utilities__WEBPACK_IMPORTED_MODULE_2__["default"]();
  const capitalizedDay = utilities.convertToCapitalDay(day);
  const parentJsonHeadingAttrs = utilities.parentJsonHeadingAttrs(_weekly_meetings_list_block_json__WEBPACK_IMPORTED_MODULE_5__);
  const {
    dayOfWeekHeading
  } = parentJsonHeadingAttrs;
  const {
    timeHeading
  } = parentJsonHeadingAttrs;
  const {
    cityHeading
  } = parentJsonHeadingAttrs;
  const {
    groupTypeHeading
  } = parentJsonHeadingAttrs;
  const {
    meetingNameHeading
  } = parentJsonHeadingAttrs;
  const {
    groupInfoHeading
  } = parentJsonHeadingAttrs;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(),
    "data-filter-day": day,
    "data-filter-city": city,
    "data-location-group-type": locationGroupType,
    "data-access-group-type": accessGroupType,
    "data-gender-group-type": genderGroupType,
    "data-additional-group-type": additionalGroupType,
    "data-start-time": mtgStartTime
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    "data-heading-label": dayOfWeekHeading
  }, capitalizedDay), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    "data-heading-label": timeHeading
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_js_components_meetingTimes__WEBPACK_IMPORTED_MODULE_4__["default"], {
    mtgStartTime: mtgStartTime,
    mtgEndTime: mtgEndTime
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    "data-heading-label": cityHeading
  }, city), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    "data-heading-label": groupTypeHeading
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_js_components_groupTypes__WEBPACK_IMPORTED_MODULE_3__["default"], {
    locationGroupType: locationGroupType,
    accessGroupType: accessGroupType,
    genderGroupType: genderGroupType,
    additionalGroupType: additionalGroupType
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    "data-heading-label": meetingNameHeading
  }, meetingName), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    "data-heading-label": groupInfoHeading
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: remoteMtgInfoClass
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Remote Meeting Information")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: remoteMtgInfo,
    className: `remote-mtg-info ${remoteMtgInfoClass}`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: inPersonMtgInfoClass
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "In-Person Meeting Information")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: inPersonMtgInfo,
    className: `in-person-mtg-info ${inPersonMtgInfoClass}`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Contact Information")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: contactInfo,
    className: "contact-info"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: moreDetailsClass
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "More Details")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: moreDetails,
    className: `more-details ${moreDetailsClass}`
  })));
}

/***/ }),

/***/ "./node_modules/strip-dom-tags/index.js":
/*!**********************************************!*\
  !*** ./node_modules/strip-dom-tags/index.js ***!
  \**********************************************/
/***/ (function(module) {

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

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/weekly-meetings-list-child/block.json":
/*!***************************************************!*\
  !*** ./src/weekly-meetings-list-child/block.json ***!
  \***************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/meetings-table-row-block","version":"0.1.0","title":"Weekly Meeting Table Row Block","category":"widgets","icon":"editor-table","parent":["create-block/meetings-table-block"],"attributes":{"day":{"type":"string","default":""},"mtgStartTime":{"type":"string","default":""},"mtgEndTime":{"type":"string","default":""},"city":{"type":"string","default":""},"locationGroupType":{"type":"string","default":""},"accessGroupType":{"type":"string","default":""},"genderGroupType":{"type":"string","default":""},"additionalGroupType":{"type":"string","default":""},"meetingName":{"type":"string","default":""},"remoteMtgInfo":{"type":"string","source":"html","selector":".remote-mtg-info","default":""},"inPersonMtgInfo":{"type":"string","source":"html","selector":".in-person-mtg-info","default":""},"contactInfo":{"type":"string","source":"html","selector":".contact-info","default":""},"moreDetails":{"type":"string","source":"html","selector":".more-details","default":""},"remoteMtgInfoClass":{"type":"string","default":"hide"},"inPersonMtgInfoClass":{"type":"string","default":"hide"},"moreDetailsClass":{"type":"string","default":"hide"},"showDetailsToggle":{"type":"boolean","default":false}},"description":"Add table rows to list classes or meetings.","example":{},"supports":{"html":false,"inserter":true,"multiple":true},"textdomain":"meetings-table-row-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ }),

/***/ "./src/weekly-meetings-list/block.json":
/*!*********************************************!*\
  !*** ./src/weekly-meetings-list/block.json ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/meetings-table-block","version":"0.1.0","title":"Weekly Meetings Block","category":"widgets","icon":"editor-table","description":"Add a block to show a table of on-going weekly meetings. Some examples could be for a book club, 12 Step group, meditation group, or another type of religious studies group.","attributes":{"blockId":{"type":"string"},"tableTitle":{"type":"string","default":""},"citiesArr":{"type":"array","default":[]},"groupTypesArr":{"type":"array","default":[]},"dayOfWeekHeading":{"type":"string","default":"Day of Week"},"timeHeading":{"type":"string","default":"Time"},"cityHeading":{"type":"string","default":"City"},"groupTypeHeading":{"type":"string","default":"Group Type"},"meetingNameHeading":{"type":"string","default":"Meeting Name"},"groupInfoHeading":{"type":"string","default":"Address / Remote Group and<br />Contact Information"}},"example":{},"supports":{"html":false,"inserter":true,"multiple":true},"textdomain":"meetings-table-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************************************!*\
  !*** ./src/weekly-meetings-list-child/index.js ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/weekly-meetings-list-child/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/weekly-meetings-list-child/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/weekly-meetings-list-child/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map