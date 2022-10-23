// first

const sentence = ["sense.", "make", "all", "will", "This"];
function reverseArray(){
    return sentence.reverse()
}
console.log(reverseArray(sentence));


// second
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
function greetAliens(){
    for(let i=0;i<aliens.length;i++){
      console.log(` Oh powerful ${aliens[i]}, we humans offer our unconditional surrender!`
      )
    }
}
greetAliens(aliens);


// third
const coolStuff = [
    "gameboys",
    "skateboards",
    "backwards hats",
    "my room",
    "temporary tattoos"
  ];
  const myStuff = [
    "sweaters",
    "skateboards",
    "family-night",
    "my room",
  ];
 
  function justCoolStuff(myStuff, coolStuff) {
    const arr = [];
    myStuff.forEach(arr1 => {
        coolStuff.forEach(arr2 => {
            if (arr1 == arr2) {
                arr.push(arr1);
            }
        })
    });
    return arr;
}
console.log(justCoolStuff(myStuff, coolStuff));


// fourth
const meal = [
    { name: "arugula", source: "plant" },
    { name: "tomatoes", source: "plant" },
    { name: "lemon", source: "plant" },
    { name: "olive oil", source: "plant" },
  ];
  const dinner = [
    { name: "hamburger", source: "meat" },
    { name: "cheese", source: "dairy" },
    { name: "ketchup", source: "plant" },
    { name: "bun", source: "plant" }
  ];
  function isTheDinnerVegan(arr){
    return arr.every((item) => item.source === "plant");

    }
  
  console.log(isTheDinnerVegan(meal));
  console.log(isTheDinnerVegan(dinner));
  
  
