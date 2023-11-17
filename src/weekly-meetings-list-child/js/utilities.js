import stripDomTags from "strip-dom-tags";

export default class Utilities {
	convertToCapitalDay(dayStr) {
		const firstLetter = dayStr.charAt(2);
		const firstLetterCap = firstLetter.toUpperCase();
		const remainingLetters = dayStr.slice(3);
		const capitalizedWord = firstLetterCap + remainingLetters;
		return capitalizedWord;
	}

	generateDaysArr() {
		let daysArr = [
			{
				value: "",
				label: "Choose day",
			},
		];

		const numDays = 7;

		const allDaysArr = [
			"monday",
			"tuesday",
			"wednesday",
			"thursday",
			"friday",
			"saturday",
			"sunday",
		];

		for (let i = 0; i < numDays; i++) {
			let numWithDay = `${i + 1}_${allDaysArr[i]}`;
			const capitalizedDay = this.convertToCapitalDay(numWithDay);

			daysArr.push({
				value: numWithDay,
				label: capitalizedDay,
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
		let timesArr = [
			{
				value: "",
				label: "Choose time",
			},
		]; // time array
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
				label: timeWithAmPm,
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
				label,
			});
		}

		return groupTypeArr;
	}

	locationGroupTypeArr() {
		let groupTypeArr = [
			{
				value: "",
				label: "Choose meeting location type",
			},
		];
		let addGroupTypesArr = [
			"Remote",
			"Hybrid (remote & in-person)",
			"In-Person",
		];
		let strPrefix = "location~";

		let newGroupTypeArr = this.blockDropdown(
			groupTypeArr,
			addGroupTypesArr,
			strPrefix
		);

		return newGroupTypeArr;
	}

	accessGroupTypeArr() {
		let groupTypeArr = [
			{
				value: "",
				label: "Choose meeting access type",
			},
		];
		let addGroupTypesArr = [
			"Open (visitors welcome)",
			"Closed (only open to those seeking help)",
		];

		let strPrefix = "access~";

		let newGroupTypeArr = this.blockDropdown(
			groupTypeArr,
			addGroupTypesArr,
			strPrefix
		);

		return newGroupTypeArr;
	}

	genderGroupTypeArr() {
		let groupTypeArr = [
			{
				value: "",
				label: "Choose meeting gender type",
			},
		];
		let addGroupTypesArr = ["Mixed (all genders)", "Women", "Men"];
		let strPrefix = "gender~";

		let newGroupTypeArr = this.blockDropdown(
			groupTypeArr,
			addGroupTypesArr,
			strPrefix
		);

		return newGroupTypeArr;
	}

	removeStrPrefix(str) {
		const strIdx = str.indexOf("~") + 1;
		const subStr = str.slice(strIdx);
		return subStr;
	}

	htmlToString(str) {
		let newStr = str.replaceAll("<br />", " ");
		newStr = stripDomTags(newStr);
		return newStr;
	}

	parentJsonHeadingAttrs(parentJson) {
		const { attributes } = parentJson;
		const dayOfWeekHeading = this.htmlToString(
			attributes?.dayOfWeekHeading?.default
		);
		const timeHeading = this.htmlToString(attributes?.timeHeading?.default);
		const cityHeading = this.htmlToString(attributes?.cityHeading?.default);
		const groupTypeHeading = this.htmlToString(
			attributes?.groupTypeHeading?.default
		);
		const meetingNameHeading = this.htmlToString(
			attributes?.meetingNameHeading?.default
		);
		const groupInfoHeading = this.htmlToString(
			attributes?.groupInfoHeading?.default
		);

		return {
			dayOfWeekHeading,
			timeHeading,
			cityHeading,
			groupTypeHeading,
			meetingNameHeading,
			groupInfoHeading,
		};
	}
}
