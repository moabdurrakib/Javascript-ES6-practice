class Parents{
    constructor(){
        this.name ="Shahrukh Khan";
    }
}
class Child extends Parents {
    constructor(childName){
        super(); 
        this.childName = childName;
           
    }
}
const person = new Child("Abram Khan");
console.log(person);