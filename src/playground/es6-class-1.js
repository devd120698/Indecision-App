class Person{
     constructor(name = "Anonymous", age = 0){
         //name = "anonymous" --> when no name is given,  it is used in default case
         this.name = name;
         this.age = age;
     }
     getGretting(){
         return `Hi, this is ${this.name}`;
     }
     getDiscription(){
         return `${this.name} is ${this.age} years ols`
     }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDiscription(){
        let discription = super.getDiscription();

        if(this.hasMajor()){
            discription += ` Their major is ${this.major}.`;
        }
        return discription;
    }
}

class traveler extends Person{
    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }
    hasLocation(){
        return !!this.location;
    }
    getGretting(){
        let greeting = super.getGretting();
        if(this.hasLocation())
        {
            greeting += ` I'm visiting from ${this.location}.`;
        }
        return greeting;
    }
}


const me = new traveler("Divyansh Dubey", 21, "India");
console.log(me.getGretting());