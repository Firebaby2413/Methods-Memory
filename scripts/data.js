const pageData = {
  array: {
    methods: [
      {
        id: "arrayLengthMethod",
        frontTitle: "Array Methods",
        backTitle: "array.length",
        backDescription:
          "<p>Returns the length property (size) of an array.</p>",
      },
      {
        id: "arrayToStringMethod",
        frontTitle: "Array Methods",
        backTitle: "array.toString()",
        backDescription:
          "<p>Returns the elements of an array as a comma separated string.</p>",
      },
      {
        id: "arrayAtMethod",
        frontTitle: "Array Methods",
        backTitle: "array.at()",
        backDescription: "<p>Returns an indexed element from an array.</p>",
      },
      {
        id: "arrayJoinMethod",
        frontTitle: "Array Methods",
        backTitle: "array.join()",
        backDescription:
          "<p>Joins all array elements into a string.</p><p>With this method, you can specify the separator.</p>",
      },
      {
        id: "arrayPopMethod",
        frontTitle: "Array Methods",
        backTitle: "array.pop()",
        backDescription:
          "<p>Removes the last element from an array.</p><p> Returns the value that was `popped out`.</p>",
      },
      {
        id: "arrayPushMethod",
        frontTitle: "Array Methods",
        backTitle: "array.push()",
        backDescription: "Adds a new element to an array (at the end).",
      },
      {
        id: "arrayShiftMethod",
        frontTitle: "Array Methods",
        backTitle: "array.shift()",
        backDescription:
          "<p>Removes the first array element and `shifts` all other elements to a lower index.</p><p>Returns the value that was shifted out.</p>",
      },
      {
        id: "arrayUnshiftMethod",
        frontTitle: "Array Methods",
        backTitle: "array.unshift()",
        backDescription:
          "<p>Adds a new element to an array (at the beginning) and `unshifts` older elements.</p><p>Returns the new array length.</p>",
      },
      {
        id: "arrayDeleteMethod",
        frontTitle: "Array Methods",
        backTitle: "array.delete()",
        backDescription:
          "<p>Using delete() leaves undefined holes in an array.</p><p>It is recommended to use array.pop() or array.shift() instead.</p>",
      },
      {
        id: "arrayConcatMethod",
        frontTitle: "Array Methods",
        backTitle: "array.concat()",
        backDescription:
          "<p>Creates a new array by merging (concatenating) existing arrays.</p><p>Does not change the existing arrays, but returns a new array.</p>",
      },
      {
        id: "arrayCopyWithinMethod",
        frontTitle: "Array Methods",
        backTitle: "array.copyWithin()",
        backDescription:
          "<p>Copies array methods to another position in an array.</p><p>Overwrites the existing values, does not add items to the array, does not change the length of the array.</p>",
      },
      {
        id: "arrayFlatMethod",
        frontTitle: "Array Methods",
        backTitle: "array.flat()",
        backDescription:
          "<p>Creates a new array with sub-array elements concatenated to a specified depth.</p>",
      },
      {
        id: "arraySliceMethod",
        frontTitle: "Array Methods",
        backTitle: "array.slice()",
        backDescription:
          "<p>Slices out a piece of an array into a new array.</p><p>Creates a new array and does not remove any elements from the source array.</p>",
      },
      {
        id: "arraySpliceMethod",
        frontTitle: "Array Methods",
        backTitle: "array.splice()",
        backDescription:
          "<p>Can be used to add new items to an array</p><p>1st parameter defines where new elements should be added, second defines how many should be removed, rest are elements to be added.</p>",
      },
      {
        id: "arrayToSplicedMethod",
        frontTitle: "Array Methods",
        backTitle: "array.toSpliced()",
        backDescription:
          "<p>This method creates a new array , keeping the original array unchanged.</p>",
      },
    ],
    examples: [
      {
        id: "arrayLengthExample",
        frontTitle: "Array Methods",
        backTitle: "fruits.length",
        backDescription:
          "<p>const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];</p><p>fruits.length = 3</p>",
      },
      {
        id: "arrayToStringExample",
        frontTitle: "Array Methods",
        backTitle: "fruits.toString()",
        backDescription:
          "<p>const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];</p><p>let myList = fruits.toString();</p><p>Banana, Orange, Apple, Mango</p>",
      },
      {
        id: "arrayAtExample",
        frontTitle: "Array Methods",
        backTitle: "const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];",
        backDescription:
          "<p>let fruit = fruits.at(2);</p><p>fruits.at(2) === fruits[2];</p>",
      },
      {
        id: "arrayJoinExample",
        frontTitle: "Array Methods",
        backTitle: "const fruits = ['Banana', 'Orange', 'Apple', 'Mango']",
        backDescription:
          "<p>fruits.join(' * ');</p><p>const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];</p>",
      },
      {
        id: "arrayPopExample",
        frontTitle: "Array Methods",
        backTitle: "const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];",
        backDescription: "<p>fruits.pop()</p><p>'Mango'</p>",
      },
      {
        id: "arrayPushExample",
        frontTitle: "Array Methods",
        backTitle: "const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];",
        backDescription:
          "<p>fruits.push('Kiwi');</p><p>['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi'];</p>",
      },
      {
        id: "arrayShiftExample",
        frontTitle: "Array Methods",
        backTitle: "const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];",
        backDescription: "<p>let fruit = fruits.shift();</p><p>'Banana'</p>",
      },
      {
        id: "arrayUnshiftExample",
        frontTitle: "Array Methods",
        backTitle: "const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];",
        backDescription:
          "<p>fruits.unshift('Lemon');</p><p>['Lemon', 'Banana', 'Orange', 'Apple', 'Mango']</p>",
      },
      {
        id: "arrayDeleteExample",
        frontTitle: "Array Methods",
        backTitle: "const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];",
        backDescription:
          "<p>delete fruits[0];</p><p>[undefined, 'Orange', 'Apple', 'Mango']</p>",
      },
      {
        id: "arrayConcatExample",
        frontTitle: "Array Methods",
        backTitle: "const myChildren = myGirls.concat(myBoys);",
        backDescription:
          "<p>const myGirls = ['Cecilie', 'Lone'];</p><p>const myBoys = ['Emil', 'Tobias', 'Linus'];</p><p>['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus'];</p>",
      },
      {
        id: "arrayCopyWithinExample",
        frontTitle: "Array Methods",
        backTitle: "const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];",
        backDescription:
          "<p>fruits.copyWithin(2, 0);</p><p>['Banana', 'Orange', 'Banana', 'Orange'];</p>",
      },
      {
        id: "arrayFlatExample",
        frontTitle: "Array Methods",
        backTitle: "const myArr = [[1,2],[3,4],[5,6]];",
        backDescription:
          "<p>const newArr = myArr.flat();</p><p>[1, 2, 3, 4, 5, 6]</p>",
      },
      {
        id: "arraySliceExample",
        frontTitle: "Array Methods",
        backTitle:
          "const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];",
        backDescription:
          "<p>const citrus = fruits.slice(1);</p><p>['Orange', 'Lemon', 'Apple', 'Mango'];</p>",
      },
      {
        id: "arraySpliceExample",
        frontTitle: "Array Methods",
        backTitle: "const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];",
        backDescription:
          "<p>fruits.splice(2, 0, 'Lemon', 'Kiwi');</p><p>['Banana', 'Orange','Lemon', 'Kiwi', 'Apple', 'Mango'];</p>",
      },
      {
        id: "arrayToSplicedExample",
        frontTitle: "Array Methods",
        backTitle: "const months = ['Jan', 'Feb', 'Mar', 'Apr'];",
        backDescription:
          "<p>const spliced = months.toSpliced(0, 1);</p><p>['Feb', 'Mar', 'Apr'];</p>",
      },
    ],
  },
  date: {
    methods: [
      {
        id: "newDateMethod",
        frontTitle: "Date Methods",
        backTitle: "new Date() Method",
        backDescription:
          "<p>Creates a new date object with the current date and time</p>",
      },
      {
        id: "dateConstructorPropertyMethod",
        frontTitle: "Date Methods",
        backTitle: "Date.constructor",
        backDescription:
          "<p>Returns the function that created the Date Prototype</p>",
      },
      {
        id: "getDateMethod",
        frontTitle: "Date Methods",
        backTitle: "getDate()",
        backDescription:
          "<p>Returns the day of the month (1 to 31) of a date.</p>",
      },
      {
        id: "getDayMethod",
        frontTitle: "Date Methods",
        backTitle: "getDay()",
        backDescription:
          "<p>Returns the day of the week (from 0 to 6) of a date.</p>",
      },
      {
        id: "getFullYearMethod",
        frontTitle: "Date Methods",
        backTitle: "getFullYear()",
        backDescription: "<p>Returns the year of a date</p>",
      },
      {
        id: "getHoursMethod",
        frontTitle: "Date Methods",
        backTitle: "getHours()",
        backDescription: "<p>Returns the hour (from 0-23).</p>",
      },
      {
        id: "getMillisecondsMethod",
        frontTitle: "Date Methods",
        backTitle: "getMilliseconds()",
        backDescription: "<p>Returns the milliseconds of a date</p>",
      },
      {
        id: "getMinutesMethod",
        frontTitle: "Date Methods",
        backTitle: "getMinutes()",
        backDescription: "<p>Returns the minutes of a date.</p>",
      },
      {
        id: "getMonthMethod",
        frontTitle: "Date Methods",
        backTitle: "getMonth()",
        backDescription: "<p>Returns the month (from 0-11).</p>",
      },
      {
        id: "getSecondsMethod",
        frontTitle: "Date Methods",
        backTitle: "getSeconds()",
        backDescription: "<p>Returns the seconds of a date.</p>",
      },
      {
        id: "getTimeMethod",
        frontTitle: "Date Methods",
        backTitle: "getTime()",
        backDescription:
          "<p>Returns the number of milliseconds since January 1, 1970.</p>",
      },
      {
        id: "getTimezoneOffsetMethod",
        frontTitle: "Date Methods",
        backTitle: "getTimezoneOffset()",
        backDescription:
          "<p>Returns the difference between UTC time and local time, in minutes.</p>",
      },
      {
        id: "getUTCDateMethod",
        frontTitle: "Date Methods",
        backTitle: "getUTCDate()",
        backDescription:
          "<p>Returns the day of the month of a date, according to UTC.</p>",
      },
      {
        id: "getUTCDayMethod",
        frontTitle: "Date Methods",
        backTitle: "getUTCDay()",
        backDescription:
          "<p>Returns the day of the week (from 0 to 6), according to UTC.</p>",
      },
      {
        id: "getUTCFullYearMethod",
        frontTitle: "Date Methods",
        backTitle: "getUTCFullYear()",
        backDescription: "<p>Returns the year of a date, according to UTC.</p>",
      },
      {
        id: "getUTCHoursMethod",
        frontTitle: "Date Methods",
        backTitle: "getUTCHours()",
        backDescription: "<p>Returns the hour of a date, according to UTC.</p>",
      },
      {
        id: "getUTCMillisecondsMethod",
        frontTitle: "Date Methods",
        backTitle: "getUTCMilliseconds()",
        backDescription: "<p>Returns the milliseconds of a date.</p>",
      },
      {
        id: "getUTCMinutesMethod",
        frontTitle: "Date Methods",
        backTitle: "getUTCMinutes()",
        backDescription:
          "<p>Returns the minutes of a date, according to UTC.</p>",
      },
      {
        id: "getUTCMonthMethod",
        frontTitle: "Date Methods",
        backTitle: "getUTCMonth()",
        backDescription:
          "<p>Returns the month (from 0 to 11) of a date, according to UTC.</p>",
      },
      {
        id: "getUTCSecondsMethod",
        frontTitle: "Date Methods",
        backTitle: "getUTCSeconds()",
        backDescription:
          "<p>Returns the seconds of a Date, according to universal time.</p>",
      },
      {
        id: "nowMethod",
        frontTitle: "Date Methods",
        backTitle: "Date.now()",
        backDescription:
          "<p>Returns the number of milliseconds since January 1, 1970 00:00:00 UTC.</p>",
      },
      {
        id: "parseMethod",
        frontTitle: "Date Methods",
        backTitle: "Date.parse()",
        backDescription:
          "<p>Parses a date string and returns the number of milliseconds since midnight January 1, 1970.</p>",
      },
      {
        id: "setDateMethod",
        frontTitle: "Date Methods",
        backTitle: "setDate()",
        backDescription: "<p>Sets the day of the month of a date.</p>",
      },
      {
        id: "setFullYearMethod",
        frontTitle: "Date Methods",
        backTitle: "setFullYear()",
        backDescription: "<p>Sets the year of a date object.</p>",
      },
      {
        id: "setHoursMethod",
        frontTitle: "Date Methods",
        backTitle: "setHours()",
        backDescription: "<p>Sets the hour of a date object.</p>",
      },
      {
        id: "setMillisecondsMethod",
        frontTitle: "Date Methods",
        backTitle: "setMilliseconds()",
        backDescription: "<p>Sets the milliseconds of a date object</p>",
      },
      {
        id: "setMinutesMethod",
        frontTitle: "Date Methods",
        backTitle: "setMinutes()",
        backDescription: "<p>Sets the minutes of a date object.</p>",
      },
      {
        id: "setMonthMethod",
        frontTitle: "Date Methods",
        backTitle: "setMonth()",
        backDescription: "<p>Sets the month of a date object.</p>",
      },
      {
        id: "setSecondsMethod",
        frontTitle: "Date Methods",
        backTitle: "setSeconds()",
        backDescription: "<p>Sets the seconds of a date object.</p>",
      },
      {
        id: "setTimeMethod",
        frontTitle: "Date Methods",
        backTitle: "setTime()",
        backDescription:
          "<p>Sets a date by adding milliseconds to January 1, 1970.</p>",
      },
      {
        id: "setUTCDateMethod",
        frontTitle: "Date Methods",
        backTitle: "setDateUTC()",
        backDescription:
          "<p>Sets the date (according to UTC) of a date object.</p>",
      },
      {
        id: "setUTCFullYearMethod",
        frontTitle: "Date Methods",
        backTitle: "setUTCFullYear()",
        backDescription:
          "<p>Sets the year (according to UTC) of a date object.</p>",
      },
      {
        id: "setUTCHoursMethod",
        frontTitle: "Date Methods",
        backTitle: "setUTCHours()",
        backDescription:
          "<p>Sets the hour (according to UTC) of a date object.</p>",
      },
      {
        id: "setUTCMillisecondsMethod",
        frontTitle: "Date Methods",
        backTitle: "setUTCMilliseconds()",
        backDescription:
          "<p>Sets the milliseconds (according to UTC time) of a date object.</p>",
      },
      {
        id: "setUTCMinutesMethod",
        frontTitle: "Date Methods",
        backTitle: "setUTCMinutes()",
        backDescription:
          "<p>Sets the minutes (according to UTC time) of a date object.</p>",
      },
      {
        id: "setUTCMonthMethod",
        frontTitle: "Date Methods",
        backTitle: "setUTCMonth()",
        backDescription:
          "<p>Sets the month (according to UTC time) of a date object.</p>",
      },
      {
        id: "setUTCSecondsMethod",
        frontTitle: "Date Methods",
        backTitle: "setUTCSeconds()",
        backDescription:
          "<p>Sets the seconds (according to UTC time) of a date object.</p>",
      },
      {
        id: "toDateStringMethod",
        frontTitle: "Date Methods",
        backTitle: "toDateString()",
        backDescription:
          "<p>Returns the date of a date object as a readable string.</p>",
      },
      {
        id: "toISOStringMethod",
        frontTitle: "Date Methods",
        backTitle: "toISOString()",
        backDescription:
          "<p>Returns the date as string, using ISO standard.</p>",
      },
      {
        id: "toJSONMethod",
        frontTitle: "Date Methods",
        backTitle: "toJSON()",
        backDescription:
          "<p>Returns the date as a string, using JSON date formatting.</p>",
      },
      {
        id: "toLocaleDateStringMethod",
        frontTitle: "Date Methods",
        backTitle: "toLocaleDateString()",
        backDescription:
          "<p>Returns the date (not the time) of a date, as a string, using locale conventions.</p>",
      },
      {
        id: "toLocaleTimeStringMethod",
        frontTitle: "Date Methods",
        backTitle: "toLocaleTimeString()",
        backDescription:
          "<p>Returns the time portion of a date, as a string, using locale conventions.</p>",
      },
      {
        id: "toLocaleStringMethod",
        frontTitle: "Date Methods",
        backTitle: "toLocaleString()",
        backDescription:
          "<p>Returns a date as a string, using locale settings.</p>",
      },
      {
        id: "toStringMethod",
        frontTitle: "Date Methods",
        backTitle: "toString()",
        backDescription: "<p>Returns the date object as a string.</p>",
      },
      {
        id: "toTimeStringMethod",
        frontTitle: "Date Methods",
        backTitle: "toTimeString()",
        backDescription:
          "<p>Returns the time portion of a date object as a string.</p>",
      },
      {
        id: "toUTCStringMethod",
        frontTitle: "Date Methods",
        backTitle: "toUTCString()",
        backDescription:
          "<p>Returns a date object as a string, according to UTC</p>",
      },
      {
        id: "UTCMethod",
        frontTitle: "Date Methods",
        backTitle: "Date.UTC()",
        backDescription:
          "<p>Returns the number of milliseconds between a date and January 1, 1970, according to UTC</p>",
      },
      {
        id: "valueOfMethod",
        frontTitle: "Date Methods",
        backTitle: "valueOf()",
        backDescription: "<p>Returns the primitive value of a date object.</p>",
      },
    ],
    examples: [
      {
        id: "newDateExample",
        frontTitle: "Date Methods",
        backTitle: "const time = new Date()",
        backDescription:
          "<p>Tue Aug 05 2025 15:43:29 GMT-0400 (Eastern Daylight Time)",
      },
      {
        id: "dateConstructorPropertyExample",
        frontTitle: "Date Methods",
        backTitle: "function Date() {[native code]}",
        backDescription:
          "<p>const d = new Date()</p><p>let text = d.constructor</p>",
      },
      {
        id: "getDateExample",
        frontTitle: "Date Methods",
        backTitle: "let day = d.getDate();",
        backDescription: "<p>5</>",
      },
      {
        id: "getDayExample",
        frontTitle: "Date Method",
        backTitle: "let day = d.getDay()",
        backDescription: "<p>2</p>",
      },
      {
        id: "getFullYearExample",
        frontTitle: "Date Methods",
        backTitle: "let year = d.getFullYear();",
        backDescription: "<p>2025</p>",
      },
      {
        id: "getHoursExample",
        frontTitle: "Date Methods",
        backTitle: "let hour = d.getHours();",
        backDescription: "<p>17</p>",
      },
      {
        id: "getMillisecondsExample",
        frontTitle: "Date Methods",
        backTitle: "let ms = d.getMilliseconds();",
        backDescription: "<p>413</p>",
      },
      {
        id: "getMinutesExample",
        frontTitle: "Date Methods",
        backTitle: "let minutes = d.getMinutes();",
        backDescription: "<p>59</p>",
      },
      {
        id: "getMonthExample",
        frontTitle: "Date Methods",
        backTitle: "let month = d.getMonth()",
        backDescription: "<p>7</p>",
      },
      {
        id: "getSecondsExample",
        frontTitle: "Date Methods",
        backTitle: "let seconds = d.getSeconds();",
        backDescription: "<p>15</>",
      },
      {
        id: "getTimeExample",
        frontTitle: "Date Methods",
        backTitle: "let time = d.getTime();",
        backDescription: "<p>1754432002986</p>",
      },
      {
        id: "getTimezoneOffsetExample",
        frontTitle: "Date Methods",
        backTitle: "let diff = d.getTimezoneOffset();",
        backDescription: "<p>240</p>",
      },
      {
        id: "getUTCDateExample",
        frontTitle: "Date Methods",
        backTitle: "let day = d.getUTCDate();",
        backDescription: "<p>5</p>",
      },
      {
        id: "getUTCDayExample",
        frontTitle: "Date Methods",
        backTitle: "let day = d.getUTCDay();",
        backDescription: "<p>2</p>",
      },
      {
        id: "getUTCFullYearExample",
        frontTitle: "Date Methods",
        backTitle: "let year = getUTCFullYear();",
        backDescription: "<p>2025</p>",
      },
      {
        id: "getUTCHoursExample",
        frontTitle: "Date Methods",
        backTitle: "let hours = getUTCHours();",
        backDescription: "<p>22</p>",
      },
      {
        id: "getUTCMillisecondsExample",
        frontTitle: "getUTCMilliseconds()",
        backTitle: "let ms = d.getUTCMilliseconds();",
        backDescription: "<p>662</p>",
      },
      {
        id: "getUTCMinutesExample",
        frontTitle: "Date Methods",
        backTitle: "let minutes = d.getUTCMinutes();",
        backDescription: "<p>59</p>",
      },
      {
        id: "getUTCMonthExample",
        frontTitle: "Date Methods",
        backTitle: "let month = d.getUTCMonth();",
        backDescription: "<p>7</p>",
      },
      {
        id: "getUTCSecondsExample",
        frontTitle: "Date Methods",
        backTitle: "let seconds = d.getUTCSeconds();",
        backDescription: "<p>26</p>",
      },
      {
        id: "nowExample",
        frontTitle: "Date Methods",
        backTitle: "let ms = Date.now();",
        backDescription: "<p>1754435205768</p>",
      },
      {
        id: "parseExample",
        frontTitle: "Date Methods",
        backTitle: "let ms = Date.parse('August 5, 2025')",
        backDescription: "<p>1754366400000</p>",
      },
      {
        id: "setDateExample",
        frontTitle: "Date Methods",
        backTitle: "d.setDate(20)",
        backDescription:
          "<p>Mon Jan 20 2025 19:00:00 GMT-0500 (Eastern Standard Time)</p>",
      },
      {
        id: "setFullYearExample",
        frontTitle: "Date Methods",
        backTitle: "d.setFullYear(2020)",
        backDescription:
          "<p>Tue Jan 14 2020 19:00:00 GMT-0500 (Eastern Standard Time)</p>",
      },
      {
        id: "setHoursExample",
        frontTitle: "Date Methods",
        backTitle: "d.setHours(15)",
        backDescription:
          "<p>Tue Jan 14 2025 15:00:00 GMT-0500 (Eastern Standard Time)</p>",
      },
      {
        id: "setMillisecondsExample",
        frontTitle: "Date Methods",
        backTitle: "d.setMilliseconds(192)",
        backDescription: "<p>192</p>",
      },
      {
        id: "setMinutesExample",
        frontTitle: "Date Methods",
        backTitle: "d.setMinutes(17)",
        backDescription: "<p>17</p>",
      },
      {
        id: "setMonthExample",
        frontTitle: "Date Methods",
        backTitle: "d.setMonth(4)",
        backDescription:
          "<p>Wed May 14 2025 19:00:00 GMT-0400 (Eastern Daylight Time)</p>",
      },
      {
        id: "setSecondsExample",
        frontTitle: "Date Methods",
        backTitle: "d.setSeconds(35)",
        backDescription:
          "<p>Tue Jan 14 2025 19:00:00 GMT-0500 (Eastern Standard Time)",
      },
      {
        id: "setTimeExample",
        frontTitle: "Date Methods",
        backTitle: "d.setTime(1332403882588)",
        backDescription:
          "<p>Thu March 22 2012 04:11:22 GMT-0400 (Eastern Standard Time)</p>",
      },
      {
        id: "setUTCDateExample",
        frontTitle: "Date Methods",
        backTitle: "d.setUTCDate(25)",
        backDescription:
          "<p>Fri JAn 24 2025 19:00:00 GMT-0500 (Eastern Standard Time)</p>",
      },
      {
        id: "setUTCFullYearExample",
        frontTitle: "Date Methods",
        backTitle: "d.setUTCFullYear(2015)",
        backDescription:
          "<p>Wed Jan 14 2015 19:00:00 GMT-0500 (Eastern Standard Time)</p>",
      },
      {
        id: "setUTCHoursExample",
        frontTitle: "Date Methods",
        backTitle: "d.setUTCHours(15)",
        backDescription:
          "<p>Wed Jan 15 2025 10:00:00 GMT-0500 (Eastern Standard Time)",
      },
      {
        id: "setUTCMillisecondsExample",
        frontTitle: "Date Methods",
        backTitle: "d.setMilliseconds(192)",
        backDescription: "<p>192</p>",
      },
      {
        id: "setUTCMinutesExample",
        frontTitle: "Date Methods",
        backTitle: "d.setUTCMinutes(17)",
        backDescription:
          "<p>Tue Jan 14 2025 19:17:00 GMT-0500 (Eastern Standard Time)</p>",
      },
      {
        id: "setUTCMonthExample",
        frontTitle: "Date Methods",
        backTitle: "d.setUTCMonth(4)",
        backDescription:
          "<p>Wed May 14 2025 20:00:00 GMT-0400 (Eastern Daylight Time)</p>",
      },
      {
        id: "setUTCSecondsExample",
        frontTitle: "Date Methods",
        backTitle: "d.setsUTCSeconds(35)",
        backDescription:
          "<p>Tue Jan 14 2025 19:00:35 GMT-0500 (Eastern Standard Time)</p>",
      },
      {
        id: "toDateStringExample",
        frontTitle: "Date Methods",
        backTitle: "let text = d.toDateString();",
        backDescription: "<p>Wed Aug 06 2025</p>",
      },
      {
        id: "toISOStringExample",
        frontTitle: "Date Methods",
        backTitle: "let text = d.toISOString();",
        backDescription: "<p>2025-08-06T21:21:45.234Z</p>",
      },
      {
        id: "toJSONExample",
        frontTitle: "Date Methods",
        backTitle: "let text = d.toJSON();",
        backDescription: "<p>2025-08-06T21:25:06.449Z</p>",
      },
      {
        id: "toLocaleDateStringExample",
        frontTitle: "Date Methods",
        backTitle: "let text = d.toLocaleDateString();",
        backDescription: "<p>8/6/2025</p>",
      },
      {
        id: "toLocaleTimeStringExample",
        frontTitle: "Date Methods",
        backTitle: "let text = d.toLocaleTimeString();",
        backDescription: "<p>5:51:19PM</p>",
      },
      {
        id: "toLocaleStringExample",
        frontTitle: "Date Methods",
        backTitle: "let text = d.toLocaleString();",
        backDescription: "<p>8/6/2025, 5:53:45 PM</p>",
      },
      {
        id: "toStringExample",
        frontTitle: "Date Methods",
        backTitle: "let text = d.toString();",
        backDescription:
          "<p>Wed Aug 06 2025 17:56:43 GMT-0400 (Eastern Daylight Time)</p>",
      },
      {
        id: "toTimeStringExample",
        frontTitle: "Date Methods",
        backTitle: "let text = toTimeString();",
        backDescription: "<p>19:05:49 GMT-0400 (Eastern Daylight Time)</p>",
      },
      {
        id: "toUTCStringExample",
        frontTitle: "Date Methods",
        backTitle: "let text = d.toUTCString();",
        backDescription: "<p>Wed, 06 Aug 2025 23:08:15 GMT</p>",
      },
      {
        id: "UTCExample",
        frontTitle: "Date Methods",
        backTitle: "let ms = Date.UTC(2020, 02, 30);",
        backDescription: "<p>1585526400000</p>",
      },
      {
        id: "valueOfExample",
        frontTitle: "Date Methods",
        backTitle: "let ms = d.valueOf();",
        backDescription: "<p>1754522028647</p>",
      },
    ],
  },
  map: {
    methods: [
      {
        id: "createMapMethod",
        frontTitle: "Map Methods",
        backTitle: "const variableName = new Map([insert array items]);",
        backDescription: "<p>Create a map from an array.</p>",
      },
      {
        id: "clearMapMethod",
        frontTitle: "Map Methods",
        backTitle: "clear()",
        backDescription: "<p>Removes all the elements of a Map<p/>",
      },
      {
        id: "deleteMapMethod",
        frontTitle: "Map Methods",
        backTitle: "delete()",
        backDescription: "<p>Deletes an element from a Map</p>",
      },
      {
        id: "entriesMapMethod",
        frontTitle: "Map Methods",
        backTitle: "entries()",
        backDescription:
          "<p>Returns an iterator object with the [key, value] pairs in a Map.</p>",
      },
      {
        id: "forEachMapMethod",
        frontTitle: "Map Methods",
        backTitle: "map.forEach(callback)",
        backDescription:
          "<p>Invokes a function for each key/value pair in a Map.</p>",
      },
      {
        id: "getMapMethod",
        frontTitle: "Map Methods",
        backTitle: "get()",
        backDescription: "<p>Method gets the value of a key in a Map.</p>",
      },
      {
        id: "groupByMapMethod",
        frontTitle: "Map Methods",
        backTitle: "Map.groupBy()",
        backDescription:
          "<p>Groups elements of an object according to string values returned from a callback function.</p>",
      },
      {
        id: "hasMapMethod",
        frontTitle: "Map Methods",
        backTitle: "has()",
        backDescription: "<p>Returns true if a key exists in a map</p>",
      },
      {
        id: "keysMapMethod",
        frontTitle: "Map Methods",
        backTitle: "keys()",
        backDescription: "<p>Returns an iterator object with the keys in a map.</p>",
      },
      {
        id: "setMapMethod",
        frontTitle: "Map Methods",
        backTitle: "set()",
        backDescription: "<p>Adds elements to a Map</p>",
      },
      {
        id: "sizePropertyMapMethod",
        frontTitle: "Map Methods",
        backTitle: ".size property",
        backDescription: "<p>Returns the number of elements in a Map.</p>",
      },
      {
        id: "valuesMapMethod",
        frontTitle: "Map Methods",
        backTitle: "values()",
        backDescription: "<p>Returns an iterator object with the values in a map.</p>",
      },
    ],
    examples: [
      {
        id: "createMapExample",
        frontTitle: "Map Methods",
        backTitle:
          "const fruits = new Map([ ['apples', 500], ['bananas', 300], ['oranges', 200], ]);",
        backDescription:
          "<p>Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }</p>",
      },
      {
        id: "clearMapExample",
        frontTitle: "Map Methods",
        backTitle: "fruits.clear();",
        backDescription: "<p>Map(0) {}</p>",
      },
      {
        id: "deleteMapExample",
        frontTitle: "Map Methods",
        backTitle: "fruits.delete('apples')",
        backDescription: "<p>Map(2) {'bananas' => 300, 'oranges' => 200}",
      },
      {
        id: "entriesMapExample",
        frontTitle: "Map Methods",
        backTitle: "fruits.entries();",
        backDescription:
          "<p>fruits.entires = { [ 'apples', 500 ], [ 'bananas', 300 ],[ 'oranges', 200 ] }</p>",
      },
      {
        id: "forEachMapExample",
        frontTitle: "Map Methods",
        backTitle: "fruits.forEach(function(value, key) {text += key + ' = ' + val ' <br >'})",
        backDescription: "<p>apples = 500, bananas = 300, oranges = 200</p>",
      },
      {
        id: "getMapExample",
        frontTitle: "Map Methods",
        backTitle: "let value = fruits.get('apples');",
        backDescription: "<p>500</p>",
      },
      {
        id: "groupByMapExample",
        frontTitle: "Map Methods",
        backTitle:
          "function myCallback({ quantity }) {return quantity > 200 ? 'ok' : 'low';}",
        backDescription: "<p>const result = Map.groupBy(fruits, myCallback);</p>",
      },
      {
        id: "hasMapExample",
        frontTitle: "Map Methods",
        backTitle: "fruits.has('apples');",
        backDescription: "<p>true</p>",
      },
      {
        id: "keysMapExample",
        frontTitle: "Map Methods",
        backTitle: "for (const x of fruits.keys()) {text += x + '<br>';}",
        backDescription: "<p>apples, bananas, oranges</p>",
      },
      {
        id: "setMapExample",
        frontTitle: "Map Methods",
        backTitle: "const fruits = new Map();",
        backDescription: "<p>fruits.set('apples', 500);</p>"
      },
      {
        id: "sizePropertyMapExample",
        frontTitle: "Map Methods",
        backTitle: "fruits.size;",
        backDescription: "<p>3</p>",
      },
      {
        id: "valuesMapExample",
        frontTitle: "Map Methods",
        backTitle: "for (const x of fruits.values()) { text += x + '<br>';}",
        backDescription: "<p>500, 300, 200</p>",
      },
    ],
  },
  math: { //42//
    methods: [
      {
        id: "",
        frontTitle: "",
        backTitle: "",
        backDescription: "",
      },
    ],
    examples: [ //42//
      {
        id: "",
        frontTitle: "",
        backTitle: "",
        backDescription: "",
      },
    ],
  },
  number: { 
    methods: [ //22//
      {
        id: "",
        frontTitle: "",
        backTitle: "",
        backDescription: "",
      },
    ],
    examples: [ //22//
      {
        id: "",
        frontTitle: "",
        backTitle: "",
        backDescription: "",
      },
    ],
  },
  object: {
    methods: [ //22//
      {
        id: "",
        frontTitle: "",
        backTitle: "",
        backDescription: "",
      },
    ],
    examples: [ //22//
      {
        id: "",
        frontTitle: "",
        backTitle: "",
        backDescription: "",
      },
    ],
  },
  set: { 
    methods: [ //16//
      {
        id: "",
        frontTitle: "",
        backTitle: "",
        backDescription: "",
      },
    ],
    examples: [ //16//
      {
        id: "",
        frontTitle: "",
        backTitle: "",
        backDescription: "",
      },
    ],
  },
  string: {
    methods: [ //37//
      {
        id: "",
        frontTitle: "",
        backTitle: "",
        backDescription: "",
      },
    ],
    examples: [ //37//
      {
        id: "",
        frontTitle: "",
        backTitle: "",
        backDescription: "",
      },
    ],
  },
};


function createMemoryCard(obj, flipHandler) {
  const cardArea = document.getElementById("card-area");
  const cardDiv = document.createElement("div");
  cardDiv.id = obj.id;
  cardDiv.classList = "card";

  // Extract method name for matching (remove "Method" or "Example" suffix)
  const methodName = obj.id.replace(/(Method|Example)$/, "");
  cardDiv.dataset.symbol = methodName;

  const frontCardDiv = document.createElement("div");
  const backCardDiv = document.createElement("div");

  frontCardDiv.classList = "front";
  backCardDiv.classList = "back";

  const frontCardTitle = document.createElement("h3");
  frontCardTitle.classList = "method-type";
  frontCardTitle.textContent = obj.frontTitle;

  frontCardDiv.append(frontCardTitle);

  const backCardTitle = document.createElement("h3");
  backCardTitle.classList = "method-type";
  backCardTitle.textContent = obj.backTitle;

  backCardDiv.append(backCardTitle);
  backCardDiv.innerHTML = backCardDiv.innerHTML + obj.backDescription;

  cardDiv.append(frontCardDiv, backCardDiv);

  // Add click event listener
  if (flipHandler) {
    cardDiv.addEventListener("click", flipHandler);
  }

  cardArea.append(cardDiv);
}

export { createMemoryCard, pageData };
