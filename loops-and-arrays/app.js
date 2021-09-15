var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]


for ( var i = 0; i < officeItems.length; i++){
if (officeItems[i] === "computer"){

    console.log("There are" + officeItems.length)
}
}



var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
]

let minAge = 18 

  for ( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i ++) {

  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < minAge) {
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ':' + 'Go find another movie')

  } else (console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + ':' + 'You are over 18, watch away'))

  }
  