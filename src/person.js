const person1 = {
    name: "Owusu",
    age: 48
}

const Person = {
    name: "Justice",
    age: 15,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);    
    }
}

Person.greet.call(person1) //Will log "Hello, my name is Owusu and I'm 48 years old."
Person.greet.apply(person1) //Will log "Hello, my name is Owusu and I'm 48 years old."
const person2 = Person.greet.bind(person1)()
console.log(person2); //Will log "Hello, my name is Owusu and I'm 48 years old."





