1//
fruits = ["apple", "banana", "orange", "grape"];

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}
console.log("----------------------------------------------------------------------------------------------------------")



fruits.push("kiwi");
console.log(fruits)

console.log("----------------------------------------------------------------------------------------------------------")


fruits.pop()
console.log(fruits)


console.log("----------------------------------------------------------------------------------------------------------")


fruits.unshift("lemon");
console.log(fruits)



console.log("----------------------------------------------------------------------------------------------------------")


fruits.shift();
console.log(fruits)


console.log("----------------------------------------------------------------------------------------------------------")



var indexOfOrange=fruits.indexOf("orange")
console.log(indexOfOrange)



console.log("----------------------------------------------------------------------------------------------------------")



var citrus = fruits.slice(1, 3);
console.log(citrus)
console.log(fruits)


console.log("----------------------------------------------------------------------------------------------------------")


var cz = fruits.splice(2, 2, "orange", "lemon");
console.log(cz)



console.log("----------------------------------------------------------------------------------------------------------")

// Task 2


var person = {
    name: "Ajay Morde",
    age: 24,
    address: "pune-hadpasar-413002"
  };
  

  var properties = Object.keys(person);

for (var i = 0; i < properties.length; i++) {
  var property = properties[i];
  console.log(person[property]);
}



console.log("----------------------------------------------------------------------------------------------------------")


person.age = 30;

var properties = Object.keys(person);

for (var i = 0; i < properties.length; i++) {
  var property = properties[i];
  console.log(person[property]);
}



console.log("----------------------------------------------------------------------------------------------------------")


person.email = "ajaymorde457@gmail.com";


var properties = Object.keys(person);

for (var i = 0; i < properties.length; i++) {
  var property = properties[i];
  console.log(person[property]);
}




console.log("----------------------------------------------------------------------------------------------------------")



delete person.address;

var properties = Object.keys(person);

for (var i = 0; i < properties.length; i++) {
  var property = properties[i];
  console.log(person[property]);
}


console.log("----------------------------------------------------------------------------------------------------------")

console.log(person)