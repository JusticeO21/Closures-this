const person1 = {
    name: "Owusu",
    age: 48
}

const Person = {
    name: "Justice",
    sge: 15,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);    
    }
}

Person.greet.call(person1)
Person.greet.apply(person1)
const person2 = Person.greet.bind(person1)()
console.log(person2);


function createCounter() {
    let _count = 0;

    return {
        increment: function () {
            _count++;
            console.log(this_count);
        },
        getCount: function () {
            return _count;
        }
    }
}



