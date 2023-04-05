function dog(){
  
}
dog.prototype.name = "labrador";
const dogOne = new dog;
colorOfDog.prototype = Object.create(dog.prototype);
function colorOfDog(){
  this.color = "black";
  console.log(`hi i am a dog my breed is ${dogOne.name} and my color is ${this.color}`)
}

colorOfDog();

