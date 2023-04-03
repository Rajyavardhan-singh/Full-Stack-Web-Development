// function person(fName,lName){
//     this.firstName = fName;
//     this.lastName = lName;
// }

// const person1 = new person("bruce","wayen");
// const person2 = new person("clark","kent");

// person1.getFullName = function()  {
//   return this.firstName+' '+this.lastName;
// }

// console.log(person1.getFullName());

// we can't use console.log(person2.getFullName) for doin so we have to use the concept of prototype

function person(fName,lName){
    this.firstName = fName;
    this.lastName = lName;
}

const person1 = new person("bruce","wayen");
const person2 = new person("clark","kent");

person.prototype.getFullName = function()  {
  return this.firstName+' '+this.lastName;
}

console.log(person1.getFullName());
console.log(person2.getFullName());
