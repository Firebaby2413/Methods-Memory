const arrayMethods = [
    {
        id: "1a",
        frontTitle: "Array Methods",
        backTitle: "array.length",
        backDescription: "<p>Returns the length property (size) of an array.</p>",
    },
    {
        id: "2a",
        frontTitle: "Array Methods",
        backTitle: "array.toString()",
        backDescription:
        "<p>Returns the elements of an array as a comma separated string.</p>",
    },
    {
        id: "3a",
        frontTitle: "Array Methods",
        backTitle: "array.at()",
        backDescription: "<p>Returns an indexed element from an array.</p>",
    },
    {
        id: "4a",
        frontTitle: "Array Methods",
        backTitle: "array.join()",
        backDescription:
        "<p>Joins all array elements into a string.</p><p>With this method, you can specify the separator.</p>",
    },
    {
        id: "5a",
        frontTitle: "Array Methods",
        backTitle: "array.pop()",
        backDescription:
        "<p>Removes the last element from an array.</p><p> Returns the value that was `popped out`.</p>",
    },
    {
        id: "6a",
        frontTitle: "Array Methods",
        backTitle: "array.push()",
        backDescription: "Adds a new element to an array (at the end).",
    },
    {
        id: "7a",
        frontTitle: "Array Methods",
        backTitle: "array.shift()",
        backDescription:
        "<p>Removes the first array element and `shifts` all other elements to a lower index.</p><p>Returns the value that was shifted out.</p>",
    },
    {
        id: "8a",
        frontTitle: "Array Methods",
        backTitle: "array.unshift()",
        backDescription:
        "<p>Adds a new element to an array (at the beginning) and `unshifts` older elements.</p><p>Returns the new array length.</p>",
    },
    {
        id: "9a",
        frontTitle: "Array Methods",
        backTitle: "array.delete()",
        backDescription:
        "<p>Using delete() leaves undefined holes in an array.</p><p>It is recommended to use array.pop() or array.shift() instead.</p>",
    },
    {
        id: "10a",
        frontTitle: "Array Methods",
        backTitle: "array.concat()",
        backDescription:
        "<p>Creates a new array by merging (concatenating) existing arrays.</p><p>Does not change the existing arrays, but returns a new array.</p>",
    },
    {
        id: "11a",
        frontTitle: "Array Methods",
        backTitle: "array.copyWithin()",
        backDescription:
        "<p>Copies array methods to another position in an array.</p><p>Overwrites the existing values, does not add items to the array, does not change the length of the array.</p>",
    },
    {
        id: "12a",
        frontTitle: "Array Methods",
        backTitle: "array.flat()",
        backDescription:
        "<p>Creates a new array with sub-array elements concatenated to a specified depth.</p>",
    },
    {
        id: "13a",
        frontTitle: "Array Methods",
        backTitle: "array.slice()",
        backDescription:
        "<p>Slices out a piece of an array into a new array.</p><p>Creates a new array and does not remove any elements from the source array.</p>",
    },
    {
        id: "14a",
        frontTitle: "Array Methods",
        backTitle: "array.splice()",
        backDescription:
        "<p>Can be used to add new items to an array</p><p>1st parameter defines where new elements should be added, second defines how many should be removed, rest are elements to be added.</p>",
    },
    {
        id: "15a",
        frontTitle: "Array Methods",
        backTitle: "array.toSpliced()",
        backDescription:
        "<p>This method creates a new array , keeping the original array unchanged.</p>",
    },
];

const arrayExamples = [
    {
        id: "1b",
        frontTitle: "Array Methods",
        backTitle: "fruits.length",
        backDescription: "<p>const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];</p><p>fruits.length = 3</p>",
    },
    {
        id: "2b",
        frontTitle: "Array Methods",
        backTitle: "fruits.toString()",
        backDescription: "<p>const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];</p><p>let myList = fruits.toString();</p><p>Banana, Orange, Apple, Mango</p>",
    },
    {
        id: "3b",
        frontTitle: "Array Methods",
        backTitle: "const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];",
        backDescription: "<p>let fruit = fruits.at(2);</p><p>fruits.at(2) === fruits[2];</p>",
    },
    {
        id: "4b",
        frontTitle: "Array Methods",
        backTitle: "const fruits = ['Banana', 'Orange', 'Apple', 'Mango']",
        backDescription: "<p>fruits.join(' * ');</p><p>const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];</p>",
    },
    {
        id: "5b",
        frontTitle: "Array Methods",
        backTitle: "const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];",
        backDescription: "<p>fruits.pop()</p><p>'Mango'</p>",
    },
    {
        id: "6b",
        frontTitle: "Array Methods",
        backTitle: "const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];",
        backDescription:"<p>fruits.push('Kiwi');</p><p>['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi'];</p>",
    },
    {
        id: "7b",
        frontTitle: "Array Methods",
        backTitle: "const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];",
        backDescription: "<p>let fruit = fruits.shift();</p><p>'Banana'</p>",
    },
    {
        id: "8b",
        frontTitle: "Array Methods",
        backTitle: "const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];",
        backDescription: "<p>fruits.unshift('Lemon');</p><p>['Lemon', 'Banana', 'Orange', 'Apple', 'Mango']</p>",
    },
    {
        id: "9b",
        frontTitle: "Array Methods",
        backTitle: "const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];",
        backDescription: "<p>delete fruits[0];</p><p>[undefined, 'Orange', 'Apple', 'Mango']</p>",
    },
    {
        id: "10b",
        frontTitle: "Array Methods",
        backTitle: "const myChildren = myGirls.concat(myBoys);",
        backDescription: "<p>const myGirls = ['Cecilie', 'Lone'];</p><p>const myBoys = ['Emil', 'Tobias', 'Linus'];</p><p>['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus'];</p>",
    },
    {
        id: "11b",
        frontTitle: "Array Methods",
        backTitle: "const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];",
        backDescription: "<p>fruits.copyWithin(2, 0);</p><p>['Banana', 'Orange', 'Banana', 'Orange'];</p>",
    },
    {
        id: "12b",
        frontTitle: "Array Methods",
        backTitle: "const myArr = [[1,2],[3,4],[5,6]];",
        backDescription: "<p>const newArr = myArr.flat();</p><p>[1, 2, 3, 4, 5, 6]</p>",
    },
    {
        id: "13b",
        frontTitle: "Array Methods",
        backTitle:"const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];",
        backDescription: "<p>const citrus = fruits.slice(1);</p><p>['Orange', 'Lemon', 'Apple', 'Mango'];</p>",
    },
    {
        id: "14b",
        frontTitle: "Array Methods",
        backTitle: "const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];",
        backDescription: "<p>fruits.splice(2, 0, 'Lemon', 'Kiwi');</p><p>['Banana', 'Orange','Lemon', 'Kiwi', 'Apple', 'Mango'];</p>",
    },
    {
        id: "15b",
        frontTitle: "Array Methods",
        backTitle: "const months = ['Jan', 'Feb', 'Mar', 'Apr'];",
        backDescription: "<p>const spliced = months.toSpliced(0, 1);</p><p>['Feb', 'Mar', 'Apr'];</p>",
    },
];


function createMemoryCard(obj){
    const cardArea = document.getElementById("card-area");
    // const cardArea = document.querySelector("#card-area");
    const cardDiv = document.createElement('div');
    cardDiv.id = obj.id;
    cardDiv.classList = "card";

    const frontCardDiv = document.createElement('div');
    const backCardDiv = document.createElement('div');

    frontCardDiv.classList = "front";
    backCardDiv.classList = "back";

    const frontCardTitle = document.createElement('h3');
    frontCardTitle.classList = "method-type";
    frontCardTitle.textContent = obj.frontTitle;

    frontCardDiv.append(frontCardTitle)

    const backCardTitle = document.createElement('h3');
    backCardTitle.classList = "method-type";
    backCardTitle.textContent = obj.backTitle;

    backCardDiv.append(backCardTitle)
    backCardDiv.innerHTML = backCardDiv.innerHTML + obj.backDescription;

    cardDiv.append(frontCardDiv,backCardDiv)
    cardArea.append(cardDiv)
}

arrayMethods.forEach((elm) => createMemoryCard(elm));
arrayExamples.forEach((elm) => createMemoryCard(elm));
