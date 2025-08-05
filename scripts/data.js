const pageData = {
  array: {
    methods: [
      {
        id: "arrayLengthMethod",
        frontTitle: "Array Methods",
        backTitle: "array.length",
        backDescription: "<p>Returns the length property (size) of an array.</p>",
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
    ]
  }, 
  date: {
    methods: [
      {
        id: "",
        frontTitle: "",
        backTitle: "",
        backDescription: "",
      },
    ],
    examples: [
      {
        id: "",
        frontTitle: "",
        backTitle: "",
        backDescription: ""
      },
    ],
    map: {
      methods: [
        {
          id: "",
          frontTitle: "",
          backTitle: "",
          backDescription: "",
        },
      ],
      examples: [
        {
          id: "",
          frontTitle: "",
          backTitle: "",
          backDescription: ""
        },
      ],
    },
      math: {
        methods: [
          {
            id: "",
            frontTitle: "",
            backTitle: "",
            backDescription: "",
          },
        ],
        examples: [
          {
            id: "",
            frontTitle: "",
            backTitle: "",
            backDescription: ""
          },
        ],
      },
      number: {
        methods: [
          {
            id: "",
            frontTitle: "",
            backTitle: "",
            backDescription: "",
          },
        ],
        examples: [
          {
            id: "",
            frontTitle: "",
            backTitle: "",
            backDescription: ""
          },
        ],
      },
      object: {
        methods: [
          {
            id: "",
            frontTitle: "",
            backTitle: "",
            backDescription: "",
          },
        ],
        examples: [
          {
            id: "",
            frontTitle: "",
            backTitle: "",
            backDescription: ""
          },
        ],
      },
      set: {
        methods: [
          {
            id: "",
            frontTitle: "",
            backTitle: "",
            backDescription: "",
          },
        ],
        examples: [
          {
            id: "",
            frontTitle: "",
            backTitle: "",
            backDescription: ""
          },
        ],
      },
      string: {
        methods: [
          {
            id: "",
            frontTitle: "",
            backTitle: "",
            backDescription: "",
          },
        ],
        examples: [
          {
            id: "",
            frontTitle: "",
            backTitle: "",
            backDescription: ""
          },
        ],
      }
    },
  }


function createMemoryCard(obj, flipHandler) {
  const cardArea = document.getElementById("card-area");
  const cardDiv = document.createElement("div");
  cardDiv.id = obj.id;
  cardDiv.classList = "card";
  
  // Extract method name for matching (remove "Method" or "Example" suffix)
  const methodName = obj.id.replace(/(Method|Example)$/, '');
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
