const methods = [
    {
        id:"1a",
        frontTitle:"Array Methods",
        backTitle:"array.length",
        backDescription:"Returns the length property (size) of an array."
    },
        {
        id:"2a",
        frontTitle:"Array Methods",
        backTitle:"array.toString()",
        backDescription:"Returns the elements of an array as a comma separated string."
    },
]

const examples = [

    {
        id:"1b",
        frontTitle:"Array Methods",
        backTitle:"fruits.length",
        backDescription:" <p>const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];</p><p>fruits.length = 3</p>",
    }
    ,
      {
        id:"2b",
        frontTitle:"Array Methods",
        backTitle:"fruits.toString()",
        backDescription:"  <h3>const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];</h3><p>let myList = fruits.toString();</p><p>Banana, Orange, Apple, Mango</p>",
    }
]


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

methods.forEach((elm)=> createMemoryCard(elm))
examples.forEach((elm)=> createMemoryCard(elm))
