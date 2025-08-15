const pageData = {
  instructions: {
    methods: [
      {
        id: "instructionMethod",
        frontTitle: "Methods Group",
        backTitle: "Method name",
        backDescription: "<p>What it does</p>",
      },
    ],
    examples: [
      {
        id: "instructionExample",
        frontTitle: "Methods Group",
        backTitle: "Syntax",
        backDescription: "<p>Example</p>",
      },
    ],
  },
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
        frontTitle: "Date Methods",
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
        backDescription:
          "<p>Returns an iterator object with the keys in a map.</p>",
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
        backDescription:
          "<p>Returns an iterator object with the values in a map.</p>",
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
        backTitle:
          "fruits.forEach(function(value, key) {text += key + ' = ' + val ' <br >'})",
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
        backDescription:
          "<p>const result = Map.groupBy(fruits, myCallback);</p>",
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
        backDescription: "<p>fruits.set('apples', 500);</p>",
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
  math: {
    methods: [
      {
        id: "mathAbsoluteMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.abs()",
        backDescription: "<p>Returns the absolute value of a number.</p>",
      },
      {
        id: "mathAcosMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.acos()",
        backDescription:
          "<p>Returns the arccosine (trigonometry) (in radians) of a number, returns a value between 0 and PI, and expects a range between -1 to 1.</p>",
      },
      {
        id: "mathAcoshMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.acosh()",
        backDescription:
          "<p>Returns the hyperbolic arc-cosine of a number. If the parameter is less than 1, it returns NaN.</p>",
      },
      {
        id: "mathAsinMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.asin()",
        backDescription:
          "<p>Returns the arcsine (trigonometry) (in radians) of a number, returns a value between -PI/2 and PI/2, expects a parameter in teh range -1 to 1.</p>",
      },
      {
        id: "mathAsinhMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.asinh()",
        backDescription: "<p>Returns the hyperbolic arc-sine of a number.</p>",
      },
      {
        id: "mathAtanMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.atan()",
        backDescription:
          "<p>Returns the arctangent (trigonometry) (in radians) of a number.</p>",
      },
      {
        id: "mathAtan2Method",
        frontTitle: "Math Methods",
        backTitle: "Math.atan2()",
        backDescription:
          "<p>Returns the arctangent of a quotient of its arguments, as a numeric value between PI and -PI radians.</p>",
      },
      {
        id: "mathAtanhMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.atanh()",
        backDescription:
          "<p>Returns the hyperbolic arctangent of a number, expects a number between -1 and 1.</p>",
      },
      {
        id: "mathCbrtMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.cbrt()",
        backDescription: "<p>Returns the cubic root of a number.</p>",
      },
      {
        id: "mathCeilMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.ceil()",
        backDescription:
          "<p>Rounds a number rounded UP to the nearest integer</p>",
      },
      {
        id: "mathClz32Method",
        frontTitle: "Math Methods",
        backTitle: "Math.clz32()",
        backDescription:
          "<p>Returns the number of leading zeros in a 32-bit binary number.</p>",
      },
      {
        id: "mathCosMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.cos()",
        backDescription:
          "<p>Returns the cosine of an angel given in radians between -1 and 1, expecting the number in radians.</p>",
      },
      {
        id: "mathCoshMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.cosh()",
        backDescription: "<p>Returns the hyperbolic cosine of a number.</p>",
      },
      {
        id: "mathEMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.E",
        backDescription:
          "<p>Returns Euler's number (the base of natural logarithms), approximately 2.718.</p>",
      },
      {
        id: "mathExpMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.exp()",
        backDescription:
          "<p>Returns the value of Ex, where E is Euler's number (approximately 2.7183) and x is the number passed to it.</p>",
      },
      {
        id: "mathExpm1Method",
        frontTitle: "Math Methods",
        backTitle: "Math.expm1()",
        backDescription:
          "<p>Returns the value of Ex minus 1, where E is Euler's number (approximately 2.7183) and x is the number passed to it.</p>",
      },
      {
        id: "mathF16RoundMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.f16round()",
        backDescription:
          "<p>Returns the nearest 16-bit single precision floating point representation of a number.</p>",
      },
      {
        id: "mathFloorMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.floor()",
        backDescription: "<p>Rounds a number DOWN to the nearest integer.</p>",
      },
      {
        id: "mathFRoundMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.fround()",
        backDescription:
          "<p>Returns the nearest 32-bit single precision float representation of a number.</p>",
      },
      {
        id: "mathLN2Method",
        frontTitle: "Math Methods",
        backTitle: "Math.LN2",
        backDescription:
          "<p>Property that returns the natural logarithm of 2, usually rounded to 0.693.</p>",
      },
      {
        id: "mathLN10Method",
        frontTitle: "Math Methods",
        backTitle: "Math.LN10",
        backDescription:
          "<p>Property returns the natural logarithm of 10, usually rounded to 2.302.</p>",
      },
      {
        id: "mathLogMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.log()",
        backDescription:
          "<p>Returns the natural logarithm (base E) of a number.</p>",
      },
      {
        id: "mathLog10Method",
        frontTitle: "Math Methods",
        backTitle: "Math.log10()",
        backDescription: "<p>Returns the base-10 logarithm of a number.</p>",
      },
      {
        id: "mathLog1PMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.log1p()",
        backDescription:
          "<p>Returns the natural logarithm (base E) of 1 + a number.</p>",
      },
      {
        id: "mathLog2Method",
        frontTitle: "Math Methods",
        backTitle: "Math.log2()",
        backDescription: "<p>Returns the base 2 logarithm of a number.</p>",
      },
      {
        id: "mathLOG2EMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.LOG2E",
        backDescription:
          "<p>Property returns the base-2 logarithm of E, approximately 1.442</p>",
      },
      {
        id: "mathLOG10EMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.LOG10E",
        backDescription:
          "<p>Property returns the base-10 logarithm of E, approximately 0.434.</p>",
      },
      {
        id: "mathMaxMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.max()",
        backDescription: "<p>Returns the number with the highest value.</p>",
      },
      {
        id: "mathMinMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.min()",
        backDescription: "<p>Returns the number with the lowest value.</p>",
      },
      {
        id: "mathPIMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.PI",
        backDescription:
          "<p>Returns PI (the ratio of a circle's area to the square of its radius, approximately 3.14)</p>",
      },
      {
        id: "mathPowMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.pow()",
        backDescription:
          "<p>Returns the value of x to the power of y (xy).</p>",
      },
      {
        id: "mathRandomMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.random()",
        backDescription:
          "<p>Returns a random number between 0 (inclusive) and 1 (exclusive)</p>",
      },
      {
        id: "mathRoundMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.round()",
        backDescription: "<p>Rounds a number to the nearest integer.<p>",
      },
      {
        id: "mathSignMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.sign()",
        backDescription:
          "<p>Returns whether a number is negative, positive or zero as 1, 0, or -1.</p>",
      },
      {
        id: "MathSinMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.sin()",
        backDescription:
          "<p>Returns the sine of an angle given in radians.</p>",
      },
      {
        id: "mathSinhMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.sinh()",
        backDescription: "<p>Returns the hyperbolic sine of a number.</p>",
      },
      {
        id: "mathSqrtMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.sqrt()",
        backDescription: "<p>Returns the square root of a number.</p>",
      },
      {
        id: "mathSQRT1_2Method",
        frontTitle: "Math Methods",
        backTitle: "Math.SQRT1_2",
        backDescription:
          "<p>Property returns the square root of 1/2, approximately 0.707.</p>",
      },
      {
        id: "mathSQRT2Method",
        frontTitle: "Math Methods",
        backTitle: "Math.SQRT2",
        backDescription:
          "<p>Property returns the square root of 2, approximately 1.414.</p>",
      },
      {
        id: "mathTanMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.tan()",
        backDescription: "<p>Returns the tangent of a number.</p>",
      },
      {
        id: "mathTanHMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.tanh()",
        backDescription: "<p>Returns the hyperbolic tangent of a number.</p>",
      },
      {
        id: "mathTruncMethod",
        frontTitle: "Math Methods",
        backTitle: "Math.trunc()",
        backDescription:
          "<p>Returns the integer part of a number, removing the decimals without rounding.</p>",
      },
    ],
    examples: [
      {
        id: "mathAbsoluteExample",
        frontTitle: "Math Methods",
        backTitle: "Math.abs(-7.25)",
        backDescription: "<p>7.25</p>",
      },
      {
        id: "mathAcosExample",
        frontTitle: "Math Methods",
        backTitle: "Math.acos(-1), Math.acos(0), Math.acos(1)",
        backDescription: "<p>3.141592653589793, 1.5707963267948966, 0</p>",
      },
      {
        id: "mathAcoshExample",
        frontTitle: "Math Methods",
        backTitle: "Math.acosh(.5), Math.acosh(1), Math.acosh(2)",
        backDescription: "<p>NaN, 0, 1.3169578969248166</p>",
      },
      {
        id: "mathAsinExample",
        frontTitle: "Math Methods",
        backTitle: "Math.asin(-1), Math.asin(0), Math.asin(1)",
        backDescription: "<p>-1.5707963267948966, 0, 1.5707963267948966</p>",
      },
      {
        id: "mathAsinhExample",
        frontTitle: "Math Methods",
        backTitle: "Math.asinh(0), Math.asinh(1)",
        backDescription: "<p>0, 0.881373587019543</p>",
      },
      {
        id: "mathAtanExample",
        frontTitle: "Math Methods",
        backTitle: "Math.atan(2)",
        backDescription: "<p>1.1071487177940904</p>",
      },
      {
        id: "mathAtan2Example",
        frontTitle: "Math Methods",
        backTitle: "Math.atan2(8,4)",
        backDescription: "<p>1.1071487177940904</p>",
      },
      {
        id: "mathAtanhExample",
        frontTitle: "Math Methods",
        backTitle: "Math.atanh(0.5), Math.atanh(1), Math.atanh(-1)",
        backDescription: "<p>0.5493061443340548, Infinity, -Infinity</p>",
      },
      {
        id: "mathCbrtExample",
        frontTitle: "Math Methods",
        backTitle: "Math.cbrt(125);",
        backDescription: "<p>5</p>",
      },
      {
        id: "mathCeilExample",
        frontTitle: "Math Methods",
        backTitle: "Math.ceil(1.4)",
        backDescription: "<p>Rounds a number UP to the nearest integer.</p>",
      },
      {
        id: "mathClz32Example",
        frontTitle: "Math Methods",
        backTitle: "Math.clz32(0)",
        backDescription: "<p>32</p>",
      },
      {
        id: "mathCosExample",
        frontTitle: "Math Methods",
        backTitle: "Math.cos(0)",
        backDescription: "<p>1.00</p>",
      },
      {
        id: "mathCoshExample",
        frontTitle: "Math Methods",
        backTitle: "Math.cosh(3)",
        backDescription: "<p>10.067661995777765</p>",
      },
      {
        id: "mathEExample",
        frontTitle: "Math Methods",
        backTitle: "Math.E",
        backDescription: "<p>2.718281828459045</p>",
      },
      {
        id: "mathExpExample",
        frontTitle: "Math Methods",
        backTitle: "Math.exp(3)",
        backDescription: "<p>20.085536923187668</p>",
      },
      {
        id: "mathExpm1Example",
        frontTitle: "Math Methods",
        backTitle: "Math.expm1(3)",
        backDescription: "<p>19.085536923187668</p>",
      },
      {
        id: "mathF16RoundExample",
        frontTitle: "Math Methods",
        backTitle: "Math.f16round(2.60)",
        backDescription: "<p>2.599609375</p>",
      },
      {
        id: "mathFloorExample",
        frontTitle: "Math Methods",
        backTitle: "Math.floor(0.60)",
        backDescription: "<p>0</p>",
      },
      {
        id: "mathFRoundExample",
        frontTitle: "Math Methods",
        backTitle: "Math.fround(2.60)",
        backDescription: "<p>2.5999999046325684</p>",
      },
      {
        id: "mathLN2Example",
        frontTitle: "Math Methods",
        backTitle: "Math.LN2",
        backDescription: "<p>0.6931471805599453</p>",
      },
      {
        id: "mathLN10Example",
        frontTitle: "Math Methods",
        backTitle: "Math.LN10",
        backDescription: "<p>2.302585092994046</p>",
      },
      {
        id: "mathLogExample",
        frontTitle: "Math Methods",
        backTitle:
          "Math.log(-0), Math.log(-1), Math.log(Infinity), Math.log(-Infinity)",
        backDescription: "<p>-Infinity, NaN, Infinity</p>",
      },
      {
        id: "mathLog10Example",
        frontTitle: "Math Methods",
        backTitle: "Math.log10(2)",
        backDescription: "<p>0.3010299956639812</p>",
      },
      {
        id: "mathLog1PExample",
        frontTitle: "Math Methods",
        backTitle: "Math.log1p(2.7183)",
        backDescription: "<p>1.3132665745863341</p>",
      },
      {
        id: "mathLog2Example",
        frontTitle: "Math Methods",
        backTitle: "Math.log2(3)",
        backDescription: "<p>1.584962500721156</p>",
      },
      {
        id: "mathLOG2EExample",
        frontTitle: "Math Methods",
        backTitle: "Math.LOG2E",
        backDescription: "<p>1.4426950408889634</p>",
      },
      {
        id: "mathLOG10EExample",
        frontTitle: "Math Methods",
        backTitle: "Math.LOG10E",
        backDescription: "<p>0.4342944819032518</p>",
      },
      {
        id: "mathMaxExample",
        frontTitle: "Math Methods",
        backTitle: "Math.max(5, 10)",
        backDescription: "<p>10</p>",
      },
      {
        id: "mathMinExample",
        frontTitle: "Math Methods",
        backTitle: "Math.min(5, 10)",
        backDescription: "<p>5</p>",
      },
      {
        id: "mathPIExample",
        frontTitle: "Math Methods",
        backTitle: "Math.PI",
        backDescription: "<p>3.141592653589793</p>",
      },
      {
        id: "mathPowExample",
        frontTitle: "Math Methods",
        backTitle: "Math.pow(4, 3)",
        backDescription: "<p>64</p>",
      },
      {
        id: "mathRandomExample",
        frontTitle: "Math Methods",
        backTitle: "Math.random()",
        backDescription: "<p>0.3470616447884125</p>",
      },
      {
        id: "mathRoundExample",
        frontTitle: "Math Methods",
        backTitle: "Math.round(2.5)",
        backDescription: "<p>3</p>",
      },
      {
        id: "mathSignExample",
        frontTitle: "Math Methods",
        backTitle: "Math.sign(42)",
        backDescription: "<p>1</p>",
      },
      {
        id: "mathSinExample",
        frontTitle: "Math Methods",
        backTitle: "Math.sin(3.14)",
        backDescription: "<p>0.0015926529164868282</p>",
      },
      {
        id: "mathSinhExample",
        frontTitle: "Math Methods",
        backTitle: "Math.sinh(3)",
        backDescription: "<p>10.017874927409903</p>",
      },
      {
        id: "mathSqrtExample",
        frontTitle: "Math Methods",
        backTitle: "Math.sqrt(9)",
        backDescription: "<p>3</p>",
      },
      {
        id: "mathSQRT1_2Example",
        frontTitle: "Math Methods",
        backTitle: "Math.SQRT1_2",
        backDescription: "<p>0.7071067811865476</p>",
      },
      {
        id: "mathSQRT2Example",
        frontTitle: "Math Methods",
        backTitle: "Math.SQRT2",
        backDescription: "<p>1.4142135623730951</p>",
      },
      {
        id: "mathTanExample",
        frontTitle: "Math Methods",
        backTitle: "Math.tan(2)",
        backDescription: "<p>-2.185039863261519</p>",
      },
      {
        id: "mathTanHExample",
        frontTitle: "Math Methods",
        backTitle: "Math.tanh(1)",
        backDescription: "<p>0.7615941559557649</p>",
      },
      {
        id: "mathTruncExample",
        frontTitle: "Math Methods",
        backTitle: "Math.trunc(8.76)",
        backDescription: "<p>8</p>",
      },
    ],
  },
  number: {
    methods: [
      {
        id: "NumberConstructorMethod",
        frontTitle: "Number Methods",
        backTitle: "num.constructor",
        backDescription:
          "<p>Property returns the function that created the Number prototype.</p>",
      },
      {
        id: "numberEpsilonMethod",
        frontTitle: "Number Methods",
        backTitle: "Number.EPSILON",
        backDescription:
          "<p>Returns the difference between the smallest floating point number greater than 1 and 1.</p>",
      },
      {
        id: "numberIsFiniteMEthod",
        frontTitle: "Number Methods",
        backTitle: "Number.isFinite()",
        backDescription:
          "<p>Returns `true` if a number is a finite number.</p>",
      },
      {
        id: "numberIsIntegerMethod",
        frontTitle: "Number Methods",
        backTitle: "Number.isInteger()",
        backDescription:
          "<p>Returns `true` if a value is an integer of the datatype Number, `false` if not.</p>",
      },
      {
        id: "numberIsNaNMethod",
        frontTitle: "Number Methods",
        backTitle: "Number.isNAN()",
        backDescription:
          "<p>Returns `true` if value is NaN, and the type is a Number.</p>",
      },
      {
        id: "numberIsSafeIntegerMethod",
        frontTitle: "Number Methods",
        backTitle: "Number.isSafeInteger()",
        backDescription:
          "<p>Returns `true` if a number is a safe integer, `false` if not.</p>",
      },
      {
        id: "numberMaxSafeIntegerMethod",
        frontTitle: "Number Methods",
        backTitle: "Number.MAX_SAFE_INTEGER",
        backDescription:
          "<p>Represents the maximum safe number in JavaScript.</p>",
      },
      {
        id: "numberMinSafeIntegerMethod",
        frontTitle: "Number Methods",
        backTitle: "Number.MIN_SAFE_INTEGER",
        backDescription:
          "<p>Represents the minimum safe integer in JavaScript.</p>",
      },
      {
        id: "numberMaxValueMethod",
        frontTitle: "Number Methods",
        backTitle: "Number.MAX_VALUE",
        backDescription:
          "<p>Returns the largest number possible in JavaScript.</p>",
      },
      {
        id: "numberMinValueMethod",
        frontTitle: "Number Methods",
        backTitle: "Number.MIN_VALUE",
        backDescription: "<p>Returns the smallest number in Javascript.</p>",
      },
      {
        id: "numberNaNMethod",
        frontTitle: "Number Methods",
        backTitle: "Number.NaN",
        backDescription:
          "<p>Short for `Not-a-Number`, is a number that is not a legal number in JavaScript.</p>",
      },
      {
        id: "numberNegativeInfinityMethod",
        frontTitle: "Number Methods",
        backTitle: "Number.NEGATIVE_INFINITY",
        backDescription:
          "<p>Returns negative infinity, `a number lower than any other number`.</p>",
      },
      {
        id: "numberPositiveInfinityMethod",
        frontTitle: "Number Methods",
        backTitle: "Number.POSITIVE_INFINITY",
        backDescription:
          "<p>Returns positive infinity, `something higher than any other number`.</p>",
      },
      {
        id: "numberParseFloatMethod",
        frontTitle: "Number Methods",
        backTitle: "Number.parseFloat()",
        backDescription:
          "<p>Parses a value as a string and returns the first number.</p>",
      },
      {
        id: "numberParseIntMethod",
        frontTitle: "Number Methods",
        backTitle: "Number.parseInt()",
        backDescription:
          "<p>Parses a value as a string and returns it as the first integer.</p>",
      },
      {
        id: "numberPrototypeMethod",
        frontTitle: "Number Methods",
        backTitle: "Number.prototype",
        backDescription:
          "<p>Property that allows you to add new properties and methods to numbers.</p>",
      },
      {
        id: "numberToExponentialMethod",
        frontTitle: "Number Methods",
        backTitle: "number.toExponential()",
        backDescription:
          "<p>Converts a number into an exponential notation.</p>",
      },
      {
        id: "numberToFixedMethod",
        frontTitle: "Number Methods",
        backTitle: "number.ToFixed()",
        backDescription:
          "<p>Converts a number to a string, rounding to a specified number of decimals.</p>",
      },
      {
        id: "numberToLocaleStringMethod",
        frontTitle: "Number Methods",
        backTitle: "number.toLocaleString()",
        backDescription:
          "<p>Returns a number as a string, using local language format.</p>",
      },
      {
        id: "numberToPrecisionMethod",
        frontTitle: "Number Methods",
        backTitle: "number.toPRecision()",
        backDescription:
          "<p>Formats a number to a specified length, adding a decimal point and nulls as needed to create the specified length.</p>",
      },
      {
        id: "numberToString",
        frontTitle: "Number Methods",
        backTitle: "number.toString()",
        backDescription: "<p>Returns a number as a string.</p>",
      },
      {
        id: "numberValueOfMethod",
        frontTitle: "Number Methods",
        backTitle: "number.valueOf",
        backDescription: "<p>Returns the primitive value of a number.</p>",
      },
    ],
    examples: [
      {
        id: "numberConstructorExample",
        frontTitle: "Number Methods",
        backTitle: "let text = num.constructor",
        backDescription: "<p>function Number() { [native code] }</p>",
      },
      {
        id: "numberEpsilonExample",
        frontTitle: "Number Methods",
        backTitle: "Number.EPSILON",
        backDescription: "<p>2.220446049250313e-16</p>",
      },
      {
        id: "numberIsFiniteExample",
        frontTitle: "Number Methods",
        backTitle: "Number.isFinite(123)",
        backDescription: "<p>true</p>",
      },
      {
        id: "numberIsIntegerExample",
        frontTitle: "Number Methods",
        backTitle: "Number.isInteger(123)",
        backDescription: "<p>true</p>",
      },
      {
        id: "numberIsNaNExample",
        frontTitle: "Number Methods",
        backTitle: "Number.isNaN(123)",
        backDescription: "<p>false</p>",
      },
      {
        id: "numberIsSafeIntegerExample",
        frontTitle: "Number Methods",
        backTitle: "Number.isSafeInteger(123)",
        backDescription: "<p>true</p>",
      },
      {
        id: "numberMaxSafeIntegerExample",
        frontTitle: "Number Methods",
        backTitle: "Number.MAX_SAFE_INTEGER",
        backDescription: "<p>(2^53 - 1) or 9007199254740991</p>",
      },
      {
        id: "numberMinSafeIntegerExample",
        frontTitle: "Number Methods",
        backTitle: "Number.MIN_SAFE_INTEGER",
        backDescription: "<p>-(2^53 - 1)or -9007199254740991</p>",
      },
      {
        id: "numberMaxValueExample",
        frontTitle: "Number Methods",
        backTitle: "Number.MAX_VALUE",
        backDescription: "<p>1.7976931348623157e+308</p>",
      },
      {
        id: "numberMinValueExample",
        frontTitle: "Number Methods",
        backTitle: "Number.MIN_VALUE",
        backDescription: "<p>5e-324</p>",
      },
      {
        id: "numberNaNExample",
        frontTitle: "Number Methods",
        backTitle: "Number.NaN",
        backDescription: "<p>NaN</p>",
      },
      {
        id: "numberNegativeInfinityExample",
        frontTitle: "Number Methods",
        backTitle: "Number.NEGATIVE_INFINITY",
        backDescription: "<p>-Infinity</p>",
      },
      {
        id: "numberPositiveInfinityExample",
        frontTitle: "Number Methods",
        backTitle: "Number.POSITIVE_INFINITY",
        backDescription: "<p>Infinity</p>",
      },
      {
        id: "numberParseFloatExample",
        frontTitle: "Number Methods",
        backTitle: "Number.ParseFloat(10)",
        backDescription: "<p>10</p>",
      },
      {
        id: "numberParseIntExample",
        frontTitle: "Number Methods",
        backTitle: "Number.parseInt('10')",
        backDescription: "<p>10</p>",
      },
      {
        id: "numberPrototypeExample",
        frontTitle: "Number Methods",
        backTitle: "Number.prototype.myMethod =",
        backDescription: "<p>function() {return this.valueOf() / 2;};</p>",
      },
      {
        id: "numberToExponentialExample",
        frontTitle: "Number Methods",
        backTitle: "let num = 5.56789; let n = num.toExponential()",
        backDescription: "<p>5.56789e+0</p>",
      },
      {
        id: "numberToFixedExample",
        frontTitle: "Number Methods",
        backTitle: "let num = 5.56789; let n = num.toFixed(2);",
        backDescription: "<p>6</p>",
      },
      {
        id: "numberToLocaleStringExample",
        frontTitle: "Number Methods",
        backTitle:
          "let text = num.toLocaleString('en-US', {style:'currency', currency:'USD'});",
        backDescription: "<p>$1,000,000.00</p>",
      },
      {
        id: "numberToPrecisionExample",
        frontTitle: "Number Methods",
        backTitle: "let num = 13.3714; let n = num.toPrecision(2);",
        backDescription: "<p>13</p>",
      },
      {
        id: "numberToStringExample",
        frontTitle: "Number Methods",
        backTitle: "let num = 15; let text = num.toString();",
        backDescription: "<p>15</p>",
      },
      {
        id: "numberToValueExample",
        frontTitle: "Number Methods",
        backTitle: "let num = 15; let n = num.valueOf()",
        backDescription: "<p15</p>",
      },
    ],
  },
  object: {
    methods: [
      {
        id: "objectAssignMethod",
        frontTitle: "Object Methods",
        backTitle: "assign()",
        backDescription:
          "<p>Copies properties from a source object to a target object.</p>",
      },
      {
        id: "objectConstructorMethod",
        frontTitle: "Object Methods",
        backTitle: "object.constructor",
        backDescription:
          "<p>Returns the function that created an object's prototype.</p>",
      },
      {
        id: "objectCreateMethod",
        frontTitle: "Object Methods",
        backTitle: "create()",
        backDescription:
          "<p>Returns an object created from an existing object.</p>",
      },
      {
        id: "objectDefinePropertiesMethod",
        frontTitle: "Object Methods",
        backTitle: "defineProperties()",
        backDescription: "<p>Adds or changes properties.</p>",
      },
      {
        id: "objectDefinePropertyMethod",
        frontTitle: "Object Methods",
        backTitle: "defineProperty()",
        backDescription: "<p>Adds or changes a property.</p>",
      },
      {
        id: "objectEntriesMethod",
        frontTitle: "Object Methods",
        backTitle: "entries()",
        backDescription:
          "<p>Returns an array of the key/value pairs of an object.</p>",
      },
      {
        id: "objectFreezeMethod",
        frontTitle: "Object Methods",
        backTitle: "freeze()",
        backDescription: "<p>Prevents any changes to an object.</p>",
      },
      {
        id: "objectFromEntriesMethod",
        frontTitle: "Object Methods",
        backTitle: "fromEntries()",
        backDescription:
          "<p>Returns an object created from an iterable list of key/value pairs.</p>",
      },
      {
        id: "objectGetOwnPropertyDescriptorMethod",
        frontTitle: "Object Methods",
        backTitle: "getOwnPropertyDescriptor()",
        backDescription: "<p>Returns an array of the keys of an object.</p>",
      },
      {
        id: "objectGetOwnPropertyDescriptorsMethod",
        frontTitle: "Object Methods",
        backTitle: "getOwnPropertyDescriptors()",
        backDescription: "<p>Returns an array of the keys on an object.</p>",
      },
      {
        id: "objectGetOwnPropertyNamesMethod",
        frontTitle: "Object Methods",
        backTitle: "getOwnPropertyNames()",
        backDescription: "<p>Returns an array of the keys on an object.</p>",
      },
      {
        id: "objectGroupByMethod",
        frontTitle: "Object Methods",
        backTitle: "groupBy()",
        backDescription:
          "<p>Groups object elements according to returned callback values.</p>",
      },
      {
        id: "objectIsExtensibleMethod",
        frontTitle: "Object Methods",
        backTitle: "isExtensible()",
        backDescription: "<p>Returns true if an object is extensible.</p>",
      },
      {
        id: "objectIsFrozenMethod",
        frontTitle: "Object Methods",
        backTitle: "isFrozen()",
        backDescription: "<p>Returns true if an object is frozen.</p>",
      },
      {
        id: "objectIsSealedMethod",
        frontTitle: "Object Methods",
        backTitle: "isSealed()",
        backDescription: "<p>Returns true if an object is sealed.</p>",
      },
      {
        id: "objectKeysMethod",
        frontTitle: "Object Methods",
        backTitle: "keys()",
        backDescription: "<p>Returns an array of the keys on an object.</p>",
      },
      {
        id: "objectPreventExtensionsMethod",
        frontTitle: "Object Methods",
        backTitle: "preventExtensions()",
        backDescription: "<p>Prevents adding new properties to an object.</p>",
      },
      {
        id: "objectPrototypeMethod",
        frontTitle: "Object Methods",
        backTitle: "object.prototype.key = value",
        backDescription:
          "<p>Global property that allows you to add new properties and methods to objects.</p>",
      },
      {
        id: "objectSealMethod",
        frontTitle: "Object Methods",
        backTitle: "seal()",
        backDescription:
          "<p>Prevents adding new or deleting existing object properties.</p>",
      },
      {
        id: "objectToStringMethod",
        frontTitle: "Object Methods",
        backTitle: "toString()",
        backDescription:
          "<p>Converts an object to a string and returns the result.</p>",
      },
      {
        id: "objectValueOF",
        frontTitle: "Object Methods",
        backTitle: "valueOf()",
        backDescription: "<p>Returns the primitive value of an object.</p>",
      },
      {
        id: "objectValuesMethod",
        frontTitle: "Object Methods",
        backTitle: "values()",
        backDescription:
          "<p>Returns an array of the property values of an object.</p>",
      },
    ],
    examples: [
      {
        id: "objectAssignExample",
        frontTitle: "Object Methods",
        backTitle: "const person1 = {firstName: 'John', lastName: 'Doe',};",
        backDescription:
          "<p>const person2 = {firstName: 'Anne', lastName: 'Smith'}; Object.assign(person1, person2);</p>",
      },
      {
        id: "objectConstructorExample",
        frontTitle: "Object Methods",
        backTitle: "let text = person.constructor;",
        backDescription: "<p>function Object() { [native code] }</p>",
      },
      {
        id: "objectCreateExample",
        frontTitle: "Object Methods",
        backTitle: "const person = {firstName: 'John', lastName: 'Doe',};",
        backDescription:
          "<p>const man = Object.create(person); man.firstName = 'Peter';</p>",
      },
      {
        id: "objectDefinePropertiesExample",
        frontTitle: "Object Methods",
        backTitle:
          "Object.defineProperties(person, { language: {value: 'en'}, year: {value: 'Hello'}, });",
        backDescription: "<p>en Hello</p>",
      },
      {
        id: "objectDefinePropertyExample",
        frontTitle: "Object Methods",
        backTitle: "Object.defineProperty(person, 'year, {value: '2008'});",
        backDescription: "<p>2008</p>",
      },
      {
        id: "objectEntriesExample",
        frontTitle: "Object Methods",
        backTitle: "let text = Object.entries(person)",
        backDescription:
          "<p>firstName,John,lastName,Doe,age,50,eyeColor,blue</p>",
      },
      {
        id: "objectFreezeExample",
        frontTitle: "Object Methods",
        backTitle: "Object.freeze(person);",
        backDescription:
          "<p>person.age = 51 will throw TypeError as person is read only</p>",
      },
      {
        id: "objectFromEntries",
        frontTitle: "Object Methods",
        backTitle: "Object.fromEntries(iterable);",
        backDescription:
          "<p>const fruits = [['apples': 300], ['pears': 900], ['bananas': 500]];</p>",
      },
      {
        id: "objectGetOwnPropertyDescriptorExample",
        frontTitle: "Object Methods",
        backTitle:
          "let descriptor = Object.getOwnPropertyDescriptor(person, 'age')",
        backDescription: "<p>50</p>",
      },
      {
        id: "objectGetOwnPropertyDescriptorsExample",
        frontTitle: "Object Methods",
        backTitle: "descriptors.age.value;",
        backDescription: "<p>50</p>",
      },
      {
        id: "objectGetOwnPropertyNamesExample",
        frontTitle: "Object Methods",
        backTitle: "let props = Object.getOwnPropertyNames(person);",
        backDescription: "<p>[firstName, lastName, age, eyeColor]</p>",
      },
      {
        id: "objectGroupByExample",
        frontTitle: "Object Methods",
        backTitle:
          "const fruits = [{name: 'apples', quantity: 300}, {name: 'kiwi', quantity: 150}]",
        backDescription:
          "<p>function myCallback({quantity}) { return quantity > 200 ? 'ok' : 'low'; }</p>",
      },
      {
        id: "objectIsExtensibleExample",
        frontTitle: "Object Methods",
        backTitle:
          "const person = {firstName:'John', lastName:'Doe'} Object.preventExtensions(person);",
        backDescription: "<p>false</p>",
      },
      {
        id: "objectIsFrozenExample",
        frontTitle: "Object Methods",
        backTitle: "Object.isFrozen(person)",
        backDescription: "<p>true</p>",
      },
      {
        id: "objectIsSealedExample",
        frontTitle: "Object Methods",
        backTitle: "Object.isSealed(person)",
        backDescription: "<p>true</p>",
      },
      {
        id: "objectKeysExample",
        frontTitle: "Object Methods",
        backTitle: "const keys = Object.keys(person)",
        backDescription: "<p>firstName,lastName,age,eyeColor</p>",
      },
      {
        id: "objectPreventExtensionsExample",
        frontTitle: "Object Methods",
        backTitle: "Object.preventExtensions(person);",
        backDescription: "<p>person.nationality = 'English' TypeError</p>",
      },
      {
        id: "objectPrototypeExample",
        frontTitle: "Object Methods",
        backTitle: "employee.prototype.salary = 2000;",
        backDescription: "<p>salary: 2000</p>",
      },
      {
        id: "objectSealExample",
        frontTitle: "Object Methods",
        backTitle: "Object.seal(person)",
        backDescription: "<p>delete person.age; TypeError</p>",
      },
      {
        id: "objectToStringExample",
        frontTitle: "Object Methods",
        backTitle: "const fruits = ['Banana', 'Orange']",
        backDescription: "<p>fruits.toString() = Banana, Orange; </p>",
      },
      {
        id: "objectValueOfExample",
        frontTitle: "Object Methods",
        backTitle: "const fruits = ['Banana', 'Orange']; fruits.valueOf();",
        backDescription: "<p>Banana, Orange</p>",
      },
      {
        id: "objectValuesExample",
        frontTitle: "Object Methods",
        backTitle: "const person = {firstName: 'John', lastName: 'Doe'}",
        backDescription: "<p>Object.values(person) John, Doe</p>",
      },
    ],
  },
  set: {
    methods: [
      {
        id: "setConstructorMethod",
        frontTitle: "Set Methods",
        backTitle: "new Set(iterable)",
        backDescription: "<p>Constructor that creates a Set object.</p>",
      },
      {
        id: "setAddMethod",
        frontTitle: "Set Methods",
        backTitle: "add()",
        backDescription: "<p>Inserts a new element into a set.</p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
    ],
    examples: [
      {
        id: "setConstructorExample",
        frontTitle: "Set Methods",
        backTitle: "const letters = new Set(['a', 'b', 'c']);",
        backDescription: "<p>['a', 'b', 'c']</p>",
      },
      {
        id: "setAddExample",
        frontTitle: "Set Methods",
        backTitle: "letters.add('d')",
        backDescription: "<p>['a', 'b', 'c', 'd']</p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "Set Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
    ],
  },
  string: {
    methods: [
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
    ],
    examples: [
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
      },
      {
        id: "",
        frontTitle: "String Methods",
        backTitle: "",
        backDescription: "<p></p>",
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
